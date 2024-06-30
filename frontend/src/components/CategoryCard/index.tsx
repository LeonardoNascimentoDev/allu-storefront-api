import Image from 'next/image'
import Link from 'next/link'
import { Card } from '../../styles/components/CategoryCard'

interface CategoryCardProps {
  image: string
  name: string
}

function CategoryCard(props: CategoryCardProps): JSX.Element {
  const trimmedName = props.name.slice(0, -1);
  return (
    <Card>
      <Image className="image" src={props.image} height={700} width={1300} alt="category" />
      <Link href={`/category/${trimmedName}`}>
        <div className="info">
          <h2>{props.name}</h2>
          <p>Assine Agora!</p>
          </div>
      </Link>
    </Card>
  )
}

export default CategoryCard
