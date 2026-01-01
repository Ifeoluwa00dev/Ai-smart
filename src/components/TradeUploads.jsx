import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pylotjexrdijecuyvjlw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB5bG90amV4cmRpamVjdXl2amx3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyOTAyNDQsImV4cCI6MjA3Nzg2NjI0NH0.qm2FUa7M_mYZU8viWewVzrf3NmSaaWj1WkqVYvB7yhg";
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default function TradeUpload() {
  const [chartFile, setChartFile] = useState(null);
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleUpload = async () => {
    if (!chartFile) return alert("Upload chart image!");

    setLoading(true);
    setMessage("");

    try {
      const fileName = `chart-${Date.now()}.png`;

      // Upload image to Supabase storage
      const { data: imageData, error: imageError } = await supabase.storage
        .from("trade-data")
        .upload(`uploads/${fileName}`, chartFile);

      if (imageError) throw imageError;

      // Get public image URL
      const { data: urlData } = supabase.storage
        .from("trade-data")
        .getPublicUrl(`uploads/${fileName}`);

      const imageUrl = urlData.publicUrl;

      // Save record to database
      const { error: dbError } = await supabase
        .from("trades")
        .insert([{ chart_url: imageUrl, analysis }]);

      if (dbError) throw dbError;

      setMessage("✅ Trade uploaded successfully!");
      setChartFile(null);
      setAnalysis("");
    } catch (err) {
      setMessage("❌ Error: " + err.message);
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Upload New Trade</h2>

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setChartFile(e.target.files[0])}
        className="mb-4"
      />

      <textarea
        value={analysis}
        onChange={(e) => setAnalysis(e.target.value)}
        placeholder="Enter trade analysis..."
        className="w-full p-3 border rounded mb-4"
        rows={5}
      />

      <button
        onClick={handleUpload}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {message && <p className="mt-4">{message}</p>}
    </div>
  );
}
