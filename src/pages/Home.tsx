import { useRobotContext } from '@/src/hooks/useRobotContext';
import { useEffect, useRef } from 'react';
import useObserver from '@/src/hooks/useObserver';
import { RobotsList } from '@/src/components/RobotList';
import ScrollToTopButton from '@/src/components/ScrollToTopButton';
import { SearchForm } from '@/src/components/SearchForm';
import { ProgressBar } from '../components/ProgressBar';

export function Home() {
  const { robots, error, refreshRobots, nextRobots, initialLoading, loadingMore } =
    useRobotContext();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const { isObserver } = useObserver({
    externalRef: sentinelRef as React.RefObject<HTMLElement>,
    shouldStop: loadingMore || initialLoading,
  });

  useEffect(() => {
    if (isObserver && !loadingMore) {
      nextRobots();
    }
  }, [isObserver, loadingMore, nextRobots]);

  if (initialLoading) {
    return (
      <div className="min-h-screen-custom">
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">Cargando robots...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <SearchForm onSearch={() => {}} onRefresh={refreshRobots} />
      <RobotsList robots={robots} />
      <ScrollToTopButton />
      <ProgressBar isLoading={loadingMore} loadingSpeed={150} pauseAt={85} className="mt-4" />
      <div ref={sentinelRef} />
    </>
  );
}
