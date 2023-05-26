import React, { useEffect, useState } from 'react';

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const xCount = 10; 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading) {
    const skeletonCount = 5; 
    const skeletonRow = Array.from({ length: skeletonCount }).map((_, index) => (
      <span key={index} className="block w-48 h-8 bg-gray-300 animate-pulse mb-4"></span>
    ));

    const skeletonGrid = Array.from({ length: xCount }).map((_, index) => (
      <div key={index} className="flex">
        {skeletonRow}
      </div>
    ));

    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-300">
            {skeletonGrid}
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/*A*/}
    </div>
  );
};

export default Loading;
