import { Button } from '@/shared/ui';
import { HeroPromptSection } from '@/views/home/ui/HeroPromptSection';
import { Recommend } from '@/widgets/recommend/Recommend';
import { Algorithm } from '@/widgets/algorithm/Algorithm';
import { SectionContainer } from '@/shared/ui/container/SectionContainer';
import { GenreBrowser } from '@/widgets/genre-broswer/GenreBrowser';
import { GenreDetail } from '@/widgets/genre-detail/GenreDetail';

const HomeContainer = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
export const HomePage = () => {
  return (
    <HomeContainer>
      <Hero />
      <Algorithm />
      <Recommend />
      <GenreBrowser />
      <GenreDetail />
    </HomeContainer>
  );
};

const Hero = () => {
  return (
    <SectionContainer>
      <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-r from-blue-800">
        <div className="py-6 px-8 flex flex-col justify-center md:flex-row">
          <HeroContent />
          <HeroPromptSection />
        </div>
      </div>
    </SectionContainer>
  );
};

const HeroContent = () => {
  return (
    <div className="flex-1 pb-6 md:pb-0">
      {/*<Badge text="NEW MODEL" />*/}
      <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-12">나만의 음악을 쉽고 빠르게</h1>
      <p>단 몇 번의 클릭으로 프로 수준의 음악 제작</p>
      <p>원하는 목소리, 장르, 스타일을 자유롭게 선택</p>
      <p>Muse 4U AI 기술로 완성도 높은 음악을 만들어 보세요</p>
      <div className="flex flex-wrap gap-4 mt-4">
        <Button type={'primary'}>시작하기</Button>
        {/*<Button>Learn More</Button>*/}
      </div>
    </div>
  );
};
