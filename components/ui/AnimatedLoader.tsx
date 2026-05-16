'use client';

export function AnimatedLoader() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative w-16 h-16">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-cyan-500/20 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-cyan-500 rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
        </div>
      </div>
      <p className="text-cyan-400 font-medium animate-pulse tracking-wide uppercase text-xs">
        Processing Request...
      </p>
    </div>
  );
}
