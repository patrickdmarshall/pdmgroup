"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function CreditGuideAccessPage() {
  const router = useRouter()

  useEffect(() => {
    // Automatically redirect to the credit guide page
    router.push("/resources/credit-guide")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Redirecting to Credit Building Guide...</p>
    </div>
  )
}
