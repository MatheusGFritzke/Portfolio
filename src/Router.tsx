import { Routes, Route, Navigate } from 'react-router-dom'
import { PortfolioLayout } from './layouts/PortifolioLayout'
import { Portfolio } from './pages/Portifolio/Home'
import { MainProjects } from './components/MainProjects'
import { Timer } from './projects/IgniteTimer/pages/Timer'
import { MainHistory } from './projects/IgniteTimer/pages/MainHistory'
import { TodoList } from './projects/TodoList'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<PortfolioLayout />}>
        <Route path="/" element={<Portfolio />} />
        <Route path="/projects" element={<MainProjects />} />
        <Route path="/projects/timer/countdown" element={<Timer />} />
        <Route path="/projects/timer/history" element={<MainHistory />} />
        <Route path="/projects/todo/main" element={<TodoList />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  )
}
