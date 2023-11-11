import DashboardLayout from "@/pages/dashboard/layout";
import { ReactNode, useState } from "react";
import Head from "next/head";
import CardPanel from "@/pages/dashboard/report/statistic/CardPanel";

const appName = process.env.NEXT_PUBLIC_APP_NAME;

export default function Statistic() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Head>
        <title>{`Statistic - ${appName}`}</title>
      </Head>

      <CardPanel loading={loading}/>
    </>
  )
}

Statistic.getLayout = (page: ReactNode) => (
  <DashboardLayout>{page}</DashboardLayout>
)