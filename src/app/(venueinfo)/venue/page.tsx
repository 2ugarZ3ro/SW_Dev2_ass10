import { Suspense } from 'react'
import { LinearProgress } from '@mui/material'
import getVenues from '@/libs/getVenues'
import VenueCatalog from '@/components/VenueCatalog'

export default function VenuePage() {
  const venues = getVenues()

  return (
    <main>
      <Suspense fallback={<LinearProgress />}>
        <VenueCatalog venuesJson={venues} />
      </Suspense>
    </main>
  )
}
