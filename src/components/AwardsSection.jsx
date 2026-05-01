import { awardPortfolio } from '../data/portfolioData'
import PortfolioCard from './PortfolioCard'

export default function AwardsSection() {
  return (
    <section className="bg-[#0a0a0a]">
      {/* ── 섹션 헤더 ── */}
      <div className="relative overflow-hidden border-t border-white/[0.06] py-20">
        {/* 거대 배경 텍스트 */}
        <p className="pointer-events-none absolute inset-0 flex items-center justify-start pl-4 text-[22vw] font-black leading-none tracking-tighter text-white/[0.03] select-none">
          AWARD
        </p>
        {/* 전면 헤더 */}
        <div className="relative px-8 md:px-16">
          <p className="mb-2 text-xs tracking-[0.35em] text-white/35 uppercase">수상 이력</p>
          <h2 className="text-6xl font-black text-white md:text-8xl">AWARD</h2>
          <div className="mt-4 h-px w-20 bg-gradient-to-r from-yellow-400/60 to-transparent" />
          <p className="mt-4 max-w-md text-sm text-white/40">
            고교 3년간 외부 공모전·대회·교내 수상을 통해 쌓아온 수상 이력
          </p>
        </div>
      </div>

      {/* ── 카드 목록 ── */}
      <div className="px-6 pb-24">
        <div className="mx-auto max-w-5xl flex flex-col gap-8">
          {awardPortfolio.map((item, i) => (
            <PortfolioCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
