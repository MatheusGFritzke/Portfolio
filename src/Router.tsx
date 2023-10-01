import { Routes, Route, Navigate } from 'react-router-dom'
import { PortfolioLayout } from './layouts/PortifolioLayout'
import { Portfolio } from './pages/Portifolio/Home'
import { MainProjects } from './components/MainProjects'
// import { IgniteTimer } from './projects/IgniteTimer'
import { Home } from './projects/IgniteTimer/pages/Home'
import { History } from './projects/IgniteTimer/pages/History'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioLayout />}>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<MainProjects />} />
        <Route path="/projects/timer" element={<Home />} />
        <Route path="/projects/timer/history" element={<History />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}
