import { activityPortfolio } from '../data/portfolioData'
import PortfolioCard from './PortfolioCard'

export default function ActivitiesSection() {
  return (
    <section className="bg-[#0d0d0d]">
      {/* ── 섹션 헤더 ── */}
      <div className="relative overflow-hidden border-t border-white/[0.06] py-12 md:py-20">
        <p className="pointer-events-none absolute inset-0 flex items-center justify-start pl-2 text-[18vw] font-black leading-none tracking-tighter text-white/[0.03] select-none">
          ACTIVITY
        </p>
        <div className="relative px-5 md:px-16">
          <p className="mb-2 text-xs tracking-[0.35em] text-white/35 uppercase">활동 기록</p>
          <h2 className="text-5xl font-black text-white sm:text-6xl md:text-8xl">ACTIVITY</h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-blue-400/60 to-transparent" />
          <p className="mt-4 max-w-md text-sm text-white/40">
            동아리·수업·교육·견학 등 고교 3년의 활동 기록
          </p>
        </div>
      </div>

      {/* ── 카드 목록 ── */}
      <div className="px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-6 sm:gap-8">
          {activityPortfolio.map((item, i) => (
            <PortfolioCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
