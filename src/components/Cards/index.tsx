import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { defaultStyleObject } from '../MiuDrawer/defaultStyleNavLink'

interface CardsProps {
  image: string
  title: string
  content: string
  mobile: boolean
  route: string
}

export default function Cards({
  image,
  title,
  content,
  mobile,
  route,
}: CardsProps) {
  return (
    <Card>
      <NavLink style={defaultStyleObject} to={route}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={{
              objectFit: 'cover',
              width: mobile ? '90vw' : '27rem',
              height: mobile ? '12rem' : '15rem',
              maxWidth: '100%',
              filter: 'grayscale(100%)',
            }}
            image={image}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {content}
            </Typography>
          </CardContent>
        </CardActionArea>
      </NavLink>
    </Card>
  )
}
