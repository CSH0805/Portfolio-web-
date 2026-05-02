import { useState, useEffect, useRef } from 'react'

// import.meta.glob으로 assets 전체 이미지 한 번에 로딩 (Vite 정적 분석)
const allImages = import.meta.glob('../assets/*.{jpg,jpeg,png,JPG,PNG}', { eager: true })

function getImg(filename) {
  if (!filename) return null
  return allImages[`../assets/${filename}`]?.default ?? null
}

const categoryColor = {
  수상:      'bg-yellow-400/20 text-yellow-300 border-yellow-400/30',
  '교내 수상': 'bg-orange-400/20 text-orange-300 border-orange-400/30',
  동아리:    'bg-blue-400/20  text-blue-300  border-blue-400/30',
  수업:      'bg-green-400/20 text-green-300 border-green-400/30',
  교내활동:  'bg-green-400/20 text-green-300 border-green-400/30',
  교육:      'bg-purple-400/20 text-purple-300 border-purple-400/30',
  견학:      'bg-cyan-400/20  text-cyan-300  border-cyan-400/30',
}

function useFadeIn(ref) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('opacity-100', 'translate-y-0')
          el.classList.remove('opacity-0', 'translate-y-10')
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
}

function Carousel({ images }) {
  const [idx, setIdx] = useState(0)
  const isMultiple = images.length > 1
  const prev = () => setIdx(i => (i - 1 + images.length) % images.length)
  const next = () => setIdx(i => (i + 1) % images.length)
  const img = getImg(images[idx])

  return (
    <div className="relative h-full w-full overflow-hidden bg-black/20">
      {/* 이미지 */}
      {img ? (
        <img
          key={idx}
          src={img}
          alt=""
          className="h-full w-full object-contain transition-opacity duration-300"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-white/20 text-5xl">📋</div>
      )}

      {/* 화살표 (이미지 2개 이상일 때만) */}
      {isMultiple && (
        <>
          <button
            onClick={prev}
            aria-label="이전 이미지"
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button
            onClick={next}
            aria-label="다음 이미지"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>

          {/* 닷 인디케이터 */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`이미지 ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-5 bg-white' : 'w-1.5 bg-white/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function PortfolioCard({ item, index }) {
  const ref = useRef(null)
  useFadeIn(ref)

  const isReversed = index % 2 === 1
  const catClass = categoryColor[item.category] ?? 'bg-white/10 text-white/60 border-white/20'

  return (
    <article
      ref={ref}
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      <div
        className={`flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm
          md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''}`}
      >
        {/* 이미지 / 캐러셀 — 고정 높이로 이미지 교체 시 레이아웃 흔들림 방지 */}
        <div className="relative h-64 w-full shrink-0 overflow-hidden md:h-[360px] md:w-[42%]">
          <Carousel images={item.images ?? []} />
          {/* 카테고리 뱃지 */}
          <span className={`absolute left-4 top-4 z-10 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm ${catClass}`}>
            {item.category}
          </span>
        </div>

        {/* 텍스트 */}
        <div className="flex flex-1 flex-col justify-center px-8 py-10 md:py-12">
          {/* 날짜 */}
          <p className="mb-2 text-xs tracking-widest text-white/35 uppercase">{item.date}</p>

          {/* 수상명 (award만 있음) */}
          {item.prize && (
            <p className="mb-1 text-sm font-semibold text-yellow-400/80">{item.prize}</p>
          )}

          {/* 제목 */}
          <h3 className="mb-4 text-xl font-bold leading-snug text-white sm:text-2xl">
            {item.title}
          </h3>

          {/* 설명 */}
          <p className="mb-6 text-sm leading-relaxed text-white/60 sm:text-[15px]">
            {item.description}
          </p>

          {/* 태그 */}
          <div className="flex flex-wrap gap-2">
            {item.tags.map(tag => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
