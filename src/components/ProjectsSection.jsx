import { useState, useEffect, useRef } from 'react'
import { projectPortfolio } from '../data/portfolioData'

const allImages = import.meta.glob('../assets/*.{jpg,jpeg,png,JPG,PNG}', { eager: true })
const getImg = (f) => allImages[`../assets/${f}`]?.default ?? null

function ProjectCarousel({ images }) {
  const [idx, setIdx] = useState(0)
  const isMultiple = images.length > 1
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setIdx(i => (i + 1) % images.length)
  const isArch = images[idx]?.includes('아키텍처')

  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden bg-[#111]">
      <div className="relative flex flex-1 items-center justify-center overflow-hidden">
        {getImg(images[idx]) ? (
          <img key={idx} src={getImg(images[idx])} alt=""
            className={`max-h-full max-w-full transition-opacity duration-300 ${isArch ? 'object-contain p-3 sm:p-4' : 'object-contain'}`}
          />
        ) : (
          <div className="text-white/20 text-5xl">📱</div>
        )}
        {isArch && (
          <span className="absolute top-2 right-2 rounded-full bg-indigo-500/80 px-2.5 py-0.5 text-xs font-semibold text-white backdrop-blur-sm sm:top-3 sm:right-3 sm:px-3 sm:py-1">
            Architecture
          </span>
        )}
      </div>

      {isMultiple && (
        <div className="flex items-center justify-between border-t border-white/10 bg-black/40 px-3 py-2 backdrop-blur-sm sm:px-4">
          <button onClick={prev} aria-label="이전"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <div className="flex gap-1.5">
            {images.map((f, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`슬라이드 ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/30'} ${f.includes('아키텍처') ? '!bg-indigo-400' : ''}`}
              />
            ))}
          </div>
          <button onClick={next} aria-label="다음"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
        </div>
      )}
    </div>
  )
}

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

function ProjectCard({ item }) {
  const ref = useRef(null)
  useFadeIn(ref)

  return (
    <article ref={ref} className="opacity-0 translate-y-10 transition-all duration-700 ease-out">
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04]">

        {/* 헤더 — 모바일에서 세로 쌓기 */}
        <div className="border-b border-white/8 px-4 py-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-xl font-black text-white sm:text-2xl">{item.title}</h3>
            <div className="flex flex-wrap gap-1.5">
              <Chip>{item.period}</Chip>
              <Chip>{item.team}</Chip>
              <Chip>{item.year}</Chip>
            </div>
          </div>
          {/* 부제목 — 아래 줄 별도 표시 */}
          <p className="mt-1.5 text-xs text-white/40">{item.subtitle}</p>
        </div>

        {/* 본문 */}
        <div className="flex flex-col md:flex-row">

          {/* 이미지 캐러셀 — 모바일 축소 */}
          <div className="h-[260px] w-full shrink-0 sm:h-[340px] md:h-auto md:w-[360px] lg:w-[400px]">
            <ProjectCarousel images={item.images} />
          </div>

          {/* 텍스트 */}
          <div className="flex flex-1 flex-col gap-5 p-4 sm:gap-6 sm:p-6 md:p-8">

            {item.award && (
              <div className="flex items-start gap-2 rounded-lg border border-yellow-400/20 bg-yellow-400/10 px-3 py-2.5 sm:px-4">
                <span className="text-yellow-400 text-base shrink-0">🏆</span>
                <span className="text-xs font-semibold text-yellow-300 leading-relaxed">{item.award}</span>
              </div>
            )}

            <div>
              <Label>프로젝트 목표</Label>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.goal}</p>
            </div>

            <div>
              <Label>담당 역할</Label>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.role}</p>
            </div>

            <div>
              <Label>주요 기능</Label>
              <ul className="mt-2 space-y-1.5">
                {item.features.map(f => (
                  <li key={f} className="flex gap-2 text-sm text-white/60">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/70" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Label>어려움 극복</Label>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{item.challenge}</p>
            </div>

            <div>
              <Label>기술 스택</Label>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {item.techs.map(t => (
                  <span key={t} className="rounded-full border border-indigo-400/20 bg-indigo-400/10 px-2.5 py-0.5 text-xs text-indigo-300 sm:px-3 sm:py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {item.pdfFile && (
              <a href={`${import.meta.env.BASE_URL}${item.pdfFile}`} download
                className="mt-auto flex w-fit items-center gap-2 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-2 text-sm font-semibold text-rose-300 transition-colors hover:bg-rose-400/20 sm:px-5 sm:py-2.5">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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

const Chip = ({ children }) => (
  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/50 sm:px-3 sm:py-1">{children}</span>
)
const Label = ({ children }) => (
  <p className="text-xs font-semibold uppercase tracking-wider text-white/30">{children}</p>
)

export default function ProjectsSection() {
  return (
    <section className="bg-[#0a0a0a]">
      <div className="relative overflow-hidden border-t border-white/[0.06] py-12 md:py-20">
        <p className="pointer-events-none absolute inset-0 flex items-center justify-start pl-2 text-[20vw] font-black leading-none tracking-tighter text-white/[0.03] select-none">
          PROJECT
        </p>
        <div className="relative px-5 md:px-16">
          <p className="mb-2 text-xs tracking-[0.35em] text-white/35 uppercase">개발 프로젝트</p>
          <h2 className="text-5xl font-black text-white sm:text-6xl md:text-8xl">PROJECT</h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-indigo-400/60 to-transparent" />
          <p className="mt-4 max-w-md text-sm text-white/40">기획부터 배포까지 직접 개발한 프로젝트 기록</p>
        </div>
      </div>

      <div className="px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6 sm:gap-8">
          {projectPortfolio.map(item => (
            <ProjectCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
