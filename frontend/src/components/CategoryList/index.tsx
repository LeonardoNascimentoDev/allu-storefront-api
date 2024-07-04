import CategoryCard from '../../components/CategoryCard'
import { v4 as uuid } from 'uuid'
import { Categories } from '../../types/Categories'
import { CategoryContainer } from '@/src/styles/components/CategoryList'

interface CategoryListProps {
  categories: Categories[]
}

function CategoryList(props: CategoryListProps): JSX.Element {
  const { categories } = props

  return (
    <CategoryContainer>
      <div className='categoryContainer'>
        {categories.map((item) => (
          <CategoryCard
            key={uuid()}
            photo={item.photo}
            category={item.category}
          />
        ))}
      </div>
    </CategoryContainer>
  )
}

export default CategoryList
