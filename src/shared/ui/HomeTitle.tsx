export const HomeTitle = ({ title }: { title: string; className?: string }) => {
  return <h3 className={`text-xl md:text-3xl font-bold leading-12 mb-4`}>{title}</h3>;
};
