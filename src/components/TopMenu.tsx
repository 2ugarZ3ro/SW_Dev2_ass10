import Image from 'next/image'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions'

export default async function TopMenu() {
  const session = await getServerSession(authOptions)

  return (
    <div className="h-[50px] w-full bg-white border-b border-gray-300 flex flex-row items-center justify-between px-4">
      <div className="flex flex-row items-center gap-4">
        {session ? (
          <Link href="/api/auth/signout" className="text-cyan-700! font-semibold">
            Sign-Out of {session.user?.name}
          </Link>
        ) : (
          <Link href="/api/auth/signin" className="text-cyan-700! font-semibold">
            Sign-In
          </Link>
        )}
      </div>
      <div className="flex flex-row items-center gap-4">
        <Link href="/booking" className="text-gray-700! font-semibold">
          Booking
        </Link>
        <Link href="/">
          <Image src="/img/logo.svg" alt="logo" width={40} height={40} />
        </Link>
      </div>
    </div>
  )
}
