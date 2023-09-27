import { Routes, Route } from 'react-router-dom'
// import { Home } from './pages/Home'
import { History } from './pages/History'
// import { DefaultLayout } from './layouts/DefaultLayout'
import { PortifolioLayout } from './layouts/PortifolioLayout'
import { Portifolio } from './pages/Portifolio/Home'

export function Router() {
  return (
    <Routes>
      {/* <Route path="/test" element={<DefaultLayout />}>
        <Route path="/page" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route> */}

      <Route path="/" element={<PortifolioLayout />}>
        <Route path="/" element={<Portifolio />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  )
}
