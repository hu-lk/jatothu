import { BrowserRouter } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero/>
    </BrowserRouter>
  )
}

export default App