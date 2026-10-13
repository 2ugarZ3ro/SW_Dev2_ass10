'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'

export default function Banner() {
  const covers = ['/img/cover.jpg', '/img/cover2.jpg', '/img/cover3.jpg', '/img/cover4.jpg']
  const [index, setIndex] = useState(0)
  const router = useRouter()
  const { data: session } = useSession()

  return (
    <div
      className="relative w-full h-[400px] cursor-pointer"
      onClick={() => setIndex((index + 1) % covers.length)}
    >
      <Image
        src={covers[index]}
        alt="cover"
        fill={true}
        priority
        className="object-cover"
      />
      {session ? (
        <div className="absolute top-4 right-4 bg-white text-cyan-700 font-semibold px-4 py-2 rounded">
          Welcome {session.user?.name}
        </div>
      ) : null}
      <button
        className="absolute bottom-4 right-4 bg-white text-cyan-700 border border-cyan-700 font-semibold px-4 py-2 rounded hover:bg-cyan-700 hover:text-white"
        onClick={(e) => {
          e.stopPropagation()
          router.push('/venue')
        }}
      >
        Select Venue
      </button>
    </div>
  )
}
