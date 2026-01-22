import './App.css'
import ArchitectureAndUsed from './components/ArchitectureAndUsed'
import Footer from './components/Footer'
import HeroSectionOne from './components/HeroSection'

const App = () => {
  return (
    <div>
      {/* other-components   */}
      <HeroSectionOne/>
      {/* architecture */}
      <ArchitectureAndUsed/>
      <Footer/>
    </div>
  )
}

export default App