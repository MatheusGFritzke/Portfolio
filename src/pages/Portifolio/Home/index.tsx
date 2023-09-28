import backgroundImage from '../../../assets/images/backgroundImage.jpg'
import { Container, Image, MainContainer, Overlay, Text } from './styles'

export function Portfolio() {
  return (
    <MainContainer>
      <Container>
        <Image src={backgroundImage} alt="" />
        <Overlay>
          <Text>Matheus Fritzke</Text>
        </Overlay>
      </Container>
    </MainContainer>
  )
}
