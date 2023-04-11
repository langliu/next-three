import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'
import styles from './page.module.css'

interface Props {
  image: string
  href: string
  title: string
  alt?: string
}

const ExampleCard: FC<Props> = ({
  image,
  href,
  title,
  alt = ''
}) => {
  return (
    <div className={styles.example}>
      <Link href={href}>
        <Image
          className={styles.image}
          src={image}
          alt={alt}
          width={376}
          height={197}
        />
      </Link>
      <span style={{ fontWeight: 'bold' }}>{title}</span>
    </div>
  )
}

export default ExampleCard
