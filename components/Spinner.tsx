import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-24 w-24 border-t-2 border-b-2 border-gray-900 z-9999"></div>
    </div>
  );
};

export default Spinner;
