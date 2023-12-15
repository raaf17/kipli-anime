import Link from "next/link"
import { authUserSession } from "@/libs/auth-libs"

const UserActionButton = async() => {
  const user = await authUserSession()
  const actionLabel = user ? "Sign Out" : "Sign In"
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin"

  return (
    <div className="flex justify-between gap-2">
      {user ? <Link href="/user/dashboard" className="py-1 pt-1 px-3 text-bold bg-color-primary text-color-dark inline-block rounded">Dashboard</Link> : null}
      <Link href={actionURL} className="bg-color-dark text-color-primary py-1 pt-1 px-12 inline-block rounded">{actionLabel}</Link>
    </div>
  )
}

export default UserActionButton