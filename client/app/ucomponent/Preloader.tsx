"use client";

export default function Preloader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white/95 backdrop-blur-sm z-[9999]">
      {/* Spinner */}
      <div className="relative">
        {/* Outer ring */}
        <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-green-500 border-opacity-25"></div>
        
        {/* Inner ring */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="animate-spin-reverse rounded-full h-12 w-12 border-t-4 border-green-500 border-solid"></div>
        </div>
      </div>

      {/* Loading text with animation */}
      <div className="mt-6 flex space-x-2">
        <div className="animate-bounce text-green-600 text-lg font-medium">L</div>
        <div className="animate-bounce delay-100 text-green-600 text-lg font-medium">o</div>
        <div className="animate-bounce delay-200 text-green-600 text-lg font-medium">a</div>
        <div className="animate-bounce delay-300 text-green-600 text-lg font-medium">d</div>
        <div className="animate-bounce delay-400 text-green-600 text-lg font-medium">i</div>
        <div className="animate-bounce delay-500 text-green-600 text-lg font-medium">n</div>
        <div className="animate-bounce delay-600 text-green-600 text-lg font-medium">g</div>
        <div className="animate-bounce delay-700 text-green-600 text-lg font-medium">.</div>
        <div className="animate-bounce delay-800 text-green-600 text-lg font-medium">.</div>
        <div className="animate-bounce delay-900 text-green-600 text-lg font-medium">.</div>
      </div>

      {/* Optional progress bar */}
      <div className="mt-8 w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
        <div className="animate-progress h-full bg-green-500"></div>
      </div>
    </div>
  );
}