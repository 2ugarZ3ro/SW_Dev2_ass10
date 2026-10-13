import Image from 'next/image'
import Link from 'next/link'
import Rating from '@mui/material/Rating'
import InteractiveCard from './InteractiveCard'

interface CardProps {
  vid: string
  imgSrc: string
  venueName: string
  rating?: number
  onRatingChange?: (rating: number) => void
}

export default function Card({ vid, imgSrc, venueName, rating, onRatingChange }: CardProps) {
  return (
    <InteractiveCard>
      <div className="overflow-hidden rounded-lg">
        <Link href={`/venue/${vid}`}>
          <Image
            src={imgSrc}
            alt={venueName}
            width={400}
            height={300}
            className="w-full object-cover"
          />
          <p className="px-4 pt-4 text-lg font-semibold text-black">{venueName}</p>
        </Link>
        {rating !== undefined && (
          <div className="px-4 pb-4">
            <Rating
              id={`${venueName} Rating`}
              name={`${venueName} Rating`}
              data-testid={`${venueName} Rating`}
              value={rating}
              onChange={(_event, newValue) => onRatingChange?.(newValue ?? 0)}
            />
          </div>
        )}
      </div>
    </InteractiveCard>
  )
}
