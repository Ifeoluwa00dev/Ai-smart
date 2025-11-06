import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { AlertCircle } from 'lucide-react';

// ✅ Supabase config
const supabaseUrl = "https://pylotjexrdijecuyvjlw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5bG90amV4cmRpamVjdXl2amx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyOTAyNDQsImV4cCI6MjA3Nzg2NjI0NH0.qm2FUa7M_mYZU8viWewVzrf3NmSaaWj1WkqVYvB7yhg";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function TradeChartAnalysis() {
  const [chartUrl, setChartUrl] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // ✅ Supabase paths
  const chartPath = 'charts/trade-chart-1.png';
  const analysisPath = 'analysis/trade-analysis-2.txt';

  useEffect(() => {
    fetchData();
  }, []);

  const fetchFileUrl = async (filePath) => {
    const { data } = supabase.storage.from('trade-data').getPublicUrl(filePath);
    return data.publicUrl;
  };

  const fetchData = async () => {
    setLoading(true);
    setError('');

    try {
      const chartDownloadUrl = await fetchFileUrl(chartPath);
      const analysisDownloadUrl = await fetchFileUrl(analysisPath);

      setChartUrl(chartDownloadUrl);

      const response = await fetch(analysisDownloadUrl);
      const text = await response.text();
      setAnalysis(text);

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  // ✅ LOADING UI
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-gray-600">Loading trade data...</p>
        </div>
      </div>
    );
  }

  // ✅ ERROR UI
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md">
          <div className="flex items-start gap-3">
            <AlertCircle className="text-red-500 flex-shrink-0 mt-1" size={20} />
            <div>
              <h3 className="text-red-800 font-semibold mb-2">Error Loading Data</h3>
              <p className="text-red-600 text-sm mb-3">{error}</p>
              <p className="text-red-600 text-sm">
                Ensure:
                <ul className="list-disc ml-4 mt-1">
                  <li>Supabase keys are correct</li>
                  <li>Storage paths are valid</li>
                  <li>Files exist in the Supabase bucket</li>
                </ul>
              </p>
              <button 
                onClick={fetchData}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ✅ MAIN UI
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Trade Analysis Report</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Chart */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Trade Chart</h2>
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <img src={chartUrl} alt="Trade Chart" className="w-full h-auto" />
            </div>
          </div>

          {/* Analysis */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Analysis</h2>
            <div className="text-gray-700 whitespace-pre-wrap leading-relaxed">
              {analysis}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
