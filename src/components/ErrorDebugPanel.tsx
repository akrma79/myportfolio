import React, { useState } from 'react';
import { Bug, Download, Trash2, Eye, EyeOff } from 'lucide-react';
import { errorLogger } from '../utils/errorLogger';

export const ErrorDebugPanel: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [logs, setLogs] = useState(errorLogger.getLogs());

  const refreshLogs = () => {
    setLogs(errorLogger.getLogs());
  };

  const clearLogs = () => {
    errorLogger.clearLogs();
    setLogs([]);
  };

  const downloadLogs = () => {
    const dataStr = JSON.stringify(logs, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = `error-logs-${new Date().toISOString().split('T')[0]}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-50 p-3 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 transition-colors"
        title="Error Debug Panel"
      >
        <Bug size={20} />
      </button>

      {/* Debug Panel */}
      {isVisible && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl max-w-4xl w-full max-h-[80vh] overflow-hidden">
            <div className="p-4 border-b border-gray-700 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white flex items-center">
                <Bug className="mr-2" size={20} />
                Error Debug Panel ({logs.length} logs)
              </h3>
              <div className="flex items-center space-x-2">
                <button
                  onClick={refreshLogs}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Refresh"
                >
                  <Eye size={16} />
                </button>
                <button
                  onClick={downloadLogs}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Download Logs"
                >
                  <Download size={16} />
                </button>
                <button
                  onClick={clearLogs}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Clear Logs"
                >
                  <Trash2 size={16} />
                </button>
                <button
                  onClick={() => setIsVisible(false)}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Close"
                >
                  <EyeOff size={16} />
                </button>
              </div>
            </div>
            
            <div className="p-4 max-h-96 overflow-auto">
              {logs.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No error logs found</p>
              ) : (
                <div className="space-y-4">
                  {logs.map((log, index) => (
                    <div key={index} className="bg-gray-800 border border-gray-700 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-red-400 font-mono text-sm">
                          {log.error.code}
                        </span>
                        <span className="text-gray-500 text-xs">
                          {new Date(log.error.timestamp).toLocaleString()}
                        </span>
                      </div>
                      <p className="text-white mb-2">{log.error.message}</p>
                      <div className="text-xs text-gray-400">
                        <p>URL: {log.url}</p>
                        <p>Context: {log.error.context}</p>
                      </div>
                      {log.error.details && (
                        <details className="mt-2">
                          <summary className="text-xs text-gray-500 cursor-pointer">
                            Details
                          </summary>
                          <pre className="text-xs text-gray-400 mt-1 overflow-auto">
                            {JSON.stringify(log.error.details, null, 2)}
                          </pre>
                        </details>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};