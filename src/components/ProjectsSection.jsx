import { useState, useEffect, useRef } from 'react'
import { projectPortfolio } from '../data/portfolioData'

const allImages = import.meta.glob('../assets/*.{jpg,jpeg,png,JPG,PNG}', { eager: true })
const getImg = (f) => allImages[`../assets/${f}`]?.default ?? null

// ── 캐러셀 ──────────────────────────────────────────────────
function ProjectCarousel({ images }) {
  const [idx, setIdx] = useState(0)
  const isMultiple = images.length > 1
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setIdx(i => (i + 1) % images.length)
  const isArch = images[idx]?.includes('아키텍처')

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#111]">
      {/* 이미지 */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        {getImg(images[idx]) ? (
          <img
            key={idx}
            src={getImg(images[idx])}
            alt=""
            className={`max-h-full max-w-full transition-opacity duration-300 ${
              isArch ? 'object-contain p-4' : 'object-contain'
            }`}
          />
        ) : (
          <div className="text-white/20 text-5xl">📱</div>
        )}

        {/* 아키텍처 뱃지 */}
        {isArch && (
          <span className="absolute top-3 right-3 rounded-full bg-indigo-500/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            Architecture
          </span>
        )}
      </div>

      {/* 컨트롤 바 */}
      {isMultiple && (
        <div className="flex items-center justify-between border-t border-white/10 bg-black/40 px-4 py-2 backdrop-blur-sm">
          <button onClick={prev} aria-label="이전" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>

          {/* 닷 인디케이터 */}
          <div className="flex gap-1.5">
            {images.map((f, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`슬라이드 ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/30'
                } ${f.includes('아키텍처') ? '!bg-indigo-400' : ''}`}
              />
            ))}
          </div>

          <button onClick={next} aria-label="다음" className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      )}
    </div>
  )
}

// ── fade-in hook ────────────────────────────────────────────
function useFadeIn(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add('opacity-100', 'translate-y-0')
        el.classList.remove('opacity-0', 'translate-y-10')
        obs.disconnect()
      }
    }, { threshold: 0.08 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [ref])
}

// ── 프로젝트 카드 ────────────────────────────────────────────
function ProjectCard({ item }) {
  const ref = useRef(null)
  useFadeIn(ref)

  return (
    <article ref={ref} className="opacity-0 translate-y-10 transition-all duration-700 ease-out">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">

        {/* 상단 헤더 바 */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/8 px-6 py-4">
          <div className="flex items-baseline gap-3">
            <h3 className="text-2xl font-black text-white">{item.title}</h3>
            <span className="text-sm font-medium text-white/50">{item.subtitle}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Chip>{item.period}</Chip>
            <Chip>{item.team}</Chip>
            <Chip>{item.year}</Chip>
          </div>
        </div>

        {/* 본문 — 이미지 + 텍스트 */}
        <div className="flex flex-col md:flex-row">

          {/* 이미지 캐러셀 */}
          <div className="h-[420px] w-full shrink-0 md:h-auto md:w-[380px]">
            <ProjectCarousel images={item.images} />
          </div>

          {/* 텍스트 */}
          <div className="flex flex-1 flex-col gap-6 p-6 md:p-8 overflow-y-auto">

            {/* 수상 뱃지 */}
            {item.award && (
              <div className="flex items-center gap-2 rounded-lg border border-yellow-400/20 bg-yellow-400/10 px-4 py-2.5">
                <span className="text-yellow-400 text-base">🏆</span>
                <span className="text-xs font-semibold text-yellow-300">{item.award}</span>
              </div>
            )}

            {/* 목표 */}
            <div>
              <Label>프로젝트 목표</Label>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.goal}</p>
            </div>

            {/* 역할 */}
            <div>
              <Label>담당 역할</Label>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.role}</p>
            </div>

            {/* 주요 기능 */}
            <div>
              <Label>주요 기능</Label>
              <ul className="mt-2 space-y-1.5">
                {item.features.map(f => (
                  <li key={f} className="flex gap-2 text-sm text-white/60">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/70" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            {/* 극복한 어려움 */}
            <div>
              <Label>어려움 극복</Label>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.challenge}</p>
            </div>

            {/* 기술 스택 */}
            <div>
              <Label>기술 스택</Label>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.techs.map(t => (
                  <span key={t} className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-3 py-1 text-xs text-indigo-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* PDF 다운로드 버튼 */}
            {item.pdfFile && (
              <a
                href={`${import.meta.env.BASE_URL}${item.pdfFile}`}
                download
                className="mt-auto flex w-fit items-center gap-2 rounded-xl border border-rose-400/30 bg-rose-400/10 px-5 py-2.5 text-sm font-semibold text-rose-300 transition-colors hover:bg-rose-400/20"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                  <polyline points="7 10 12 15 17 10"/>
                  <line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                리서치 포스터 PDF 다운로드
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}

// 소형 컴포넌트
const Chip = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50">{children}</span>
)
const Label = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-wider text-white/30">{children}</p>
)

// ── 섹션 ─────────────────────────────────────────────────────
export default function ProjectsSection() {
  return (
    <section className="bg-[#0a0a0a]">
      {/* 섹션 헤더 */}
      <div className="relative overflow-hidden border-t border-white/[0.06] py-20">
        <p className="pointer-events-none absolute inset-0 flex items-center justify-start pl-4 text-[20vw] font-black leading-none tracking-tighter text-white/[0.03] select-none">
          PROJECT
        </p>
        <div className="relative px-8 md:px-16">
          <p className="mb-2 text-xs tracking-[0.35em] text-white/35 uppercase">개발 프로젝트</p>
          <h2 className="text-6xl font-black text-white md:text-8xl">PROJECT</h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-indigo-400/60 to-transparent" />
          <p className="mt-4 max-w-md text-sm text-white/40">
            기획부터 배포까지 직접 개발한 프로젝트 기록
          </p>
        </div>
      </div>

      {/* 카드 목록 */}
      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-8">
          {projectPortfolio.map(item => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
