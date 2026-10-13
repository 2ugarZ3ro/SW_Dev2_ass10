import Image from 'next/image'
import getVenue from '@/libs/getVenue'

export default async function VenueDetailPage({ params }: { params: Promise<{ vid: string }> }) {
  const { vid } = await params
  const venueJson = await getVenue(vid)
  const venue: VenueItem = venueJson.data

  return (
    <main className="p-8">
      <h1 className="text-xl font-semibold text-center mb-4">{venue.name}</h1>
      <div className="flex flex-row gap-6">
        <Image
          src={venue.picture}
          alt={venue.name}
          width={300}
          height={200}
          className="rounded-lg w-[30%]"
        />
        <div className="text-md text-left">
          <div>Name: {venue.name}</div>
          <div>Address: {venue.address}</div>
          <div>District: {venue.district}</div>
          <div>Province: {venue.province}</div>
          <div>Postal Code: {venue.postalcode}</div>
          <div>Tel: {venue.tel}</div>
          <div>Daily Rate: {venue.dailyrate}</div>
        </div>
      </div>
    </main>
  )
}
