import Card from './Card'

export default async function VenueCatalog({ venuesJson }: { venuesJson: Promise<VenueJson> }) {
  const venuesJsonReady = await venuesJson

  return (
    <div className="p-8">
      <p className="mb-4 font-bold">Explore {venuesJsonReady.count} venues in our catalog</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {venuesJsonReady.data.map((venue: VenueItem) => (
          <Card key={venue.id} vid={venue.id} imgSrc={venue.picture} venueName={venue.name} />
        ))}
      </div>
    </div>
  )
}
