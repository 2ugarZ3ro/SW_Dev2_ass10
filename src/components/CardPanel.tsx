'use client'

import { useReducer } from 'react'
import Card from '@/components/Card'

// mock venue data
const mockVenueRepo = [
  { vid: '001', name: 'The Bloom Pavilion', image: '/img/bloom.jpg' },
  { vid: '002', name: 'Spark Space', image: '/img/spark.jpg' },
  { vid: '003', name: 'The Grand Table', image: '/img/grandtable.jpg' },
]

type RatingAction =
  | { type: 'setRating'; venueName: string; rating: number }
  | { type: 'remove'; venueName: string }

function ratingsReducer(ratings: Map<string, number>, action: RatingAction) {
  const newRatings = new Map(ratings)
  if (action.type === 'setRating') {
    newRatings.set(action.venueName, action.rating)
  } else if (action.type === 'remove') {
    newRatings.delete(action.venueName)
  }
  return newRatings
}

const initialRatings = new Map(mockVenueRepo.map((venue) => [venue.name, 0]))

export default function CardPanel() {
  const [ratings, dispatch] = useReducer(ratingsReducer, initialRatings)

  return (
    <div className="p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockVenueRepo.map((venue) => (
          <Card
            key={venue.vid}
            vid={venue.vid}
            imgSrc={venue.image}
            venueName={venue.name}
            rating={ratings.get(venue.name) ?? 0}
            onRatingChange={(rating) =>
              dispatch({ type: 'setRating', venueName: venue.name, rating })
            }
          />
        ))}
      </div>

      <div className="mt-6">
        <p className="font-bold">Venue List with Ratings : {ratings.size}</p>
        {Array.from(ratings.entries()).map(([venueName, rating]) => (
          <p
            key={venueName}
            data-testid={venueName}
            onClick={() => dispatch({ type: 'remove', venueName })}
          >
            {venueName} Rating : {rating}
          </p>
        ))}
      </div>
    </div>
  )
}
