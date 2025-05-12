import localFont from 'next/font/local';

const pretendard = localFont({
  src: './PretendardVariable.woff2',
  variable: '--font-pretendard',
  display: 'block',
});

const notosans = localFont({
  src: './NotoSansSC-Variable.woff2',
  variable: '--font-notosans',
  display: 'block',
});

const fonts = { pretendard, notosans };

export default fonts;
