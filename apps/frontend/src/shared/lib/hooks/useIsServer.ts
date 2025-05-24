import { useEffect, useState } from 'react';

export const useIsServerSide = () => {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  }, []);
  return isServer;
};
