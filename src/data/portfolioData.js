// ============================================================
// 최선호 포트폴리오 데이터 (PDF 기반 정리)
// ============================================================

export const profile = {
  nameKo: '최선호',
  nameEn: 'Choi Sun Ho',
  birth: '2008.05.02',
  location: '서울특별시 은평구',
  phone: '010-7701-9623',
  email: 'wwwe7701@gmail.com',
  school: '세명컴퓨터고등학교',
  motto: '노력이 결과다.',
  introduce: `저의 목표는 클라우드 기반 인프라와 Java Spring을 활용한 백엔드 서버 분야에서 전문성을 갖춘 개발자가 되는 것입니다.
고교 시절 HTML, CSS, JavaScript를 통해 웹의 전반적인 흐름을 익혔으며, Firebase를 활용한 로그인·회원가입 구현을 통해 JWT 기반 인증의 개념을 습득했습니다.
이후 Java와 Spring Boot, AWS를 본격적으로 학습하며 MVC 패턴, JPA 기반 데이터베이스 연결, EC2·RDS·S3 등 클라우드 인프라의 기초를 다졌습니다.
배운 내용을 실전에 적용하기 위해 AIcraft 자율동아리를 직접 창설하여 팀 프로젝트를 주도했으며, 대한상공회의소 프로젝트 챌린지 최우수상, 연암공과대학교 AI 해커톤 최우수상 등 다수의 수상 경험을 통해 실전 역량을 키워왔습니다.`,
  github: 'https://github.com/wwwe7701',
  blog: '',
};

// ============================================================
// 기술 스택
// ============================================================
export const skills = {
  frontend: ['HTML', 'CSS', 'JavaScript', 'React', 'Flutter'],
  backend: ['Node.js', 'Express', 'Java', 'Spring Boot', 'FastAPI', 'Flask', 'Python'],
  database: ['MySQL', 'AWS RDS'],
  cloud: ['AWS EC2', 'AWS S3', 'AWS Lambda', 'Vercel'],
  ai: ['TensorFlow', 'YOLOv11', 'Mediapipe', 'OpenAI API', 'Teachable Machine', 'OpenCV'],
  etc: ['Firebase', 'JWT', 'REST API', 'Git', 'Kotlin', 'Pandas', 'NumPy', 'Matplotlib'],
};

// ============================================================
// 수상 이력
// ============================================================
export const awards = [
  // 2024
  {
    year: 2024,
    title: '연암공과대학교 AI 해커톤 대회 고교생 리그',
    prize: '금상',
    description: '팀 리더로 참가하여 아이디어 기획부터 구현까지 팀 전체 방향을 이끌며 금상 수상.',
  },
  {
    year: 2024,
    title: '디지털새싹 인공지능 메이커톤',
    prize: 'AI어벤저스 상 (공동 1등)',
    description: '첫 팀 단위 협업 프로젝트 경험으로 예상치 못한 공동 1등 달성.',
  },
  {
    year: 2024,
    title: '서울장학재단 장학생 수기 공모전 <꿈을 잇는 길, 나의 장학금 이야기>',
    prize: '우수상',
    description: '1학년 시절 힘들었던 과정을 글로 담아내어 우수상 수상.',
  },
  {
    year: 2024,
    title: 'TBI 면접경진대회',
    prize: '우수상 (4등)',
    description: '1학년 말 처음으로 도전한 대회. 이후 다양한 대회 도전의 전환점이 됨.',
  },
  {
    year: 2024,
    title: '서울장학재단 장학생 선발',
    prize: '장학생',
    description: '',
  },
  {
    year: 2024,
    title: '교내 선행상',
    prize: '선행상',
    description: '',
  },
  // 2025
  {
    year: 2025,
    title: '교육급여 바우처 수기 공모전 고등부',
    prize: '최우수상 · 교육부장관상',
    description: '1년 동안의 성장 과정을 글로 담아 고등부 최우수상 및 교육부장관상 수상.',
  },
  {
    year: 2025,
    title: '제 19회 서울시 직업계고 창의아이디어경진대회',
    prize: '특별상 (결선 진출)',
    description: '4월부터 11월까지 약 8개월 과정을 완주하여 특별상 수상.',
  },
  {
    year: 2025,
    title: '창의아이디어경진대회 예선전',
    prize: '은상 (2위)',
    description: '',
  },
  {
    year: 2025,
    title: '인공지능프로젝트 챌린지',
    prize: '은상',
    description: 'AI 라이딩 프로젝트로 수상.',
  },
  {
    year: 2025,
    title: 'AI 동고동락',
    prize: '동상',
    description: '',
  },
  {
    year: 2025,
    title: '교내 스승의날 장학생',
    prize: '장학생',
    description: '',
  },
  {
    year: 2025,
    title: '서울희망 고교진로 장학금',
    prize: '장학생',
    description: '',
  },
  {
    year: 2025,
    title: '한국장학재단 교육급여 바우처 장학금',
    prize: '장학생',
    description: '',
  },
  {
    year: 2025,
    title: '교내 선행상',
    prize: '선행상',
    description: '',
  },
  // 2026
  {
    year: 2026,
    title: '미래유망 고졸인력양성사업 프로젝트 챌린지',
    prize: '최우수상 (1위)',
    description: '약쏙(앱·GPT APPS) 프로젝트로 친한 친구들과 팀을 이루어 최우수상 1위 달성.',
  },
];

// ============================================================
// 프로젝트
// ============================================================
export const projects = [
  {
    id: 'yagsok-app',
    title: '약쏙 (앱)',
    category: '앱',
    period: '2주',
    team: 3,
    year: 2026,
    techs: ['Flutter', 'Node.js', 'AWS RDS(MySQL)', 'AWS S3', 'OpenAI Whisper', 'GPT API', 'Solapi SMS', 'Kakao OAuth'],
    role: '백엔드 담당 — JWT 인증, REST API 설계, AWS RDS 데이터 관리, Solapi SMS 연동, OpenAI Whisper·GPT API 연동, 공공데이터 API 파싱',
    goal: '고령화 사회에서 노인층이 병원 처방 내용을 이해하기 어렵다는 문제에 주목하여, 진료 음성을 실시간으로 녹음·분석해 복약 일정과 주의사항을 쉽게 확인할 수 있는 모바일 앱 개발.',
    features: [
      '진료기록 녹음 & 요약: 의사 음성을 Whisper API로 텍스트 변환 후 GPT로 요약',
      '복약 일정 관리: 처방 약 복용 시간 자동 등록 및 알림',
      '증상 분석: AI 기반 증상 분석 및 관련 정보 제공',
      '날씨/약국/유행병 정보: 공공데이터 API 연동',
      '보호자 알림: Solapi SMS API로 복약 알림 문자 발송',
      '카카오 로그인: 카카오 OAuth SDK 간편 로그인',
    ],
    challenge: 'S3 업로드 구조에서 서버 부하가 심각하게 발생. Presigned URL 방식 도입으로 클라이언트가 S3에 직접 업로드하도록 아키텍처 전면 재설계.',
    award: '미래유망 고졸인력양성사업 프로젝트 챌린지 최우수상 (1위)',
  },
  {
    id: 'yagsok-gpt',
    title: '약쏙 (GPT APPS)',
    category: 'GPT APPS',
    period: '2주',
    team: 3,
    year: 2026,
    techs: ['React', 'AWS Lambda', 'Vercel', 'MCP', 'ChatGPT GPT APPS SDK', 'Leaflet', '공공API'],
    role: 'React 위젯 UI 구성, AWS Lambda에서 공공API 호출 및 데이터 가공, Vercel에 MCP 서버 배포, 증상 정규화·거리순 정렬 필터링 로직 구현',
    goal: 'ChatGPT 대화창 하나로 약품 추천과 약국 탐색을 동시에 해결하는 앱 설치 불필요 서비스 구현.',
    features: [
      '약품 추천: 증상 입력 시 MCP를 통해 공공API 기반 약품 정보 자동 추천',
      '약국 탐색: 현재 위치 기반 주변 약국 검색 및 Leaflet 지도 시각화',
      '자동 도구 선택: ChatGPT가 자연어 입력에 따라 적합한 Tool을 자동 선택',
    ],
    challenge: 'ChatGPT가 두 가지 Tool을 정확히 자동 선택하도록 MCP 스펙을 설계하는 것이 까다로웠음. Tool description과 파라미터 명세를 반복적으로 수정하여 해결.',
    award: '미래유망 고졸인력양성사업 프로젝트 챌린지 최우수상 (1위)',
  },
  {
    id: 'nolbomi',
    title: '놀봄이',
    category: '앱',
    period: '4주',
    team: 2,
    year: 2025,
    techs: ['Python', 'FastAPI', 'Google Cloud Speech API', 'Mediapipe', '알리고 문자 API'],
    role: 'Python으로 API 연동 및 AI 모델 통합. 알리고 문자 API 연동으로 보호자 알림 및 경찰 SMS 자동 발송. Google Cloud Speech API 기반 긴급 키워드 실시간 감지 시스템 개발.',
    goal: '증가하는 노인 실종 신고 안내 문자를 대체하는 AI 기반 노인 돌봄 앱 개발.',
    features: [
      '특정 장소(집)에서 750m 멀어지면 보호자에게 알림',
      'Mediapipe 기반 얼굴 사진 촬영 (얼굴 인식 시에만 활성화)',
      'Wake Word Detection: "살려줘", "도와줘" 키워드 감지 시 보호자 알림 및 119 신고',
      '실종 판단 시 사용자 정보·마지막 위치 게시판 자동 업로드',
    ],
    challenge: '알리고 문자 API 연동 시 응답 코드 오류로 SMS 전송 실패. API 요청 방식과 인증 절차 재검토 및 반복 테스트로 해결.',
    award: '서울직업계고 창의아이디어 경진대회 결선 진출 및 특별상',
  },
  {
    id: 'clean-earth',
    title: 'Clean_Earth',
    category: '앱',
    period: '7일',
    team: 4,
    year: 2025,
    techs: ['Python', 'YOLOv11', 'OpenCV', 'Flask', 'Roboflow'],
    role: 'Roboflow로 YOLOv11 기반 쓰레기 분류 데이터셋 구축, Python으로 학습 코드 구현, OpenCV로 USB 웹캠 연결 테스트, Flask 서버 구현.',
    goal: '재활용 쓰레기를 증가시켜 환경 부담을 최소화하고, 사용자가 쓰레기를 리폼하는 새로운 문화를 창출.',
    features: [
      'AI 기반 쓰레기 종류 분류',
      '분류된 쓰레기에 맞는 리폼 물품 추천',
      '알고리즘 설계를 통한 검색 기능',
    ],
    challenge: 'YOLOv8로 학습 시 정확도 60% 미만 문제 발생. 데이터셋 교체 및 YOLOv11 업그레이드로 정확도 83.8% 달성.',
    award: 'AI 환경 융합 활동 2학년 전체 1등',
  },
  {
    id: 'ai-riding',
    title: 'AI 라이딩',
    category: '웹(게임)',
    period: '1일 (38분)',
    team: 1,
    year: 2025,
    techs: ['Teachable Machine', 'TensorFlow.js', 'HTML', 'CSS', 'JavaScript'],
    role: 'Teachable Machine Pose 모델 직접 학습, TensorFlow.js와 Teachable Machine 라이브러리를 HTML에 연동하여 웹캠 예측값을 게임 조작에 실시간 반영.',
    goal: '중학생들이 AI 원리를 직접 체험하며 이해할 수 있도록, 얼굴 기울기로 자동차를 조작하는 게임 제작.',
    features: [
      '얼굴 기울기 인식: Left / Right / Stop 3가지 클래스 실시간 분류',
      '자동차 조작: 인식된 방향에 따라 차량 좌우 이동 및 정지',
      '랜덤 장애물 생성: 4종류 차량이 랜덤 위치에서 생성',
    ],
    challenge: '포즈 인식 확률이 낮을 때 차량 오작동 문제. 예측 확률 60% 미만 시 Stop 처리하는 임계값 로직 추가로 해결.',
    award: '2025학년도 인공지능프로젝트 챌린지 은상 (2위)',
  },
  {
    id: 'posture-alert',
    title: '자세 알림이',
    category: '웹',
    period: '7일',
    team: 1,
    year: 2025,
    techs: ['Mediapipe', 'Flask', 'HTML', 'CSS', 'JavaScript'],
    role: 'Mediapipe로 거북목·졸음·어깨 비대칭 측정 AI 제작, Flask 백엔드 서버 구현, HTML/CSS/JavaScript 프론트 제작.',
    goal: 'AI를 통해 사용자의 잘못된 자세를 실시간으로 감지하고 교정하여 올바른 자세 습관 형성을 지원.',
    features: [
      '거북목 측정',
      '졸음 측정',
      '어깨 비대칭 측정',
      '웹캠 실시간 경고 출력',
    ],
    challenge: 'YOLOv11로 자체 AI 개발 시도했으나 OpenCV 카메라 연결 오류 발생. Mediapipe로 전환하여 해결.',
    award: '',
  },
  {
    id: 'thoughtforge',
    title: 'ThoughtForge',
    category: '웹',
    period: '7일',
    team: 1,
    year: 2025,
    techs: ['React', 'OpenAI API', 'Notion API', 'PDF/DOCX 변환'],
    role: 'React 프론트엔드 구성, OpenAI API 직접 호출로 아이디어 구조화 및 프롬프트 생성, 노드 기반 그래프 시각화, Notion API 연동.',
    goal: '아이디어를 자유롭게 입력하면 GPT가 자동으로 구조화·정리해주고 Notion 연동 및 파일 다운로드까지 지원하는 AI 사고 정리 도구 개발.',
    features: [
      'AI 정리: GPT가 주제·핵심 아이디어·문제·해결방법·추가 아이디어로 자동 구조화',
      'AI 프롬프트: 프로젝트 구현을 위한 AI 프롬프트 작성 가이드 자동 생성',
      '생각 그래프: 정리된 내용을 카테고리별 노드 그래프로 시각화',
      '내보내기: PDF·DOCX 다운로드 또는 Notion 자동 이관',
    ],
    challenge: 'GPT 응답을 세 가지 형태로 동시에 파싱해야 하는데 응답 구조가 불안정. JSON 형식 응답을 강제하는 프롬프트 설계와 파싱 실패 시 재요청 예외 처리로 안정성 확보.',
    award: '',
  },
  {
    id: 'noise-prediction',
    title: '지역별 소음 예측 AI 앱',
    category: '앱',
    period: '6일',
    team: 3,
    year: 2024,
    techs: ['TensorFlow', 'Pandas', 'Flask', 'Kotlin'],
    role: 'Pandas를 활용한 데이터 시각화, TensorFlow 기반 딥러닝 AI 학습, Flask 백엔드 서버 구현, Kotlin 앱 구현.',
    goal: '서울 내 구 및 동의 지역 소음을 AI로 분석하고 예측하여 쾌적한 주거 생활 환경 조성.',
    features: [
      '소음 종합 점수 제공',
      '주간/야간 평균 소음 데이터 제공',
      '주요 소음원(교통, 건물 등) 분석',
    ],
    challenge: '원하는 형태의 데이터셋이 존재하지 않아, 유사 데이터셋 2개를 구해 불필요 데이터 삭제 및 병합으로 직접 데이터셋 제작.',
    award: '',
  },
  {
    id: 'hakwon-survey',
    title: '나는 학원에서 행복한가?',
    category: '데이터 분석',
    period: '14일',
    team: 1,
    year: 2024,
    techs: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook', 'Google Forms'],
    role: '전 과정 1인 진행 — 설문 기획·진행(63명), CSV 데이터 전처리, Jupyter Notebook에서 데이터 시각화 및 분석.',
    goal: '청소년들이 학원에서 느끼는 만족도와 스트레스 요인을 데이터 분석으로 탐구하여 근거 기반 결론 도출.',
    features: [
      'Google Forms로 63명 대상 설문 진행',
      'Pandas/NumPy/Matplotlib으로 데이터 전처리 및 시각화',
      '학원 참여 이유, 만족도, 스트레스 요인 분석',
    ],
    challenge: 'CSV 데이터가 문자열로 읽혀 시각화 값과 실제 값이 불일치(38→17)하는 Data Mismatch 오류. 데이터 타입 정제 및 전처리 재수행으로 해결.',
    award: '',
  },
  {
    id: 'customer-auction',
    title: '손님 경매',
    category: '웹',
    period: '3일',
    team: 1,
    year: 2024,
    techs: ['Node.js', 'Express', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Fetch API', 'Postman'],
    role: '전 과정 1인 진행 — MySQL 테이블 설계(손님/음식점/게시글/입찰 4개), RESTful API 서버 구축, 기능별 라우터 모듈화, DB 트랜잭션 기반 입찰 수락 구현, 반응형 웹 UI 제작.',
    goal: '실시간 양방향 매칭 시스템 구현, RESTful API 설계 및 DB 트랜잭션 기반 데이터 무결성 보장.',
    features: [
      '회원가입 및 로그인',
      '손님 모집 공고 작성',
      '내 경매 현황 관리',
      'DB 트랜잭션 기반 동시성 제어 입찰 수락',
    ],
    challenge: '프론트 먼저 개발 시 데이터 구조 혼란 발생. 백엔드 API를 Postman으로 먼저 테스트 후 프론트 연결 방식으로 전환하여 개발 속도 및 디버깅 효율 향상.',
    award: '',
  },
];

// ============================================================
// 활동 (동아리, 교육, 견학 등)
// ============================================================
export const activities = [
  {
    category: '동아리',
    title: 'AIcraft 자율동아리 창설 및 팀장',
    periods: ['2024.03.18 ~ 2025.02', '2025.04.15 ~ 2025.12.16'],
    description: `인공지능과 코딩에 대한 전반적인 지식을 습득하고 AI 관련 프로젝트를 구상·구현하는 동아리.
졸업하신 선배님분들이 만든 자율동아리에서 배움의 가치를 체감하여 직접 창단하고 현재 2025년도 동아리 팀장으로 활동.
매주 화·목요일 21시까지 남아서 자기주도학습 및 공동 프로젝트 진행. 9월 동아리 프로젝트 발표회 운영.`,
  },
  {
    category: '교육',
    title: '미래유망분야 고졸인력양성사업 — PBL 기반 객체지향 프로그래밍 실무',
    periods: ['2025.05.14 ~ 2025.05.30'],
    description: 'Java 핵심 문법과 객체지향 설계 원칙을 학습하여 기능 중심 프로젝트 개발. 학과 내 20명 선발.',
  },
  {
    category: '교육',
    title: '미래유망분야 고졸인력양성사업 — AI기반 오픈소스를 활용한 실무 적용',
    periods: ['2024.06.03 ~ 2024.06.19'],
    description: 'Pygame 라이브러리를 활용한 게임 로직, 이벤트 처리, 화면 렌더링 프로젝트 제작.',
  },
  {
    category: '교육',
    title: '미래유망분야 고졸인력양성사업 — FRONT-END SW 실무',
    periods: ['2024.11.04 ~ 2024.11.22'],
    description: 'React 학습을 통해 컴포넌트 기반 UI 설계 역량을 익히고 백엔드 API 통신 프로젝트 개발.',
  },
  {
    category: '교육',
    title: '미래유망분야 고졸인력양성사업 — AWS 환경 기반 AI 실무',
    periods: ['2026.03.16 ~ 2026.04.06'],
    description: 'AWS 환경에서 AI 모델 활용, 데이터 처리, 서비스 배포까지 실무 중심 개발 과정 학습.',
  },
  {
    category: '교육',
    title: '미래유망분야 고졸인력양성사업 — SMART 앱 프로그래밍 실무',
    periods: ['2025.12.29 ~ 2026.01.13'],
    description: '스마트 앱 프로그래밍을 통해 사용자 인터페이스 설계, 데이터 처리, 기능 구현 실무 학습.',
  },
  {
    category: '교육',
    title: '미래유망분야 고졸인력양성사업 — AI기반 빅데이터분석 및 시각화',
    periods: ['2025.09.01 ~ 2025.09.12'],
    description: '대규모 데이터 분석 및 AI 모델 활용으로 인사이트 도출·시각화 실무 역량 학습.',
  },
  {
    category: '특강',
    title: 'Node.js 특강',
    periods: [],
    description: '라우팅 설계, 비동기 처리, REST API 구현 등 백엔드 핵심 개념 학습. Express 미들웨어 이해. 이후 Spring Boot·AWS 학습의 기반 마련.',
  },
  {
    category: '수업',
    title: 'AI융합수업 — 인공지능으로 환경문제를 해결할 수 있을까?',
    periods: ['2학년'],
    description: `환경오염 개념·심각성을 배우고 AI로 해결 아이디어를 발표·구현하는 활동.
팀에서 YOLOv8 기반 쓰레기 분류 AI를 개발하여 Clean_Earth 앱 제작. 2학년 전체 1등 달성.`,
  },
  {
    category: '견학',
    title: 'IBM 본사 견학',
    periods: ['2025.03.28'],
    description: 'IBM 본사 견학에서 AI 기술의 현재와 미래를 학습. 태양열 에너지 활용 친환경 무인 선박 기술 등 실무 현장의 AI 적용 사례 확인.',
  },
];

// ============================================================
// 수상 포트폴리오 카드 (AWARD 섹션용)
// images: src/assets/ 파일명 배열 — 2개 이상이면 캐러셀
// ============================================================
export const awardPortfolio = [
  {
    title: '미래유망 고졸인력양성사업 프로젝트 챌린지',
    prize: '최우수상 (1위)',
    date: '2026',
    category: '수상',
    tags: ['최우수상', '1위', '팀프로젝트'],
    description:
      '약쏙(앱·GPT APPS) 프로젝트로 친한 친구들과 팀을 꾸려 도전했다. 아이디어 회의부터 역할 분담·개발까지 약 2주를 함께하며 최우수상 1위를 달성했다. 기술적 완성도와 사회문제 해결 아이디어를 인정받은 성과로, 지금까지 진행한 프로젝트 중 과정 자체가 가장 즐거웠던 경험이다.',
    images: ['미래유망 고졸인력양성사업 프로젝트 챌린지-최우수상1등.jpg'],
  },
  {
    title: '2025 교육급여 바우처 수기 공모전 고등부',
    prize: '최우수상 · 교육부장관상',
    date: '2025.11.13',
    category: '수상',
    tags: ['최우수상', '교육부장관상', '공모전'],
    description:
      '한국장학재단 장학금을 발판 삼아 성장해온 1년을 글로 담았다. 단순 수상 목적이 아닌 스스로의 성장을 돌아보는 의미로 도전하여 고등부 최우수상(교육부장관상)을 수상했다. 1년간 치열하게 달려온 과정이 교육부장관에게 인정받았다는 사실이 어떤 수상보다도 크게 와닿았다.',
    images: ['한국장학재단 교육부 장관상(2).png', '한국장학재단 교육부 장관상2.jpg'],
  },
  {
    title: '제19회 서울시 직업계고 창의아이디어경진대회',
    prize: '특별상 (결선 진출)',
    date: '2025.04 – 2025.11.03',
    category: '수상',
    tags: ['특별상', '결선 진출', '8개월'],
    description:
      '4월부터 11월까지 약 8개월에 걸쳐 진행된 장기 대회. 놀봄이(노인 실종 방지 AI 앱)를 팀과 함께 기획·개발하여 결선까지 진출하고 특별상을 수상했다. 위치 추적·음성 인식·보호자 알림 자동화 기능을 기반으로 사회문제 해결형 AI 서비스의 실현 가능성을 인정받았다.',
    images: ['서울직업계고창의아이디어 경진대회 특별상.jpg', '서울직업계고창의아이디어 경진대회 특별상(2).png'],
  },
  {
    title: '서울시 직업계고 창의아이디어경진대회 예선전',
    prize: '은상 (2위)',
    date: '2025',
    category: '수상',
    tags: ['은상', '2위', '예선'],
    description:
      '제19회 서울시 직업계고 창의아이디어경진대회 예선전에서 은상(2위)을 수상하며 결선에 진출했다. 긴 여정의 시작이 된 예선 수상으로, 이후 8개월 과정을 끝까지 완주하는 동력이 됐다.',
    images: ['서울직업계고창의아이디어 경진대회 예선전 2위.png'],
  },
  {
    title: '2025학년도 인공지능 프로젝트 챌린지',
    prize: '은상 (2위)',
    date: '2025',
    category: '수상',
    tags: ['은상', '2위', 'AI 프로젝트'],
    description:
      'Teachable Machine 기반 포즈 인식 모델로 얼굴 방향을 실시간 분류하고 자동차 게임 이동 로직에 반영한 AI 라이딩 프로젝트로 은상을 수상했다. AI 제작 8분·웹페이지 제작 30분, 총 38분 만에 완성한 완성도를 인정받은 성과다.',
    images: ['2025 인공지능 프로젝트 챌린지 은상(2위).png'],
  },
  {
    title: '2024 연암공과대학교 AI 해커톤 대회 고교생 리그',
    prize: '금상 (100만원)',
    date: '2025.02.12',
    category: '수상',
    tags: ['금상', '100만원', '팀리더'],
    description:
      '이전 대회에서 팀원으로 참가하던 경험을 넘어 처음으로 팀 리더로 도전했다. 팀 전체의 방향을 직접 이끌며 아이디어를 하나의 결과물로 완성해 금상(100만원)을 수상했다. 기술 역량뿐 아니라 팀을 이끄는 법을 배울 수 있었던 대회.',
    images: ['2024 연암공과대학교 AI 해커톤 금상.jpg', '2024 연암공과대학교 AI 해커톤 금상(2).png'],
  },
  {
    title: '2024 디지털새싹 인공지능 메이커톤',
    prize: 'AI어벤저스 상 (공동 1위)',
    date: '2024.12.21 – 12.22',
    category: '수상',
    tags: ['AI어벤저스 상', '공동 1위', '협업'],
    description:
      '혼자가 아닌 팀 단위 협업 프로젝트를 처음으로 온전히 경험한 대회. 예상치 못한 공동 1위(AI 어벤저스 상)를 달성했다. 팀원과 역할을 나누고 함께 하나의 결과물을 만들어가는 협업 과정을 처음으로 체득한 소중한 경험이다.',
    images: ['2024 디지털새싹 인공지능 메이커톤.jpg'],
  },
  {
    title: '2024 서울장학재단 장학생 수기 공모전',
    prize: '우수상',
    date: '2024.12.23',
    category: '수상',
    tags: ['우수상', '공모전', '장학재단'],
    description:
      '고등학교 입학 초 전공 적성 고민으로 힘들었던 1학년을 버텨낸 경험을 글로 담았다. 기술 대회 수상과는 또 다른 의미로 다가온 수상으로, 흔들렸던 시간을 스스로 견뎌냈다는 것 자체가 이 수상을 특별하게 만들었다.',
    images: ['서울장학재단 꿈을 잇는 길, 나의 장학금 이야기 우수상.png'],
  },
  {
    title: '2024 TBI 면접경진대회',
    prize: '우수상 (4위 · 20만원)',
    date: '2024.10.31',
    category: '수상',
    tags: ['우수상', '면접', '첫 도전'],
    description:
      '1학년 말, 처음으로 마음을 다잡고 도전한 외부 대회. 결과는 우수상(4등·20만원)이었지만, 대회에 대한 두려움을 극복하는 전환점이 됐다. 이후 AI 해커톤·프로젝트 챌린지 등 다수 대회에 적극 도전할 수 있었던 원동력이 된 경험.',
    images: ['2024 TBI 면접경진대회-우수상.jpg', 'TBI면접경진대회우수상.png'],
  },
  {
    title: '교내 선행상',
    prize: '선행상',
    date: '2024 · 2025',
    category: '교내 수상',
    tags: ['선행상', '품행', '모범'],
    description:
      '품행이 바르고 성실하며 매사에 솔선수범하여 다른 학생의 모범이 된다는 이유로 1학년·2학년 연속 세명컴퓨터고등학교장 선행상을 수상했다. 기술 역량과 함께 인성 면에서도 인정받은 뜻깊은 수상이다.',
    images: ['2024 교내 선행상.png', '2025 교내 선행상.png'],
  },
  {
    title: '세명컴퓨터고 교직원장학회 장학생 선정',
    prize: '장학생',
    date: '2025',
    category: '교내 수상',
    tags: ['장학생', '장학금', '교직원장학회'],
    description:
      '세명컴퓨터고등학교 교직원장학회로부터 장학생으로 선정됐다. 학업과 대외 활동에서 꾸준히 보여온 노력과 성과가 인정받은 결과로, 앞으로의 성장에 더욱 동력이 되는 소중한 장학금이다.',
    images: ['세명컴퓨터고등학교 교직원장학회 장학생 선정.png'],
  },
  {
    title: '교내 자격증 인증제',
    prize: '장려상 (4위)',
    date: '2026.01.05',
    category: '교내 수상',
    tags: ['장려상', '자격증', '4위'],
    description:
      '2025학년도 교내 자격증 인증제에서 장려상(4위)을 수상했다. 정보처리기능사, 리눅스마스터 등 취득한 자격증 역량을 학교 내에서 공식 인정받은 자리였다.',
    images: ['2025년 교내 자격증 인증제 장려상(4위).png'],
  },
];

// ============================================================
// 활동 포트폴리오 카드 (ACTIVITY 섹션용)
// images: src/assets/ 파일명 배열 — 2개 이상이면 캐러셀
// ============================================================
export const activityPortfolio = [
  {
    title: 'AIcraft 자율동아리 창설 및 팀장',
    date: '2024.03 – 현재',
    category: '동아리',
    tags: ['동아리', '리더십', '창설'],
    description:
      '졸업 선배가 만든 자율동아리에서 배움의 가치를 체감하고 직접 AIcraft를 창설했다. 인공지능과 코딩에 대한 지식을 습득하고 AI 관련 프로젝트를 구상·구현하는 동아리로, 매주 화·목 21시까지 남아 자기주도학습과 팀 프로젝트를 이어가며 자연스러운 면학 분위기를 형성했다. 9월 발표회를 통해 팀원들의 발표 역량도 함께 키웠다.',
    images: ['AIcraft자율동아리 사진.png'],
  },
  {
    title: 'AI융합수업 — 환경 AI 프로젝트 (Clean Earth)',
    date: '2025 (2학년)',
    category: '수업',
    tags: ['2학년 전체 1등', '팀프로젝트', 'YOLOv11'],
    description:
      '2학년 환경오염 문제를 AI로 해결하는 수업 활동. 팀에서 YOLOv8 → YOLOv11 기반 쓰레기 분류 AI를 개발해 리폼 물품을 추천하는 앱(Clean Earth)을 제작했다. 초기 YOLOv8 정확도 60% 미만 문제를 데이터셋 교체·모델 업그레이드로 83.8%로 개선했다. 4팀 중 선발되어 전체 발표를 진행하고 2학년 전체 1등을 달성했다.',
    images: ['AI융합수업-2학년 전체 1등.jpg'],
  },
  {
    title: '미래유망분야 고졸인력양성사업 교육과정',
    date: '2024 – 2026',
    category: '교육',
    tags: ['수료', '대한상공회의소', '실무교육'],
    description:
      '대한상공회의소 주관으로 학과 내 20명을 선발하여 진행하는 취업 실무 교육. PBL기반 Java 객체지향 설계(2025.05), AI기반 오픈소스 실무(2024.06), FRONT-END SW 실무(2024.11), AI기반 빅데이터 분석(2025.09), SMART 앱 프로그래밍(2025.12), AWS 환경 AI 실무(2026.03) 등 총 6개 과정을 수료하며 실전 개발 역량을 쌓았다.',
    images: ['미래유망 수료증1.png', '미래유망 수료증2.png', '미래유망 수료증3.png', '미래유망 수료증4.png'],
  },
  {
    title: 'IBM 본사 견학',
    date: '2025.03.28',
    category: '견학',
    tags: ['기업 견학', 'AI 산업', 'IBM Innovation Studio'],
    description:
      '고등학교 2학년 때 IBM Innovation Studio 본사 견학에 참여해 AI 기술의 현재와 미래를 학습했다. 태양열 에너지로 배터리를 충전해 24시간 바다를 항해하며 해양 데이터를 수집하는 친환경 무인 선박 기술이 가장 인상적이었다. 이론으로만 접했던 AI를 실무 현장에서 직접 확인하며 기술 발전의 속도를 피부로 체감한 시간이었다.',
    images: ['IBM견학-활동사진.jpg'],
  },
  {
    title: '2024학년도 2학기 학급회장',
    date: '2024.09',
    category: '교내활동',
    tags: ['학급회장', '리더십', '1학년'],
    description:
      '1학년 2학기 학급회장으로 선출되어 학급을 이끌었다. 학급 구성원의 의견을 모으고 소통하는 과정에서 책임감과 리더십을 기를 수 있었으며, 이후 AIcraft 동아리 창설 및 팀장 역할을 맡는 데 중요한 밑거름이 됐다.',
    images: ['2024학년도 2학기 학급회장.png'],
  },
];

// ============================================================
// 프로젝트 포트폴리오 (PROJECT 섹션용)
// images: 아키텍처 이미지는 반드시 마지막 순서
// ============================================================
export const projectPortfolio = [
  {
    id: 'yagsok-app',
    title: '약쏙',
    subtitle: '앱 (Flutter / Node.js)',
    period: '2주',
    team: '3인',
    year: 2026,
    award: '미래유망 고졸인력양성사업 프로젝트 챌린지 최우수상 (1위)',
    goal: '고령화 사회에서 노인층이 병원 처방 내용을 이해하기 어렵다는 문제에 주목했다. 진료 음성을 실시간으로 녹음·분석하여 복약 일정과 주의사항을 쉽게 확인할 수 있는 모바일 앱 개발을 목표로 했다.',
    role: 'Flutter/Node.js 풀스택 구조에서 백엔드를 담당했다. JWT 인증, REST API 설계, AWS RDS(MySQL) 데이터 관리, Solapi SMS 연동 등 서버 핵심 로직 전반을 구현했다. OpenAI Whisper·GPT API 연동 및 공공데이터 API 파싱 처리도 백엔드에서 직접 설계했다.',
    features: [
      '진료기록 녹음 & 요약 — Whisper API로 음성 텍스트 변환 후 GPT 요약',
      '복약 일정 관리 — 처방 약 복용 시간 자동 등록 및 알림',
      '증상 분석 — AI 기반 증상 입력 분석 및 관련 정보 제공',
      '날씨 / 약국 / 유행병 정보 — 공공데이터 API 연동',
      '보호자 알림 — Solapi SMS API로 복약 알림 문자 발송',
      '카카오 로그인 — 카카오 OAuth SDK 간편 소셜 로그인',
    ],
    challenge: 'S3 업로드 구조에서 서버 부하가 심각하게 발생했다. Presigned URL 방식을 도입하여 클라이언트가 서버를 거치지 않고 S3에 직접 업로드하도록 아키텍처를 전면 재설계했다.',
    techs: ['Flutter', 'Node.js', 'JWT', 'REST API', 'AWS RDS(MySQL)', 'AWS S3', 'OpenAI Whisper', 'GPT API', 'Solapi SMS', 'Kakao OAuth', '공공데이터 API'],
    images: [
      'Project약쏙.png',
      'Project약쏙1.png',
      'Project약쏙2.png',
      'Project약쏙3.png',
      'Project약쏙4.png',
      'Project약쏙아키텍처.png',
    ],
  },
  {
    id: 'yagsok-gpt',
    title: '약쏙',
    subtitle: 'GPT Apps (MCP / React)',
    period: '2주',
    team: '3인',
    year: 2026,
    award: '미래유망 고졸인력양성사업 프로젝트 챌린지 최우수상 (1위)',
    goal: 'ChatGPT 대화창 하나로 약품 추천과 약국 탐색을 동시에 해결하는 서비스 구현. 앱 설치 없이 GPT APPS SDK를 통해 공공 의약품 정보와 지도 기반 약국 탐색을 제공하는 것을 목표로 했다.',
    role: 'React로 위젯 UI를 구성하고, AWS Lambda에서 공공API(의약품·약국) 호출 및 데이터 가공 로직을 처리했다. Vercel에 MCP 서버(api/mcp.js)를 배포하여 ChatGPT GPT APPS SDK와 연결했으며, 증상 정규화·거리순 정렬 등 핵심 필터링 로직을 Lambda에서 직접 구현했다.',
    features: [
      '약품 추천 — 증상 입력 시 MCP를 통해 공공API 기반 약품 정보 자동 추천',
      '약국 탐색 — 현재 위치 기반 주변 약국 검색 및 Leaflet 지도 시각화',
      '자동 도구 선택 — ChatGPT가 자연어 입력에 따라 적합한 Tool을 자동 선택',
      '앱 설치 불필요 — GPT APPS SDK 기반, 대화창 하나로 모든 기능 이용',
    ],
    challenge: 'ChatGPT가 두 가지 Tool을 정확히 자동 선택하도록 MCP 스펙을 설계하는 것이 까다로웠다. Tool description과 파라미터 명세를 반복적으로 수정하며 의도한 대로 도구가 호출되는 구조를 완성했다.',
    techs: ['React', 'MCP', 'AWS Lambda', 'Vercel', 'ChatGPT GPT APPS SDK', 'Leaflet', '공공API(의약품)', '공공API(약국)'],
    images: [
      'Project약쏙(GPT Apps)1.png',
      'Project약쏙(GPT Apps)2.png',
      'Project약쏙(GPT Apps)3.png',
      'Project약쏙(GPT Apps)4.png',
      'Project약쏙(GPT Apps)아키텍처.png',
    ],
  },
  {
    id: 'nolbomi',
    title: '놀봄이',
    subtitle: '앱 (Python / FastAPI)',
    period: '4주',
    team: '2인',
    year: 2025,
    award: '제19회 서울시 직업계고 창의아이디어경진대회 결선 진출 및 특별상',
    goal: '증가하는 노인 실종 신고 안내 문자를 대체하기 위해, 실시간 위치 추적·음성 인식·보호자 알림을 AI로 자동화하는 노인 돌봄 앱을 개발했다. 가족이 멀리 있어도 소중한 어르신을 안전하게 지킬 수 있는 보호자 연동 서비스를 목표로 했다.',
    role: 'Python으로 API 연동 및 AI 모델 통합을 담당했다. 알리고 문자 API를 연동하여 실종 판단 시 보호자 앱 알림 및 경찰 SMS 자동 발송 기능을 구현했다. Google Cloud Speech API 기반 긴급 키워드 실시간 감지 시스템과 Mediapipe 기반 얼굴 인식 촬영 기능을 개발하고, FastAPI 서버를 구축했다.',
    features: [
      '위치 추적 알림 — 지정 장소(집)에서 750m 이상 이탈 시 보호자에게 자동 알림',
      'Wake Word Detection — "살려줘", "도와줘" 키워드 감지 시 보호자 알림 및 119 신고',
      '얼굴 인식 촬영 — Mediapipe 기반 얼굴 감지 시에만 프로필 촬영 활성화',
      '자동 게시판 업로드 — 실종 판단 시 사용자 정보·마지막 위치 게시판에 자동 업로드',
      '보호자 SMS — 알리고 API 연동 실종 신고 문자 자동 발송',
    ],
    challenge: '알리고 문자 API 연동 시 응답 코드 오류로 SMS 전송이 실패하는 문제가 발생했다. API 요청 방식과 인증 절차를 재검토하고 반복 테스트를 통해 실종 신고 문자가 정상적으로 발송되도록 해결했다.',
    techs: ['Python', 'FastAPI', 'Google Cloud Speech API', 'Mediapipe', '알리고 문자 API', '위치 기반 서비스'],
    images: [
      'Project놀봄이1.png',
      'Project놀봄이2.png',
      'Project놀봄이3.png',
      'Project놀봄이4.png',
      'Project놀봄이아키텍처.png',
    ],
  },
  {
    id: 'clean-earth',
    title: 'Clean Earth',
    subtitle: '앱 (Python / YOLOv11 / Flask)',
    period: '7일',
    team: '4인',
    year: 2025,
    award: 'AI 환경 융합 활동 — 2학년 전체 1등',
    goal: '재활용 쓰레기를 증가시켜 환경에 가해지는 부담을 최소화하고, 사용자가 스스로 쓰레기를 리폼하는 새로운 문화를 만들기 위해 제작했다. AI가 쓰레기를 분류하고 리폼 방법을 추천하는 선순환 구조를 앱으로 구현하는 것을 목표로 했다.',
    role: 'Roboflow로 YOLOv11 기반 쓰레기 분류 데이터셋을 구축하고, Python으로 학습 코드를 구현하여 AI 모델을 학습시켰다. OpenCV로 USB 웹캠을 연결해 실시간 분류 테스트를 진행했으며, Flask 서버를 구현해 앱과 AI 모델을 연동했다.',
    features: [
      'AI 쓰레기 분류 — YOLOv11 모델로 카메라 촬영 쓰레기 종류 실시간 판별',
      '리폼 물품 추천 — 분류된 쓰레기 종류에 맞는 재활용 리폼 물품 자동 추천',
      '검색 기능 — 알고리즘 설계를 통한 물품 검색 기능 제공',
    ],
    challenge: '초기 YOLOv8 학습 시 모델 정확도가 60% 미만으로 나왔다. 코드 수정을 반복했으나 70%를 넘지 못했고, 선생님께 조언을 구해 학습 데이터셋 교체와 상위 모델인 YOLOv11로 업그레이드를 진행했다. 그 결과 정확도가 83.8%까지 상승하며 문제를 해결했다.',
    techs: ['Python', 'YOLOv11', 'OpenCV', 'Flask', 'Roboflow', 'USB 웹캠'],
    images: [
      'ProjectCleanEarth1.png',
      'ProjectCleanEarth2.png',
      'ProjectCleanEarth3.png',
      'ProjectCleanEarth4.png',
      'ProjectCleanEarth아키텍처.png',
    ],
  },
  {
    id: 'ai-riding',
    title: 'AI 라이딩',
    subtitle: '웹 게임 (Teachable Machine / TensorFlow.js)',
    period: '1일 (38분)',
    team: '1인',
    year: 2025,
    award: '2025학년도 인공지능 프로젝트 챌린지 은상 (2위)',
    goal: '중학생들이 AI 원리를 직접 체험하며 이해할 수 있도록, Teachable Machine으로 간단히 AI를 만들고 HTML 게임과 연결하는 프로젝트를 목표로 했다. AI 제작 8분 · 웹페이지 제작 30분, 총 38분 만에 완성했다.',
    role: 'Teachable Machine Pose 모델로 Left / Right / Stop 3가지 클래스를 직접 촬영·학습시켰다. TensorFlow.js와 Teachable Machine 라이브러리를 HTML에 연동하여 웹캠 예측값을 실시간으로 게임 조작에 반영했다.',
    features: [
      '얼굴 기울기 인식 — Teachable Machine 포즈 모델로 Left / Right / Stop 실시간 분류',
      '자동차 조작 — 인식된 방향에 따라 차량이 좌우 이동하며 장애물 회피',
      '랜덤 장애물 생성 — 4종류 차량이 랜덤 위치에서 일정 간격으로 생성',
      '실시간 신뢰도 표시 — 웹캠 옆에 각 클래스 예측 확률 실시간 출력',
    ],
    challenge: '포즈 인식 확률이 낮을 때 차량이 오작동하는 문제가 있었다. 예측 확률이 60% 미만이면 Stop으로 처리하는 임계값 로직을 추가해 불필요한 오작동을 방지했다.',
    techs: ['Teachable Machine', 'TensorFlow.js', 'HTML', 'CSS', 'JavaScript', 'Web Camera API'],
    images: [
      'ProjectAI라이딩1.png',
      'ProjectAI라이딩2.png',
      'ProjectAI라이딩3.png',
      'ProjectAI라이딩아키텍처.png',
    ],
  },
  {
    id: 'posture-alert',
    title: '자세 알림이',
    subtitle: '웹 (Mediapipe / Flask)',
    period: '7일',
    team: '1인',
    year: 2025,
    award: '',
    goal: 'AI를 통해 사용자의 잘못된 자세를 실시간으로 감지하고 교정한다. 장시간 앉아 있는 현대인들의 자세 불균형을 예방하고, 실시간 자세 분석 알림으로 올바른 자세 습관 형성을 돕는 것을 목표로 했다.',
    role: 'Mediapipe로 거북목·졸음·어깨 비대칭 측정 AI를 제작하고, Flask로 백엔드 서버를 구현했다. HTML·CSS·JavaScript로 실시간 웹캠 피드백 화면을 제작했다.',
    features: [
      '거북목 측정 — 얼굴과 어깨 각도를 분석해 거북목 여부 실시간 판별',
      '졸음 측정 — 눈 개폐 비율(EAR)을 감지해 졸음 상태 경고',
      '어깨 비대칭 측정 — 좌우 어깨 높이 차이를 분석해 비대칭 자세 감지',
      '실시간 경고 출력 — 문제 자세 감지 시 웹 화면에 즉시 시각적 알림',
    ],
    challenge: '처음에는 YOLOv11로 자체 AI를 직접 개발하려 했으나 데이터셋 수집과 OpenCV 카메라 연결 과정에서 반복 오류가 발생했다. 포기하지 않고 대안을 탐색하여 Mediapipe로 전환했고, 별도 데이터셋 없이 높은 정확도로 자세를 분류할 수 있었다.',
    techs: ['Python', 'Mediapipe', 'Flask', 'HTML', 'CSS', 'JavaScript', 'OpenCV'],
    images: [
      'Project자세알림이1.png',
      'Project자세알림이2.png',
      'Project자세알림이3.png',
      'Project자세알림이4.png',
      'Project자세알림이아키텍처.png',
    ],
  },
  {
    id: 'thoughtforge',
    title: 'ThoughtForge',
    subtitle: '웹 (React / OpenAI API / Notion API)',
    period: '7일',
    team: '1인',
    year: 2025,
    award: '',
    goal: '아이디어를 자유롭게 입력하면 GPT가 자동으로 구조화·정리해주는 AI 사고 정리 도구 개발을 목표로 했다. 단순 정리에서 나아가 Notion 연동과 파일 다운로드까지 지원해 실제 개발 워크플로우에 바로 활용할 수 있도록 설계했다.',
    role: 'React로 프론트엔드를 구성하고 OpenAI API를 직접 호출하여 아이디어 구조화 및 프롬프트 생성 기능을 구현했다. 노드 기반 그래프 시각화 라이브러리로 생각 그래프를 구현했으며, Notion API 연동으로 정리된 내용을 외부 워크스페이스까지 자동 동기화되도록 설계했다.',
    features: [
      'AI 정리 — GPT가 주제·핵심 아이디어·문제·해결방법·추가 아이디어로 자동 구조화',
      'AI 프롬프트 — 프로젝트 구현을 위한 AI 프롬프트 작성 가이드 자동 생성',
      '생각 그래프 — 정리된 내용을 카테고리별 노드 그래프로 시각화',
      '내보내기 — PDF·DOCX 다운로드 또는 Notion 계정 연동으로 새 페이지 자동 이관',
    ],
    challenge: 'GPT 응답을 AI 정리·AI 프롬프트·생각 그래프 세 가지 형태로 동시에 파싱해야 했는데, 응답 구조가 일정하지 않아 데이터 처리가 불안정했다. GPT에게 JSON 형식으로만 응답하도록 프롬프트를 엄격히 설계하고, 파싱 실패 시 재요청하는 예외 처리 로직을 추가해 안정성을 확보했다.',
    techs: ['React', 'OpenAI API', 'Notion API', 'PDF 변환', 'DOCX 변환', '노드 그래프 시각화'],
    images: [
      'ProjectThoughtForge1.png',
      'ProjectThoughtForge2.png',
      'ProjectThoughtForge3.png',
      'ProjectThoughtForge4.png',
      'ProjectThoughtForge5.png',
      'ProjectThoughtForge6.png',
      'ProjectThoughtForge아키텍처.png',
    ],
  },
  {
    id: 'noise-prediction',
    title: '지역별 소음 예측 AI 앱',
    subtitle: '앱 (Python / TensorFlow / Flask / Kotlin)',
    period: '6일',
    team: '3인',
    year: 2024,
    award: '',
    goal: '서울 내 구 및 동의 지역 소음을 AI로 분석하고 예측하여 사용자가 원하는 지역의 평균 소음량을 제공한다. AI 기반 소음 예측을 통해 주거 지역의 쾌적한 생활 환경 조성을 목표로 했다.',
    role: 'Pandas를 활용한 데이터 전처리·시각화, TensorFlow 기반 딥러닝 AI 모델 학습, Flask 백엔드 서버 구현을 담당했다. Kotlin으로 개발된 앱과의 API 연동도 함께 처리했다.',
    features: [
      '소음 종합 점수 제공 — AI가 분석한 지역별 소음 종합 점수 시각화',
      '주간/야간 평균 소음 데이터 — 시간대별 평균 소음량 비교 제공',
      '주요 소음원 분석 — 교통·건물 등 소음원 종류별 비중 제공',
      '지역 검색 — 구·동 단위 지역 검색 및 소음 데이터 조회',
    ],
    challenge: '원하는 형태의 데이터셋이 존재하지 않았다. 유사한 데이터셋 2개를 찾아 불필요한 데이터를 삭제하고, 필요한 부분을 대체·병합하는 과정을 팀원과 함께 거쳐 원하는 형태의 데이터셋을 직접 제작했다.',
    techs: ['Python', 'TensorFlow', 'Pandas', 'Flask', 'Kotlin', 'SQLite'],
    images: [
      'Project 지역별 소음 예측 AI 앱1.png',
      'Project지역 별소음 예측 AI 앱2.png',
      'Project 지역별 소음 예측 AI 앱3.png',
      'Project 지역별 소음 예측 AI 앱 아키텍처.png',
    ],
  },
  {
    id: 'hakwon-survey',
    title: '나는 학원에서 행복한가?',
    subtitle: '데이터 분석 (Python / Pandas / Matplotlib)',
    period: '14일',
    team: '1인',
    year: 2024,
    award: '',
    goal: '청소년들이 학원에서 느끼는 만족도와 스트레스 요인을 파악하고, 학원이 학생의 행복에 미치는 영향을 데이터 분석을 통해 탐구했다. "청소년은 학원에서 행복한가?"라는 질문에 대한 근거 기반 결론 도출을 목표로 했다.',
    role: '전 과정을 1인으로 진행했다. Google Forms로 63명 대상 설문을 기획·진행하고, 수집 데이터를 CSV로 변환한 뒤 Jupyter Notebook에서 전처리·시각화를 수행했다. 분석 결과를 바탕으로 포스터를 직접 제작했다.',
    features: [
      '설문 조사 — Google Forms로 63명 대상 설문 진행 (학원 만족도·스트레스·학습 동기)',
      '데이터 전처리 — Pandas·NumPy로 결측치 제거 및 범주형 데이터 정리',
      '시각화 분석 — Matplotlib으로 학원 참여 이유·만족도·스트레스 요인 그래프화',
      '포스터 제작 — 분석 결과를 한눈에 볼 수 있는 리서치 포스터 완성',
    ],
    challenge: '데이터 시각화 과정에서 Data Mismatch 에러가 발생했다. CSV 데이터가 문자열 형태로 읽혀 예상 값 38이 17로 집계되는 오류가 있었다. 데이터 타입을 정제하고 전처리를 재수행하여 시각화 값과 실제 값이 일치하도록 해결했다.',
    techs: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook', 'Google Forms'],
    pdfFile: '나는학원에서행복한가.pdf',
    images: [
      'Project나는 학원에서 행복한가.png',
    ],
  },
  {
    id: 'customer-auction',
    title: '손님 경매',
    subtitle: '웹 (Node.js / Express / MySQL)',
    period: '3일',
    team: '1인',
    year: 2024,
    award: '',
    goal: '손님과 음식점을 실시간으로 양방향 매칭하는 경매 시스템을 구현했다. RESTful API 설계와 DB 트랜잭션 기반 데이터 무결성 보장을 학습하기 위한 목적으로 시작한 프로젝트다.',
    role: 'MySQL로 손님·음식점·게시글·입찰 4개의 테이블을 설계하고, Node.js + Express 기반 RESTful API 서버를 구축했다. 기능별 라우터 모듈화(customers, restaurants, posts, bids, stats), DB 트랜잭션 기반 입찰 수락 구현, HTML·CSS·JS 반응형 웹 인터페이스 제작까지 전 과정을 1인으로 진행했다.',
    features: [
      '회원가입 및 로그인 — 손님/음식점 역할 분리 인증 구현',
      '손님 모집 공고 작성 — 인원·날짜·지역을 설정해 경매 공고 등록',
      '입찰 시스템 — 음식점이 공고를 조회하고 제안을 전송',
      '내 경매 현황 관리 — 입찰 수락·거절 및 매칭 완료 상태 관리',
      'DB 트랜잭션 동시성 제어 — 입찰 수락 시 중복 처리 방지',
    ],
    challenge: '처음에는 프론트엔드를 먼저 완성하고 백엔드를 연결하려 했으나, API 설계 없이 프론트를 만드니 데이터 구조가 불명확해 혼란이 생겼다. 접근 방식을 바꿔 Postman으로 백엔드 API를 먼저 테스트한 후 프론트를 연결하는 방식으로 전환했고, 개발 속도와 디버깅 효율이 크게 향상됐다.',
    techs: ['Node.js', 'Express', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Fetch API', 'Postman'],
    images: [
      'Project손님경매1.png',
      'Project손님경매2.png',
      'Project손님경매아키텍처.png',
    ],
  },
];
