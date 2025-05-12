'use client';

import { useEffect, useRef, useState } from 'react';

interface ResizableSidebarProps {
  children: React.ReactNode;
  minWidth: number;
  maxWidth: number;
  initialWidth?: number;
}

export const ResizableSidebar: React.FC<ResizableSidebarProps> = ({
  children,
  minWidth,
  maxWidth,
  initialWidth = 200,
}) => {
  // 상태 관리
  const [width, setWidth] = useState<number>(initialWidth);
  const [isResizing, setIsResizing] = useState<boolean>(false);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  // 마우스 다운 이벤트 핸들러
  const startResizing = (mouseDownEvent: React.MouseEvent): void => {
    mouseDownEvent.preventDefault();
    setIsResizing(true);
  };

  // 리사이징 로직
  useEffect(() => {
    if (!isResizing) return;

    // 마우스 이동 이벤트 핸들러
    const handleMouseMove = (mouseMoveEvent: MouseEvent): void => {
      if (!sidebarRef.current) return;

      // 사이드바 위치에 상대적인 마우스 위치 계산
      const newWidth = mouseMoveEvent.clientX - sidebarRef.current.getBoundingClientRect().left;

      // 최소/최대 너비 범위 내에서 조정
      setWidth(Math.max(minWidth, Math.min(maxWidth, newWidth)));
    };

    // 마우스 업 이벤트 핸들러
    const stopResizing = (): void => {
      setIsResizing(false);
    };

    // 이벤트 리스너 등록 및 UI 조정
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', stopResizing);

    // 드래그 중 UI 개선
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'col-resize';

    // 클린업 함수
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', stopResizing);
      document.body.style.userSelect = '';
      document.body.style.cursor = '';
    };
  }, [isResizing, minWidth, maxWidth]);

  return (
    <div ref={sidebarRef} className="relative h-screen" style={{ width: `${width}px` }}>
      {children}
      <div
        className={`absolute top-0 right-0 w-1 h-full bg-white/10 hover:bg-white/20 cursor-col-resize transition-colors ${
          isResizing ? 'bg-white/30' : ''
        }`}
        onMouseDown={startResizing}
        aria-hidden="true"
      />
    </div>
  );
};
