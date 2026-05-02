import { profile } from '../data/portfolioData'

const contacts = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone}`,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/CSH0805',
    href: profile.github,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
        <path d="M9 18c-4.51 2-5-2-7-2"/>
      </svg>
    ),
  },
]

export default function ClosingSection() {
  return (
    <section className="relative bg-[#080808] overflow-hidden">

      {/* 배경 장식 — 거대 이름 텍스트 */}
      <p className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 text-[22vw] font-black leading-none tracking-tighter text-white/[0.025] select-none whitespace-nowrap">
        CHOI SUN HO
      </p>

      <div className="relative mx-auto max-w-4xl px-6 py-28 flex flex-col items-center text-center gap-10">

        {/* 상단 메시지 */}
        <div>
          <p className="mb-3 text-xs tracking-[0.35em] text-white/30 uppercase">Thank you</p>
          <h2 className="text-4xl font-black text-white sm:text-5xl leading-tight">
            끝까지 봐주셔서<br/>감사합니다.
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/45">
            고교 3년간 포기하지 않고 쌓아온 작은 기록들입니다.<br/>
            함께 성장할 수 있는 기회를 기다리겠습니다.
          </p>
        </div>

        {/* 좌우명 */}
        <div className="rounded-2xl border border-white/8 bg-white/[0.03] px-10 py-6">
          <p className="text-xs text-white/30 uppercase tracking-widest mb-2">좌우명</p>
          <p className="text-2xl font-bold text-white">" 노력이 결과다 "</p>
          <p className="mt-1 text-sm text-white/40">— {profile.nameKo} / {profile.nameEn}</p>
        </div>

        {/* 연락처 */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
          {contacts.map(({ label, value, href, icon }) => (
            <a
              key={label}
              href={href}
              target={label === 'GitHub' ? '_blank' : undefined}
              rel={label === 'GitHub' ? 'noopener noreferrer' : undefined}
              className="flex flex-1 items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-left text-white/60 transition-colors hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              <span className="text-white/40">{icon}</span>
              <div className="min-w-0">
                <p className="text-[10px] text-white/30 uppercase tracking-wider">{label}</p>
                <p className="text-xs font-medium truncate">{value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* PDF 다운로드 */}
        <a
          href={`${import.meta.env.BASE_URL}최선호PORTFOLIO.pdf`}
          download="최선호PORTFOLIO.pdf"
          className="flex items-center gap-2.5 rounded-full border border-white/20 bg-white/8 px-7 py-3 text-sm font-semibold text-white/70 backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Portfolio PDF 다운로드
        </a>

        {/* 하단 카피라이트 */}
        <p className="text-xs text-white/20">
          © 2026 최선호 · {profile.school}
        </p>
      </div>
    </section>
  )
}
