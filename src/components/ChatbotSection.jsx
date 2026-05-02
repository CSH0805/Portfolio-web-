import { useState, useRef, useEffect } from 'react'

// ── 시스템 프롬프트 ───────────────────────────────────────────
const SYSTEM_PROMPT = `
당신은 최선호를 오랫동안 곁에서 지켜본 친한 친구이자 포트폴리오 안내 AI입니다.
최선호에 대한 모든 정보를 깊이 알고 있으며, 방문자의 질문 의도를 파악하여 아래 정보를 자유롭게 조합·추론해서 자연스럽고 따뜻하게 답변해주세요.

[답변 원칙]
1. 질문이 포괄적이거나("인생 얘기", "어떤 사람이에요?", "한마디로 표현하면?") 추상적이어도 당황하지 말고, 아래 정보를 종합하여 풍부하게 이야기해주세요.
2. 정보가 직접 명시되지 않아도, 알고 있는 사실들을 연결해 자연스럽게 추론하고 답변하세요.
3. 딱딱하게 목록을 나열하기보다, 친구가 소개하듯 흐름 있게 이야기하듯 말하세요.
4. 반드시 한국어로만 답변하세요.
5. 최선호와 완전히 무관한 질문(날씨, 음식 추천 등)에만 "저는 최선호에 관한 질문만 답변드릴 수 있어요 😊"라고 하세요.

--- 성장 과정 (인생 스토리) ---
어릴 때부터 "어디서든 예의 바르게 행동하라"는 부모님의 가르침을 받으며 자랐다.
초중학교 시절에는 게임에 빠져 학업에 흥미가 없었으나, 중학교 3학년 때 스스로 변화를 결심하며 "노력이 결과다"라는 가치관을 세웠다.
실무 중심 환경을 원해 세명컴퓨터고등학교에 진학했지만, 처음엔 낯선 영단어와 복잡한 문법 앞에서 막막함을 느꼈다.
AI프로젝트반 활동을 통해 IT 분야의 매력을 발견했고, 모르는 코드는 직접 실행하며 에러를 분석하는 방식으로 하나씩 극복해 나갔다.
2024 TBI 면접경진대회 우수상으로 첫 수상의 기쁨을 맛본 후 대회에 대한 두려움이 자신감으로 바뀌었다.
이후 2024 디지털새싹 AI 메이커톤에서 팀장으로 공동 1등을 달성하고, 2025년엔 AIcraft 동아리를 직접 창설해 선후배를 이끌었다.
결국 약쏙 프로젝트로 2026년 프로젝트 챌린지 최우수상(1위)을 수상하며 고교 3년을 마무리하고 있다.

--- 기본 정보 ---
- 이름: 최선호 (Choi Sun Ho)
- 생년월일: 2008년 5월 2일
- 거주지: 서울특별시 은평구
- 이메일: wwwe7701@gmail.com
- GitHub: https://github.com/CSH0805
- 블로그(Velog): https://velog.io/@csh0805/posts
- 좌우명: "노력이 결과다."
- 학력: 세명컴퓨터고등학교 인공지능소프트웨어학과 재학 중 (2024 입학)
- 목표 직무: 백엔드 개발자 (클라우드 기반 인프라 및 Java Spring 전문)
- 자격증: AICE BASIC, 한글·엑셀

--- 기술 스택 ---
- 주력: Java, Spring Boot, MySQL, AWS (EC2, RDS, S3)
- 활용 경험: Node.js, Flutter, Python, React, Kotlin, Flask, FastAPI
- AI/ML: YOLOv8, YOLOv11, TensorFlow, Mediapipe, Teachable Machine, OpenCV
- 기타: JWT, RESTful API, JPA, MVC 패턴, Roboflow, OpenAI API, Notion API

--- 수상 및 장학 이력 ---
[2026]
- 미래유망 고졸인력양성사업 프로젝트 챌린지 최우수상 (1위) — 약쏙 프로젝트

[2025]
- 2025년 교육급여 바우처 수기 공모전 고등부 최우수상 (교육부장관상)
- 제19회 서울시 직업계고 창의아이디어경진대회 특별상 — 놀봄이 프로젝트
- 창의아이디어경진대회 예선전 은상(2위)
- 인공지능프로젝트 챌린지 은상 — AI 라이딩 프로젝트
- AI 동고동락 동상
- 교내 스승의날 장학생 / 서울희망 고교진로 장학금 / 한국장학재단 교육급여 바우처 장학금
- 선행상

[2024]
- 2024 연암공과대학교 AI 해커톤 대회 고교생 리그 금상 (팀리더)
- 2024 디지털새싹 인공지능 메이커톤 AI어벤저스상 (공동 1등)
- 2024년 서울장학재단 장학생 수기 공모전 우수상
- 2024 TBI 면접경진대회 우수상 — 첫 대회 수상, 자신감의 전환점
- 2024 서울장학재단 장학생 / 선행상

총 외부 대회 수상 8회 이상, 총 장학금 및 대회 상금 약 1,000만원 수혜

--- 프로젝트 ---

[약쏙 - 앱] 2주 / 3인 / 2026
목표: 노인 복약 관리 문제 해결. 진료 음성 녹음→Whisper로 텍스트 변환→GPT 요약, 복약 알림, 보호자 SMS, 카카오 로그인
역할: 백엔드 전담 (JWT, REST API, AWS RDS, Solapi SMS, OpenAI API, 공공데이터)
기술: Flutter, Node.js, AWS RDS(MySQL), Solapi, OpenAI Whisper·GPT, 카카오 OAuth
성과: 프로젝트 챌린지 최우수상(1위)

[약쏙 - GPT APPS] 2주 / 3인 / 2026
목표: ChatGPT 대화창 하나로 약품 추천 + 약국 탐색
역할: React UI, AWS Lambda 공공API 호출, Vercel MCP 서버 배포
기술: React, AWS Lambda, Vercel, Leaflet, GPT APPS SDK, 공공데이터 API

[놀봄이] 4주 / 2인 / 2025
목표: 노인 실종 방지 AI 안전 앱. 750m 이탈 시 보호자 알림, "살려줘" 키워드 감지 후 119 자동 신고, 실종 시 위치 게시판 자동 업로드
기술: Python, FastAPI, Mediapipe, Google Cloud Speech API, 알리고 SMS API
성과: 서울 직업계고 창의아이디어경진대회 결선 진출 및 특별상

[Clean_Earth] 7일 / 4인 / 2025
목표: YOLOv11 기반 쓰레기 분류 AI + 리폼 물품 추천
기술: YOLOv11, Roboflow, Python, OpenCV, Flask
성과: AI융합수업 2학년 전체 1등

[AI 라이딩] 1일(38분) / 1인 / 2025
목표: Teachable Machine 얼굴 기울기 인식으로 자동차 게임 조작
기술: Teachable Machine, TensorFlow.js, HTML/CSS/JS
성과: 인공지능프로젝트 챌린지 은상(2위)

[자세 알림이] 7일 / 1인 / 2025
목표: 웹캠으로 거북목·졸음·어깨 비대칭 실시간 감지 및 경고
기술: Mediapipe, Flask, HTML/CSS/JS

[지역 소음 예측 AI 앱] 6일 / 3인 / 2024
목표: 서울 구·동별 소음 AI 분석·예측으로 쾌적한 주거 환경 조성
기술: TensorFlow, Kotlin, Flask, Pandas

[나는 학원에서 행복한가?] 14일 / 1인 / 2024
목표: 63명 설문으로 청소년 학원 만족도·스트레스 데이터 분석
기술: Python, Pandas, NumPy, Matplotlib, Jupyter Notebook

[손님 경매] 3일 / 1인 / 2024
목표: 음식점-손님 실시간 양방향 매칭 경매 웹
기술: Node.js, Express, MySQL, RESTful API, HTML/CSS/JS

[ThoughtForge] 7일 / 1인 / 2025
목표: GPT로 아이디어 자동 구조화 + 노드 그래프 시각화 + Notion 연동
기술: React, OpenAI API, Notion API

--- 성격 ---
강점: 먼저 움직이는 실행력, 함께 성장하려는 성향, 강한 끈기, 갈등 시 먼저 다가가 해결
보완점: 팀원 페이스를 먼저 확인하고 맞춰가는 방식으로 개선 중, 경청 습관 의식적으로 형성 중

--- 주요 활동 ---
- AIcraft 동아리 창설 및 동아리장 (2025.4.15 ~ 2025.12.16)
- 미래유망 고졸인력양성사업: AI 오픈소스·React·Java·빅데이터·앱·AWS 총 6개 과정 수료
- IBM 본사 견학 (2025.3.28)
- Node.js / AWS / React / Kotlin / GitHub 특강 이수
- 2024년 2학기 학급회장

--- 진로 포부 ---
1단계: 서버 인프라·개발 문화 빠르게 체득, 팀의 일원으로 자리잡기
2단계: API 성능 개선, DB 최적화, AWS Solutions Architect·CKA 자격증 취득
3단계: 배포 자동화·확장 가능한 아키텍처 설계, 함께 성장하는 백엔드 전문가
`

// ── 예시 질문 ─────────────────────────────────────────────
const EXAMPLES = [
  '어떤 프로젝트를 만들었나요?',
  '기술 스택이 뭔가요?',
  '수상 이력이 궁금해요',
]

// ── 로딩 점 애니메이션 ────────────────────────────────────
function ThinkingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map(i => (
        <span
          key={i}
          className="h-2 w-2 rounded-full bg-white/40 animate-bounce"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
    </div>
  )
}

// ── 메인 챗봇 컴포넌트 ────────────────────────────────────
export default function ChatbotSection() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  // 새 메시지 도착 시 스크롤 하단 이동
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  // 열릴 때 입력창 포커스
  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 100)
  }, [isOpen])

  const sendMessage = async (text) => {
    const trimmed = text.trim()
    if (!trimmed || loading) return

    const userMsg = { role: 'user', content: trimmed }
    const newMessages = [...messages, userMsg]
    setMessages(newMessages)
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            ...newMessages,
          ],
          max_tokens: 500,
        }),
      })

      if (!res.ok) throw new Error('API error')
      const data = await res.json()
      const aiContent = data.choices?.[0]?.message?.content ?? '응답을 받지 못했어요.'
      setMessages(prev => [...prev, { role: 'assistant', content: aiContent }])
    } catch {
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: '일시적인 오류가 발생했어요. 잠시 후 다시 시도해주세요.',
      }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage(input)
    }
  }

  return (
    <>
      {/* ── 플로팅 버튼 ── */}
      <button
        onClick={() => setIsOpen(o => !o)}
        aria-label="최선호 AI 백과사전 열기"
        className="fixed bottom-5 right-4 z-50 flex h-13 w-13 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
      >
        {isOpen ? (
          /* X 아이콘 */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          /* 채팅 아이콘 */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>

      {/* 모바일 배경 딤 */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/50 sm:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* ── 채팅 패널 ── */}
      {isOpen && (
        <div className={[
          'fixed z-50 flex flex-col overflow-hidden border border-white/10 bg-[#111] shadow-2xl shadow-black/50',
          // 모바일: 하단 시트 (전체 너비, 80vh)
          'bottom-0 left-0 right-0 h-[80vh] rounded-t-2xl',
          // sm+: 플로팅 패널 (우하단 고정)
          'sm:bottom-24 sm:left-auto sm:right-6 sm:h-[520px] sm:w-[360px] sm:rounded-2xl',
        ].join(' ')}
        >
          {/* 헤더 */}
          <div className="flex items-center gap-3 border-b border-white/10 bg-indigo-600/10 px-4 py-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
                <path d="M12 16v-4m0-4h.01"/>
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold text-white">최선호 AI 백과사전</p>
              <p className="text-xs text-white/40">무엇이든 물어보세요</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="ml-auto text-white/30 hover:text-white/70 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
          </div>

          {/* 메시지 영역 */}
          <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
            {/* 첫 안내 메시지 */}
            <div className="flex gap-2">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-xs text-indigo-300 font-bold">AI</div>
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/8 px-3.5 py-2.5 text-sm text-white/80 leading-relaxed">
                안녕하세요! 최선호에 대해 궁금한 점을 자유롭게 물어보세요 😊
              </div>
            </div>

            {/* 예시 질문 버튼 (대화 없을 때만) */}
            {messages.length === 0 && (
              <div className="flex flex-col gap-2 pl-9">
                {EXAMPLES.map(q => (
                  <button
                    key={q}
                    onClick={() => sendMessage(q)}
                    className="w-fit rounded-xl border border-indigo-400/20 bg-indigo-400/10 px-3 py-1.5 text-xs text-indigo-300 transition-colors hover:bg-indigo-400/20 text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            {/* 대화 내역 */}
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                {msg.role === 'assistant' && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-xs text-indigo-300 font-bold">AI</div>
                )}
                <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                  msg.role === 'user'
                    ? 'rounded-tr-sm bg-indigo-600 text-white'
                    : 'rounded-tl-sm bg-white/8 text-white/80'
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}

            {/* 로딩 */}
            {loading && (
              <div className="flex gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo-500/20 text-xs text-indigo-300 font-bold">AI</div>
                <div className="rounded-2xl rounded-tl-sm bg-white/8">
                  <ThinkingDots />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* 입력창 */}
          <div className="border-t border-white/10 bg-[#0d0d0d] p-3">
            <div className="flex items-end gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              <textarea
                ref={inputRef}
                rows={1}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="메시지를 입력하세요..."
                className="flex-1 resize-none bg-transparent text-sm text-white placeholder-white/25 outline-none leading-relaxed max-h-24"
                style={{ scrollbarWidth: 'none' }}
              />
              <button
                onClick={() => sendMessage(input)}
                disabled={!input.trim() || loading}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-white transition-colors hover:bg-indigo-500 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              </button>
            </div>
            <p className="mt-1.5 text-center text-[10px] text-white/20">Enter로 전송 · Shift+Enter 줄바꿈</p>
          </div>
        </div>
      )}
    </>
  )
}
