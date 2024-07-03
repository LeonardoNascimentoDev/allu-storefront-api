import type { NextPage } from 'next'
import CategoryCard from '../components/CategoryCard'
import { Container, Large } from '../styles/pages/Home'
import images from '../utils/images'
import { v4 as uuid } from 'uuid'
import { Categories } from '../types/Categories'
import { useEffect, useState } from 'react'
import getAllCategories from '../services/Categories/getAllCategories'

const Home: NextPage = (): JSX.Element => {

  const [categories, setCategories] = useState<Categories[]>([])

  const mountCategories = async () => {
    await getAllCategories(setCategories)
  }

  useEffect(() => {
    mountCategories()
  }, [])

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
