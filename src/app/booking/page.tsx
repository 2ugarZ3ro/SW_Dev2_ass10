import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'
import getUserProfile from '@/libs/getUserProfile'
import DateReserve from '@/components/DateReserve'

export default async function BookingPage() {
  const session = await getServerSession(authOptions)
  if (!session || !session.user.token) return null

  const profile = await getUserProfile(session.user.token)
  const user = profile.data

  return (
    <main className="p-8 max-w-md mx-auto">
      <table className="mb-8 text-left">
        <tbody>
          <tr>
            <td className="pr-6 font-semibold">Name</td>
            <td>{user.name}</td>
          </tr>
          <tr>
            <td className="pr-6 font-semibold">Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td className="pr-6 font-semibold">Tel.</td>
            <td>{user.tel}</td>
          </tr>
          <tr>
            <td className="pr-6 font-semibold">Member Since</td>
            <td>{user.createdAt}</td>
          </tr>
        </tbody>
      </table>

      <h1 className="text-2xl font-bold mb-6">Book a Venue</h1>
      <form>
        <DateReserve />
        <div className="mt-6">
          <button
            type="submit"
            name="Book Venue"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Book Venue
          </button>
        </div>
      </form>
    </main>
  )
}
