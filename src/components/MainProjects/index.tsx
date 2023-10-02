import {
  ContainerWrapper,
  MainProjectsContainer,
  ProjectContainer,
} from './styles'
import countdonwImage from '../../assets/images/countdown.png'
import Cards from '../Cards'

const mobile = window.innerWidth < 600

const cards = [
  {
    route: '/projects/timer/countdown',
    mobile,
    image: countdonwImage,
    title: 'Countdown app',
    content: 'Aplicativo para intercalar tarefas',
  },
  {
    route: '/projects/timer/countdown',
    mobile,
    image: countdonwImage,
    title: 'Countdown app',
    content: 'Aplicativo para intercalar tarefas',
  },
  {
    route: '/projects/timer/countdown',
    mobile,
    image: countdonwImage,
    title: 'Countdown app',
    content: 'Aplicativo para intercalar tarefas',
  },
  {
    route: '/projects/timer/countdown',
    mobile,
    image: countdonwImage,
    title: 'Countdown app',
    content: 'Aplicativo para intercalar tarefas',
  },
]

export function MainProjects() {
  return (
    <>
      <MainProjectsContainer>
        {/* <ProjectContainer>
          <NavLink to="/projects/timer/countdown" style={defaultStyleObject}>
            <CardContainer>
              <img src={countdonwImage} alt="" />
              <Overlay>Countdown</Overlay>
            </CardContainer>
          </NavLink>
        </ProjectContainer> */}
        {cards.map((card, i) => (
          <ContainerWrapper key={i}>
            <ProjectContainer>
              <Cards
                route={card.route}
                mobile={mobile}
                image={countdonwImage}
                title={card.title}
                content={card.content}
              />
            </ProjectContainer>
          </ContainerWrapper>
        ))}
      </MainProjectsContainer>
    </>
  )
}
