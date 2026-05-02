import { useState, useEffect, useRef } from 'react'

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
      {img ? (
        <img key={idx} src={img} alt="" className="h-full w-full object-contain transition-opacity duration-300" />
      ) : (
        <div className="flex h-full w-full items-center justify-center text-white/20 text-5xl">📋</div>
      )}

      {isMultiple && (
        <>
          <button onClick={prev} aria-label="이전 이미지"
            className="absolute left-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg>
          </button>
          <button onClick={next} aria-label="다음 이미지"
            className="absolute right-2 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm hover:bg-black/70 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`이미지 ${i + 1}`}
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
    <article ref={ref} className="opacity-0 translate-y-10 transition-all duration-700 ease-out">
      <div className={`flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''}`}>

        {/* 이미지 / 캐러셀 — 모바일 고정 높이, 데스크탑 고정 높이 */}
        <div className="relative h-52 w-full shrink-0 overflow-hidden sm:h-64 md:h-[360px] md:w-[42%]">
          <Carousel images={item.images ?? []} />
          <span className={`absolute left-3 top-3 z-10 rounded-full border px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm ${catClass}`}>
            {item.category}
          </span>
        </div>

        {/* 텍스트 */}
        <div className="flex flex-1 flex-col justify-center px-5 py-6 sm:px-8 md:py-10">
          <p className="mb-1.5 text-xs tracking-widest text-white/35 uppercase">{item.date}</p>
          {item.prize && (
            <p className="mb-1 text-sm font-semibold text-yellow-400/80">{item.prize}</p>
          )}
          <h3 className="mb-3 text-lg font-bold leading-snug text-white sm:text-xl md:text-2xl">
            {item.title}
          </h3>
          <p className="mb-5 text-sm leading-relaxed text-white/60">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {item.tags.map(tag => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/50">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}
