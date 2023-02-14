import React from 'react';

const SoccerPitch = () => {
  return (
    <div className="h-screen w-screen bg-green-700 flex justify-center items-center">
      <div className="h-4/5 w-2/5 bg-green-100 border-4 border-white rounded-lg flex items-center justify-center">
        <div className="h-4/5 w-4/5 bg-green-700 border-4 border-white rounded-lg relative">
          <div className="h-1/2 w-1/2 bg-green-100 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="h-1/2 w-1/2 bg-green-100 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          <div className="h-1/2 w-1/2 bg-green-100 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90"></div>
          <div className="h-1/2 w-1/2 bg-green-100 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-135"></div>
          <div className="h-full w-1 bg-white absolute top-0 left-1/2 transform -translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default SoccerPitch;
