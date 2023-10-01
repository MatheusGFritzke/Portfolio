import { NavLink } from 'react-router-dom'
import {
  MainProjectsContainer,
  ProjectContainer,
  CardContainer,
  Overlay,
} from './styles'
import countdonwImage from '../../assets/images/countdown.png'
import futureProjects from '../../assets/images/futureProjects.png'
import { defaultStyleObject } from '../MiuDrawer/defaultStyleNavLink'

export function MainProjects() {
  return (
    <>
      <MainProjectsContainer>
        <ProjectContainer>
          <NavLink to="/projects/timer/countdown" style={defaultStyleObject}>
            <CardContainer>
              <img src={countdonwImage} alt="" />
              <Overlay>Countdown</Overlay>
            </CardContainer>
          </NavLink>
        </ProjectContainer>
        <ProjectContainer>
          <NavLink to="/projects/timer/countdown" style={defaultStyleObject}>
            <CardContainer>
              <img src={futureProjects} alt="" />
              {/* <Overlay>Countdown</Overlay> */}
            </CardContainer>
          </NavLink>
        </ProjectContainer>
      </MainProjectsContainer>
      <MainProjectsContainer>
        <ProjectContainer>
          <NavLink to="/projects/timer/countdown" style={defaultStyleObject}>
            <CardContainer>
              <img src={futureProjects} alt="" />
              {/* <Overlay>Countdown</Overlay> */}
            </CardContainer>
          </NavLink>
        </ProjectContainer>
        {/* <ProjectContainer> */}
        {/* <NavLink to="/projects/timer/countdown" style={defaultStyleObject}> */}
        {/* <CardContainer> */}
        {/* <img src={futureProjects} alt="" /> */}
        {/* <Overlay>Countdown</Overlay> */}
        {/* </CardContainer> */}
        {/* </NavLink> */}
        {/* </ProjectContainer> */}
        <ProjectContainer>
          <NavLink to="/projects/timer/countdown" style={defaultStyleObject}>
            <CardContainer>
              <img src={futureProjects} alt="" />
              {/* <Overlay>Countdown</Overlay> */}
            </CardContainer>
          </NavLink>
        </ProjectContainer>
      </MainProjectsContainer>
    </>
  )
}
