import DashboardLayout from "@/pages/dashboard/layout";
import { ReactNode } from "react";
import Head from "next/head";

const appName = process.env.NEXT_PUBLIC_APP_NAME;

export default function Statistic(){
  return (
    <>
      <Head>
        <title>{`Statistic - ${appName}`}</title>
      </Head>
      <h1>Hi gaes</h1>
    </>
  )
}

Statistic.getLayout = (page: ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
)