import './App.css'
import ArchitectureAndUsed from './components/ArchitectureAndUsed'
import Footer from './components/Footer'
import GetAPiKeys from './components/GetAPiKeys'
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
      {/* How to used */}
      <GetAPiKeys/>
      <Footer/>
    </div>
  )
}

export default App