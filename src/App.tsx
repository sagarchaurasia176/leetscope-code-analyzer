import './App.css'
import ArchitectureAndUsed from './components/ArchitectureAndUsed'
import Footer from './components/Footer'
import HeroSectionOne from './components/HeroSection'
import VideoSection from './components/VideoSection'

const App = () => {
  return (
    <div>
      {/* other-components   */}
      <HeroSectionOne/>
    
      {/* Video-sections */}
      <VideoSection/>
      {/* architecture */}
      <ArchitectureAndUsed/>
      <Footer/>
    </div>
  )
}

export default App