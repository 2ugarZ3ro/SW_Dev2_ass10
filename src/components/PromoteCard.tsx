'use client'

import { useState } from 'react'
import VideoPlayer from './VideoPlayer'
import { useWindowListener } from '@/hooks/useWindowListener'

export default function PromoteCard() {
  const [playing, setPlaying] = useState(true)

  useWindowListener('contextmenu', (e) => { e.preventDefault() })

  return (
    <div className="w-full shadow-lg bg-gray-200 flex flex-row">
      <VideoPlayer vdoSrc="/vdo/venue.mp4" isPlaying={playing} />
      <div className="m-5 text-black">
        Book your venue today.
        <button
          className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 mt-3 text-white shadow-sm"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  )
}
