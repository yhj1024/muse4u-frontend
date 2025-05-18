const paddingConfig = {
  default: 'px-4 lg:p-6',
  leftOnly: 'pl-4 lg:pl-6',
};

export const SectionContainer = ({
  children,
  paddingType = 'default',
}: {
  children: React.ReactNode;
  paddingType?: 'default' | 'leftOnly';
}) => {
  const padding = paddingConfig[paddingType];
  return <section className={`${padding} max-w-[1920px] my-5`}>{children}</section>;
};
