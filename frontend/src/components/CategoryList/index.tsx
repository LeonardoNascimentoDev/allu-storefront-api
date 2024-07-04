import CategoryCard from '../../components/CategoryCard'
import images from '../../utils/images'
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
        {categories.map((item, index) => (
          <CategoryCard
            key={uuid()} 
            photo={images[index]} 
            category={item.category}
          />
        ))}
      </div>
    </CategoryContainer>
  )
}

export default CategoryList
