import React from "react";

export default function Ping() {
  return (
    <span className="relative flex h-3 w-3">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
      <span className="relative inline-flex h-3 w-3 rounded-full bg-primary"></span>
    </span>
  );
}
