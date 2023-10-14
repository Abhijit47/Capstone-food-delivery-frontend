import React from "react";

const Loader = () => {
  return (
    <div
      aria-label="Loading..."
      role="status"
      className="flex h-[85dvh] items-center justify-center space-x-2"
    >
      <span className="animate-pulse text-4xl font-medium text-gray-600">
        Loading...
      </span>
    </div>
  );
};

export default Loader;
