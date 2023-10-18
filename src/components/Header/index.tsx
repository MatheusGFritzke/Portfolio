import { HeaderContainer } from './styles'
import { MuiDrawer } from '../MiuDrawer'
import ChangeTheme from '../ChangeTheme'
import { ResponsiveAppBar } from '../ReponsiveAppBar/indext'

export function Header() {
  const { innerWidth: width } = window

  return (
    <>
      <HeaderContainer>
        {width < 900 ? <MuiDrawer /> : <ResponsiveAppBar />}
        {width < 900 && <ChangeTheme disabled />}
      </HeaderContainer>
    </>
  )
}
