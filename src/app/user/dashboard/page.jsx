import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async() => {
  const user = await authUserSession()

  return (
    <div className='mt-8 text-color-primary flex flex-col justify-center items-center'>
      <h5 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h5>
      <Image src={user?.image} alt="..." width={250} height={250} className="rounded" />
      <div className="flex flex-wrap gap-4 py-8">
        <Link href="/user/dashboard/collection" className="bg-color-accent text-color-primary font-bold py-4 px-4 text-xl rounded">My Collection</Link>
        <Link href="/user/dashboard/comment" className="bg-color-accent text-color-primary font-bold py-4 px-4 text-xl rounded">My Comment</Link>
      </div>
    </div>
  )
}

export default Page