import { useEffect, useRef } from 'react'
import { activityPortfolio } from '../data/portfolioData'

// ── 이미지 정적 import ──────────────────────────────────────
import img_challenge  from '../assets/미래유망 고졸인력양성사업 프로젝트 챌린지.jpg'
import img_activity   from '../assets/미래 유망 분야 활동 사진.jpg'
import img_baucheo2   from '../assets/한국장학재단 교육부 장관상2.jpg'
import img_sca        from '../assets/서울직업계고창의아이디어 경진대회.jpg'
import img_hackathon  from '../assets/2024 연암공과대학교 AI 해커톤.jpg'
import img_makerton   from '../assets/2024 디지털새싹 인공지능 메이커톤.jpg'
import img_tbi        from '../assets/2024 TBI 면접경진대회.jpg'
import img_ai_class   from '../assets/AI융합수업.jpg'
import img_cert       from '../assets/미래유망 수료증.jpg'
import img_ibm        from '../assets/IBM견학.jpg'
import img_donggo     from '../assets/2025AI동고동락(동상 3위).jpg'
import img_sunhaeng   from '../assets/2025선행상.jpg'
import img_hoejang    from '../assets/2024 2학기 학급회장.jpg'

const imageMap = {
  '미래유망 고졸인력양성사업 프로젝트 챌린지.jpg': img_challenge,
  '미래 유망 분야 활동 사진.jpg':                 img_activity,
  '한국장학재단 교육부 장관상2.jpg':              img_baucheo2,
  '서울직업계고창의아이디어 경진대회.jpg':        img_sca,
  '2024 연암공과대학교 AI 해커톤.jpg':            img_hackathon,
  '2024 디지털새싹 인공지능 메이커톤.jpg':        img_makerton,
  '2024 TBI 면접경진대회.jpg':                    img_tbi,
  'AI융합수업.jpg':                               img_ai_class,
  '미래유망 수료증.jpg':                          img_cert,
  'IBM견학.jpg':                                  img_ibm,
  '2025AI동고동락(동상 3위).jpg':                 img_donggo,
  '2025선행상.jpg':                               img_sunhaeng,
  '2024 2학기 학급회장.jpg':                      img_hoejang,
}

const categoryColor = {
  수상:     'bg-yellow-400/20 text-yellow-300 border-yellow-400/30',
  동아리:   'bg-blue-400/20  text-blue-300  border-blue-400/30',
  교내활동: 'bg-green-400/20 text-green-300 border-green-400/30',
  교육:     'bg-purple-400/20 text-purple-300 border-purple-400/30',
  견학:     'bg-cyan-400/20  text-cyan-300  border-cyan-400/30',
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
      { threshold: 0.12 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref])
}

function ActivityCard({ item, index }) {
  const ref = useRef(null)
  useFadeIn(ref)

  const isEven = index % 2 === 1
  const img = imageMap[item.imageFile]
  const catClass = categoryColor[item.category] ?? 'bg-white/10 text-white/60 border-white/20'

  return (
    <article
      ref={ref}
      className="opacity-0 translate-y-10 transition-all duration-700 ease-out"
    >
      <div
        className={`flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm
          md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}
      >
        {/* 이미지 */}
        <div className="relative h-64 w-full shrink-0 overflow-hidden md:h-auto md:w-5/12">
          {img ? (
            <img
              src={img}
              alt={item.title}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-700 to-slate-900 text-white/20 text-6xl select-none">
              📋
            </div>
          )}
          {/* 카테고리 뱃지 */}
          <span
            className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm ${catClass}`}
          >
            {item.category}
          </span>
        </div>

        {/* 텍스트 */}
        <div className="flex flex-1 flex-col justify-center px-8 py-10 md:py-12">
          <p className="mb-2 text-sm tracking-widest text-white/40 uppercase">{item.date}</p>
          <h3 className="mb-4 text-2xl font-bold leading-snug text-white sm:text-3xl">
            {item.title}
          </h3>
          <p className="mb-6 leading-relaxed text-white/65 text-sm sm:text-base">
            {item.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-white/8 px-3 py-1 text-xs text-white/55 border border-white/10"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function ActivitiesSection() {
  return (
    <section className="bg-[#0d0d0d] py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* 헤더 */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm tracking-[0.3em] text-white/40 uppercase">Portfolio</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl">활동 기록</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
          <p className="mt-4 text-white/50">고교 3년, 하나하나 직접 쌓아온 경험들</p>
        </div>

        {/* 카드 목록 */}
        <div className="flex flex-col gap-10">
          {activityPortfolio.map((item, i) => (
            <ActivityCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
