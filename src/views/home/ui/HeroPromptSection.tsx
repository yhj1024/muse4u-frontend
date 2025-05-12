const HeroPromptSection = () => {
  return (
    <div className="relative flex-1 bg-blue-400/40 rounded-xl px-8 py-4 max-w-[700px]">
      <div className="flex flex-wrap gap-2 mb-6">
        <Chip text="랩" />
        <Chip text="발라드" />
        <Chip text="락" />
        <Chip text="트로트" />
        <Chip text="팝" />
        <Chip text="알앤비" />
        <Chip text="메탈" />
      </div>
      <div>내 목소리로 발라드를 만들어줘!</div>
      <button className="absolute bottom-5 right-5 bg-blue-900/50 hover:bg-blue-900/70 rounded-full p-2 transition-colors">
        <MuteIcon />
      </button>
    </div>
  );
};
