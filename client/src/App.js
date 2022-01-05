import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components'

import Home from './pages/Home'

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-gray-100">
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
