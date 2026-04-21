import heroBg from '../assets/KakaoTalk_20260421_080426276.jpg'

export default function HeroSection() {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section
      className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden"
      aria-label="Hero"
    >
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* 다크 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* 콘텐츠 */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 select-none">
        {/* 학교 & 재학 기간 배지 */}
        <span className="mb-6 inline-block rounded-full border border-white/30 bg-white/10 px-5 py-1.5 text-sm font-medium tracking-widest text-white/80 backdrop-blur-sm uppercase">
          세명컴퓨터고등학교 &nbsp;·&nbsp; 2024 – 2027
        </span>

        {/* 이름 */}
        <h1 className="mb-2 text-7xl font-black tracking-tight text-white drop-shadow-2xl sm:text-8xl">
          최선호
        </h1>
        <p className="mb-6 text-2xl font-light tracking-[0.3em] text-white/60 sm:text-3xl">
          CHOI SUN HO
        </p>

        {/* 구분선 */}
        <div className="mb-6 h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        {/* 한 줄 소개 */}
        <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          클라우드 & AI 기반 백엔드를 꿈꾸는 개발자 —{' '}
          <span className="font-semibold text-white">노력이 결과다.</span>
        </p>
      </div>

      {/* 스크롤 인디케이터 */}
      <button
        onClick={handleScrollDown}
        aria-label="아래로 스크롤"
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/50 transition-colors hover:text-white/90"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown />
      </button>
    </section>
  )
}

function ChevronDown() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="animate-bounce"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  )
}
