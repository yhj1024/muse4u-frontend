import type { Metadata } from 'next';
import './globals.css';
import { Sidebar } from '@/widgets/sidebar';
import fonts from '../../public/fonts/Fonts';
import { PlayerController } from '@/widgets/player-controller';

export const metadata: Metadata = {
  title: 'Muse 4U',
  description: 'AI 음악생성 사이트',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { pretendard } = fonts;

  return (
    <html lang="ko">
      <body className={`${pretendard.className} text-white-primary bg-background-primary`}>
        <div className="flex flex-col h-screen">
          <div className={'lg:hidden px-4 lg:px-6 py-2.5 flex items-center justify-between'}>
            <div className={'text-4xl font-bold'}>
              <img src={'/svgs/muse4u.svg'} alt={'test'} width={160} />
              {/*<img src={'/svgs/muse4uline_ver.svg'} alt={'test'} width={160} />*/}
              {/*<Muse4u />*/}
              {/*<Muse4uline_ver />*/}
            </div>
            <div>햄버거</div>
          </div>
          <div className="flex flex-1 overflow-hidden">
            <div className={'hidden lg:flex'}>
              {/*<ResizableSidebar minWidth={200} maxWidth={600}>*/}
              <div className="h-full overflow-hidden">
                <Sidebar />
              </div>
            </div>
            <main className="w-full overflow-y-auto">
              {children}
              <div className="fixed bottom-0 left-0 lg:left-[200px] right-0 z-10">
                <PlayerController />
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
