import { initialConfig } from '@/config/initial';

export default function MyRepo() {
  return (
    <div
      className="fixed bottom-5 left-10 z-50 md:flex flex-row items-center justify-center hidden"
      aria-label="My repo!"
    >
      <i className="nes-octocat animate"></i>
      <div className="nes-balloon from-left nes-pointer">
        <a href={initialConfig.repo} target="_blank" rel="noopener noreferrer">
          Visit my repo!
        </a>
      </div>
    </div>
  );
}
