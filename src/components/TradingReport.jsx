import React, { useState, useEffect } from 'react';
import { FaUpload, FaChartLine, FaTrash, FaDownload, FaEye, FaEdit, FaSave, FaTimes } from 'react-icons/fa';

const TradeReportAnalyzer = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedReport, setSelectedReport] = useState(null);
  const [editingAnalysis, setEditingAnalysis] = useState(null);
  const [analysisText, setAnalysisText] = useState('');

  // Load reports from storage on mount
  useEffect(() => {
    loadReports();
  }, []);

  const loadReports = async () => {
    try {
      setLoading(true);
      const result = await window.storage.list('trade-report:');
      if (result && result.keys) {
        const loadedReports = await Promise.all(
          result.keys.map(async (key) => {
            try {
              const data = await window.storage.get(key);
              return data ? JSON.parse(data.value) : null;
            } catch (error) {
              console.error(`Error loading report ${key}:`, error);
              return null;
            }
          })
        );
        setReports(loadedReports.filter(r => r !== null).sort((a, b) => b.timestamp - a.timestamp));
      }
    } catch (error) {
      console.error('Error loading reports:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      const newReport = {
        id: `trade-report:${Date.now()}`,
        name: file.name,
        type: file.type,
        size: file.size,
        data: e.target.result,
        timestamp: Date.now(),
        analysis: '',
        notes: []
      };

      try {
        await window.storage.set(newReport.id, JSON.stringify(newReport));
        await loadReports();
      } catch (error) {
        console.error('Error saving report:', error);
        alert('Failed to save report. Please try again.');
      }
    };

    if (file.type.startsWith('image/')) {
      reader.readAsDataURL(file);
    } else {
      reader.readAsText(file);
    }
  };

  const deleteReport = async (reportId) => {
    if (!confirm('Are you sure you want to delete this report?')) return;

    try {
      await window.storage.delete(reportId);
      await loadReports();
      if (selectedReport?.id === reportId) {
        setSelectedReport(null);
      }
    } catch (error) {
      console.error('Error deleting report:', error);
      alert('Failed to delete report.');
    }
  };

  const saveAnalysis = async () => {
    if (!editingAnalysis) return;

    try {
      const updatedReport = {
        ...editingAnalysis,
        analysis: analysisText
      };

      await window.storage.set(updatedReport.id, JSON.stringify(updatedReport));
      await loadReports();
      setSelectedReport(updatedReport);
      setEditingAnalysis(null);
      setAnalysisText('');
    } catch (error) {
      console.error('Error saving analysis:', error);
      alert('Failed to save analysis.');
    }
  };

  const startEditingAnalysis = (report) => {
    setEditingAnalysis(report);
    setAnalysisText(report.analysis || '');
  };

  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatFileSize = (bytes) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / 1048576).toFixed(1) + ' MB';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading reports...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-light text-gray-900 mb-2 flex items-center gap-3">
            <FaChartLine className="text-blue-600" />
            Trade Chart Report Analyzer
          </h1>
          <p className="text-gray-600 font-light">
            Upload trade charts and reports for automatic storage and analysis
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <label className="flex flex-col items-center justify-center border-2 border-dashed border-blue-300 rounded-xl p-12 cursor-pointer hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300">
            <FaUpload className="text-5xl text-blue-600 mb-4" />
            <span className="text-lg font-light text-gray-700 mb-2">
              Click to upload or drag and drop
            </span>
            <span className="text-sm text-gray-500">
              PNG, JPG, PDF, CSV or Excel files (Max 5MB)
            </span>
            <input
              type="file"
              className="hidden"
              accept="image/*,.pdf,.csv,.xlsx,.xls"
              onChange={handleFileUpload}
            />
          </label>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Reports List */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-light text-gray-900 mb-6 flex items-center gap-2">
              <FaChartLine className="text-blue-600" />
              Uploaded Reports ({reports.length})
            </h2>

            {reports.length === 0 ? (
              <div className="text-center py-12">
                <FaChartLine className="text-6xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-light">No reports uploaded yet</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
                {reports.map((report) => (
                  <div
                    key={report.id}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 cursor-pointer ${
                      selectedReport?.id === report.id
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedReport(report)}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-gray-900 truncate mb-1">
                          {report.name}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {formatDate(report.timestamp)}
                        </p>
                        <p className="text-xs text-gray-400 mt-1">
                          {formatFileSize(report.size)}
                        </p>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedReport(report);
                          }}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                          title="View"
                        >
                          <FaEye />
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            deleteReport(report.id);
                          }}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                          title="Delete"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                    {report.analysis && (
                      <div className="mt-2 text-xs text-green-600 flex items-center gap-1">
                        <FaEdit /> Analysis available
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Analysis Panel */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-light text-gray-900 mb-6">
              Analysis & Preview
            </h2>

            {!selectedReport ? (
              <div className="text-center py-12">
                <FaChartLine className="text-6xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 font-light">
                  Select a report to view and analyze
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Report Preview */}
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-3">
                    Report Preview
                  </h3>
                  <div className="bg-gray-50 rounded-xl p-4 max-h-64 overflow-auto">
                    {selectedReport.type.startsWith('image/') ? (
                      <img
                        src={selectedReport.data}
                        alt={selectedReport.name}
                        className="w-full h-auto rounded-lg"
                      />
                    ) : (
                      <div className="text-gray-600 text-sm font-mono whitespace-pre-wrap">
                        {selectedReport.data.substring(0, 500)}
                        {selectedReport.data.length > 500 && '...'}
                      </div>
                    )}
                  </div>
                </div>

                {/* Analysis Section */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-medium text-gray-900">
                      Analysis
                    </h3>
                    {!editingAnalysis ? (
                      <button
                        onClick={() => startEditingAnalysis(selectedReport)}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <FaEdit />
                        {selectedReport.analysis ? 'Edit' : 'Add'} Analysis
                      </button>
                    ) : (
                      <div className="flex gap-2">
                        <button
                          onClick={saveAnalysis}
                          className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                        >
                          <FaSave />
                          Save
                        </button>
                        <button
                          onClick={() => {
                            setEditingAnalysis(null);
                            setAnalysisText('');
                          }}
                          className="flex items-center gap-2 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors"
                        >
                          <FaTimes />
                          Cancel
                        </button>
                      </div>
                    )}
                  </div>

                  {editingAnalysis ? (
                    <textarea
                      value={analysisText}
                      onChange={(e) => setAnalysisText(e.target.value)}
                      placeholder="Enter your analysis here..."
                      className="w-full h-64 p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none font-light"
                    />
                  ) : (
                    <div className="bg-gray-50 rounded-xl p-4 min-h-64">
                      {selectedReport.analysis ? (
                        <p className="text-gray-700 whitespace-pre-wrap font-light leading-relaxed">
                          {selectedReport.analysis}
                        </p>
                      ) : (
                        <p className="text-gray-400 italic">
                          No analysis added yet. Click "Add Analysis" to get started.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeReportAnalyzer;