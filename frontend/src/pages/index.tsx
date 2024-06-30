import type { NextPage } from 'next'
import CategoryCard from '../components/CategoryCard'
import { Container, Large } from '../styles/pages/Home'
import images from '../utils/images'
import { v4 as uuid } from 'uuid'

const Home: NextPage = (): JSX.Element => {
  const categories = ["Notebooks", "Desktops", "Smartwatches", "Smartphones"];

  return (
    <Container>
      <Large>
        {categories.map((item, index) => (
          <CategoryCard
            key={uuid()} 
            image={images[index]} 
            name={item}
          />
        ))}
      </Large>
    </Container>
  )
}

export default Home
