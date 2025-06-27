import { useRobotContext } from '@/src/hooks/useRobotContext';
import { useEffect, useRef, useState } from 'react';
import useObserver from '@/src/hooks/useObserver';
import { RobotsList } from '@/src/components/RobotList';
import { SearchForm } from '@/src/components/SearchForm';
import { ProgressBar } from '@/src/components/ProgressBar';
import { RobotContainer } from '@/src/components/RobotContainer';

export function Home() {
  const {
    robots: allRobots,
    error,
    refreshRobots,
    nextRobots,
    initialLoading,
    loadingMore,
  } = useRobotContext();
  const [searchTerm, setSearchTerm] = useState('');
  const sentinelRef = useRef<HTMLDivElement>(null);
  const { isObserver } = useObserver({
    externalRef: sentinelRef as React.RefObject<HTMLElement>,
    shouldStop: loadingMore || initialLoading,
  });

  const filteredRobots = allRobots.filter((robot) =>
    robot.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  useEffect(() => {
    if (isObserver && !loadingMore) {
      nextRobots();
    }
  }, [isObserver, loadingMore, nextRobots]);

  if (initialLoading) {
    return (
      <RobotContainer>
        <SearchForm onSearch={handleSearch} onRefresh={refreshRobots} />
        <ProgressBar isLoading={initialLoading} loadingSpeed={150} pauseAt={85} className="mt-4" />
      </RobotContainer>
    );
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <RobotContainer>
      <SearchForm onSearch={handleSearch} onRefresh={refreshRobots} />
      <RobotsList robots={filteredRobots} />
      <ProgressBar isLoading={loadingMore} loadingSpeed={150} pauseAt={85} className="mt-4" />
      <div ref={sentinelRef} />
    </RobotContainer>
  );
}
