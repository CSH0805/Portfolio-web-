import heroBg from '../assets/choisunho.png'

const stats = [
  { value: '12+', label: '외부 공모전 참여' },
  { value: '8개', label: '외부 대회 수상 이력' },
  { value: '약 1000만원', label: '상금 및 장학금 수혜' },
  { value: '7개', label: '교내 상장 및 수료증' },
]

export default function HeroSection() {
  const handleScrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
  }

  return (
    <section
      className="relative flex flex-col items-center w-full h-screen overflow-hidden"
      aria-label="Hero"
    >
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* 다크 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/65 to-black/90" />

      {/* 메인 텍스트 — 화면 위쪽으로 배치 */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-[12vh] select-none">
        {/* 학교 & 재학 기간 배지 */}
        <span className="mb-5 inline-block rounded-full border border-white/30 bg-white/10 px-5 py-1.5 text-sm font-medium tracking-widest text-white/80 backdrop-blur-sm uppercase">
          세명컴퓨터고등학교 &nbsp;·&nbsp; 2024 – 2027
        </span>

        {/* 이름 */}
        <h1 className="mb-2 text-7xl font-black tracking-tight text-white drop-shadow-2xl sm:text-8xl">
          최선호
        </h1>
        <p className="mb-5 text-2xl font-light tracking-[0.3em] text-white/60 sm:text-3xl">
          CHOI SUN HO
        </p>

        {/* 구분선 */}
        <div className="mb-5 h-px w-24 bg-gradient-to-r from-transparent via-white/50 to-transparent" />

        {/* 한 줄 소개 */}
        <p className="max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
          클라우드 & AI 기반 백엔드를 꿈꾸는 개발자 —{' '}
          <span className="font-semibold text-white">노력이 결과다.</span>
        </p>

        {/* PDF 다운로드 버튼 */}
        <div className="mt-7 flex flex-col items-center gap-2">
          <a
            href={`${import.meta.env.BASE_URL}최선호PORTFOLIO.pdf`}
            download="최선호PORTFOLIO.pdf"
            className="flex items-center gap-2.5 rounded-full border border-white/25 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/40"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Portfolio PDF 다운로드
          </a>
          <p className="text-xs text-white/35">최선호의 PORTFOLIO를 PDF 버전으로 받아보세요</p>
        </div>
      </div>

      {/* 수치 데이터 카드 */}
      <div className="relative z-10 w-full max-w-4xl px-6 mt-auto mb-16">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-5 text-center backdrop-blur-sm"
            >
              <p className="text-2xl font-extrabold text-white sm:text-3xl">{value}</p>
              <p className="mt-1 text-xs text-white/55 sm:text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <button
        onClick={handleScrollDown}
        aria-label="아래로 스크롤"
        className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-white/40 transition-colors hover:text-white/80"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="26"
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
      </button>
    </section>
  )
}
