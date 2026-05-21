import React from "react";
import ScoreCard from "./ScoreCard";
import IssueList from "./IssueList";
import ScoreChart from "./ScoreChart";
export default function Dashboard({ result }) {
  if (!result) return null;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-2 text-xs text-gray-500 font-mono">
        <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse-slow" />
        Analysis complete · {new Date().toLocaleTimeString()}
      </div>

      {/* Score */}
      <ScoreCard score={result.score} mode={result.mode} url={result.url} />
      <ScoreChart data={result} />
      {/* Issues & Recommendations */}
      <IssueList
        issues={result.issues}
        recommendations={result.recommendations}
      />

      {/* Footer */}
      {result.id && (
        <div className="text-xs text-gray-600 font-mono text-center">
          Saved · ID: {result.id}
        </div>
      )}
    </div>
  );
}
