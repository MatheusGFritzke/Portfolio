import {
  ContainerWrapper,
  MainProjectsContainer,
  ProjectContainer,
} from './styles'
import countdonwImage from '../../assets/images/countdown.png'
import loadginImage from '../../assets/images/loading-image.jpeg'
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
    route: '/projects',
    mobile,
    image: loadginImage,
    title: 'Waiting for new project',
    content: 'Description',
  },
  {
    route: '/projects',
    mobile,
    image: loadginImage,
    title: 'Waiting for new project',
    content: 'Description',
  },
  {
    route: '/projects',
    mobile,
    image: loadginImage,
    title: 'Waiting for new project',
    content: 'Description',
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
                mobile={card.mobile}
                image={card.image}
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
