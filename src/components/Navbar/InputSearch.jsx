"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter()

  const handleSearch = (event) => {
    const keyword = searchRef.current.value

    if(!keyword || keyword.trim() == "") return

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault()
      router.push(`/search/${keyword}`)
    }
  }

  return (
    <div className="relative">
      <input ref={searchRef} onKeyDown={handleSearch} placeholder="cari anime...." className="w-full p-2 rounded" />
      <button onClick={handleSearch} className="absolute top-2 end-2">
        <MagnifyingGlass size={24} />
      </button>
    </div>
  )
}

export default InputSearch