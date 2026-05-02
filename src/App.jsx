import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import AwardsSection from './components/AwardsSection'
import ActivitiesSection from './components/ActivitiesSection'
import ClosingSection from './components/ClosingSection'
import ChatbotSection from './components/ChatbotSection'

function App() {
  return (
    <>
      <main>
        <HeroSection />
        <ProjectsSection />
        <AwardsSection />
        <ActivitiesSection />
        <ClosingSection />
      </main>
      {/* 플로팅 챗봇 — 페이지 레이아웃에 영향 없음 */}
      <ChatbotSection />
    </>
  )
}

export default App
