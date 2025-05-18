'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Search, Notice, Idea, Subscribe, Muse4u, Muse4uline_ver } from '@/shared/ui/icons';

type SVGComponentProps = React.SVGProps<SVGSVGElement>;
type SVGComponent = React.ComponentType<SVGComponentProps>;

export const Sidebar = () => {
  return (
    <Container>
      <Title />
      <Menus />
    </Container>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <aside className="border-r border-border-secondary flex flex-col w-[200px] h-full">
      {children}
    </aside>
  );
};

const Title = () => {
  return (
    <div className="p-5">
      <h1 className="font-bold text-3xl">
        {/*Muse4u*/}
        {/*<Muse4u />*/}
        <Muse4uline_ver />
      </h1>
    </div>
  );
};

const Menu = ({ href, title, Icon }: { href: string; title: string; Icon: SVGComponent }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center px-5 py-2 hover:bg-white/10 relative ${isActive ? 'bg-white/10' : ''}`}
    >
      {isActive && <div className="absolute left-0 top-0 w-1 h-full bg-white-primary"></div>}
      <span className={`mr-3 ${isActive ? '' : 'text-[#726E6C]'} flex items-center gap-x-2.5`}>
        <Icon width={16} height={16} fill={isActive ? '#ffffff' : '#726E6C'} />
        {title}
      </span>
    </Link>
  );
};

const Menus = () => {
  const menuItems = [
    {
      href: '/',
      title: '메인',
      Icon: Home,
    },
    {
      href: '/create',
      title: '음악 만들기',
      Icon: Idea,
    },
    {
      href: '/search',
      title: '검색',
      Icon: Search,
    },
    {
      href: '/notice',
      title: '알림',
      Icon: Notice,
    },
    {
      href: '/subscribe',
      title: '구독',
      Icon: Subscribe,
    },
  ];
  return (
    <nav className="flex-1 py-4">
      {menuItems.map((item) => (
        <Menu key={item.href} href={item.href} title={item.title} Icon={item.Icon} />
      ))}
    </nav>
  );
};
