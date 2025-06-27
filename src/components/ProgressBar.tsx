import { useState, useEffect, useRef } from 'react';

interface ProgressBarProps {
  isLoading: boolean;
  loadingSpeed?: number;
  increment?: number;
  pauseAt?: number;
  className?: string;
}

export const ProgressBar = ({
  isLoading,
  loadingSpeed = 200,
  increment = 10,
  pauseAt = 80,
  className = '',
}: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);
  const progressInterval = useRef<number | null>(null);

  useEffect(() => {
    if (isLoading) {
      setProgress(10);
      progressInterval.current = window.setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + increment;
          return newProgress >= pauseAt ? pauseAt : newProgress;
        });
      }, loadingSpeed);
    } else {
      setProgress(100);
      if (progressInterval.current !== null) {
        window.clearInterval(progressInterval.current);
        progressInterval.current = null;
      }
      const timeout = setTimeout(() => setProgress(0), 100);
      return () => clearTimeout(timeout);
    }

    return () => {
      if (progressInterval.current !== null) {
        window.clearInterval(progressInterval.current);
        progressInterval.current = null;
      }
    };
  }, [isLoading, loadingSpeed, increment, pauseAt]);

  if (!isLoading && progress === 0) return null;

  return (
    <div className="min-h-screen-custom">
      <div className="flex items-center justify-center h-full">
        <progress
          className={`nes-progress is-success transition-all duration-300 ${className}`}
          value={progress}
          max="100"
        />
      </div>
    </div>
  );
};
