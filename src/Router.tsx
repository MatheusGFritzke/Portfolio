import { Routes, Route } from 'react-router-dom'
import { PortfolioLayout } from './layouts/PortifolioLayout'
import { Portfolio } from './pages/Portifolio/Home'
import { MainProjects } from './components/MainProjects'
// import { IgniteTimer } from './projects/IgniteTimer'
import { Home } from './projects/IgniteTimer/pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioLayout />}>
        <Route path="home" element={<Portfolio />} />
        <Route path="projects" element={<MainProjects />} />
        {/* </Route> */}
        {/* <Route path="timer" element={<Home />} /> */}
      </Route>
    </Routes>
  )
}
