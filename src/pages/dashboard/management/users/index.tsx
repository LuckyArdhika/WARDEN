import DashboardLayout from "@/pages/dashboard/layout"
import { ReactNode } from "react"
import Head from "next/head"

export default function Users(){

  return (
    <>
      <Head>
        <title>{`Statistic - ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
      </Head>
      <h1>This is user list</h1><a>Test link</a>
    </>
  )
}

Users.getLayout = (page: ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
)