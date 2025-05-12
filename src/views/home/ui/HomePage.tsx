import { SongGrid } from '@/widgets/song-grid';
import { ProBanner } from '@/features/subscription';

export const HomePage = () => {
  return (
    <div className="p-6 space-y-8">
      <SongGrid title="최근 생성 에피타이저" />
      <ProBanner />
    </div>
  );
};
