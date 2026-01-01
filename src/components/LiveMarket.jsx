import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, RefreshCw } from 'lucide-react';

export default function DailyMediaShowcase() {
  const [mediaItems, setMediaItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Firebase/Supabase configuration
  const FIREBASE_URL = 'YOUR_FIREBASE_STORAGE_URL_HERE';
  const SUPABASE_URL = 'YOUR_SUPABASE_URL_HERE';
  
  // Choose your backend ('firebase' or 'supabase')
  const BACKEND = 'firebase';

  useEffect(() => {
    fetchMedia();
    // Optional: Auto-refresh every 5 minutes
    const interval = setInterval(fetchMedia, 300000);
    return () => clearInterval(interval);
  }, []);

  const fetchMedia = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Example: Fetch from Firebase Storage or Supabase
      // Replace this with your actual API endpoint
      const response = await fetch(`${BACKEND === 'firebase' ? FIREBASE_URL : SUPABASE_URL}/media`);
      
      if (!response.ok) throw new Error('Failed to fetch media');
      
      const data = await response.json();
      
      // Expected format: Array of { id, type, url, date, caption }
      // Sort by date, newest first
      const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
      
      setMediaItems(sortedData);
      setCurrentIndex(0);
    } catch (err) {
      setError(err.message);
      
      // DEMO DATA - Remove this when connecting to real backend
      const demoData = [
        {
          id: '1',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=800',
          date: new Date().toISOString(),
          caption: 'Today\'s moment'
        },
        {
          id: '2',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1682687221038-404cb8830901?w=800',
          date: new Date(Date.now() - 86400000).toISOString(),
          caption: 'Yesterday\'s memory'
        },
        {
          id: '3',
          type: 'image',
          url: 'https://images.unsplash.com/photo-1682687220063-4742bd7fd538?w=800',
          date: new Date(Date.now() - 172800000).toISOString(),
          caption: 'Two days ago'
        }
      ];
      setMediaItems(demoData);
    } finally {
      setLoading(false);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : mediaItems.length - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev < mediaItems.length - 1 ? prev + 1 : 0));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return 'Today';
    } else if (date.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    } else {
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
  };

  const currentMedia = mediaItems[currentIndex];

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="animate-spin text-purple-400 mx-auto mb-4" size={48} />
          <p className="text-white text-xl">Loading daily moments...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Refresh Button */}
        <div className="mb-6 text-right">
          <button
            onClick={fetchMedia}
            className="inline-flex items-center gap-2 bg-purple-600/50 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-all backdrop-blur-sm"
          >
            <RefreshCw size={16} />
            Refresh
          </button>
        </div>

        {/* Media Display */}
        {mediaItems.length > 0 ? (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20">
            {/* Date Header */}
            <div className="bg-purple-600/30 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white">
                <Calendar size={20} />
                <span className="font-semibold">{formatDate(currentMedia.date)}</span>
              </div>
              <div className="text-purple-200 text-sm">
                {currentIndex + 1} / {mediaItems.length}
              </div>
            </div>

            {/* Media Container */}
            <div className="relative bg-black/40 aspect-video flex items-center justify-center">
              {currentMedia.type === 'image' ? (
                <img
                  src={currentMedia.url}
                  alt={currentMedia.caption || `Upload from ${formatDate(currentMedia.date)}`}
                  className="max-w-full max-h-full object-contain"
                />
              ) : (
                <video
                  src={currentMedia.url}
                  controls
                  className="max-w-full max-h-full"
                  key={currentMedia.id}
                >
                  Your browser does not support the video tag.
                </video>
              )}

              {/* Navigation Arrows */}
              {mediaItems.length > 1 && (
                <>
                  <button
                    onClick={goToPrevious}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 text-white p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
                    aria-label="Previous media"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    onClick={goToNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-600/80 hover:bg-purple-600 text-white p-3 rounded-full transition-all transform hover:scale-110 shadow-lg"
                    aria-label="Next media"
                  >
                    <ChevronRight size={24} />
                  </button>
                </>
              )}
            </div>

            {/* Caption */}
            {currentMedia.caption && (
              <div className="px-6 py-3 bg-black/20">
                <p className="text-white text-center">{currentMedia.caption}</p>
              </div>
            )}

            {/* Timeline Dots */}
            {mediaItems.length > 1 && (
              <div className="px-6 py-4 flex justify-center gap-2">
                {mediaItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? 'bg-purple-400 w-8'
                        : 'bg-purple-600/40 hover:bg-purple-600/60'
                    }`}
                    aria-label={`Go to media ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-12 text-center border border-white/20">
            <Calendar size={48} className="mx-auto text-purple-400 mb-4" />
            <h2 className="text-2xl font-bold text-white mb-2">No Media Yet</h2>
            <p className="text-purple-200">Check back soon for daily updates!</p>
          </div>
        )}

        {error && (
          <div className="mt-4 bg-red-500/20 border border-red-500/50 text-red-200 px-4 py-3 rounded-lg">
            <p className="text-sm">Using demo data. Connect to Firebase/Supabase to load real media.</p>
          </div>
        )}
      </div>
    </div>
  );
}