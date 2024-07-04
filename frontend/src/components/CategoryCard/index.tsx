import Image from 'next/image'
import Link from 'next/link'
import { Card } from '../../styles/components/CategoryCard'

interface CategoryCardProps {
  category: string
  photo: string
}

function CategoryCard(props: CategoryCardProps): JSX.Element {
  const { photo, category } = props
  const trimmedName = category;

  return (
    <div className='categoryItem'>
      <Link href={`/catalog/${trimmedName}`}>
        <Card className='categoryCard'>
          {photo ? <Image className="image" src={photo} height={81} width={48} alt="category" /> : <h5>Nenhuma imagem encontrada</h5>}
        </Card>
      </Link>
      <div className="info">
        <h5>{category}</h5>
      </div>
    </div>
  )
}

export default CategoryCard
