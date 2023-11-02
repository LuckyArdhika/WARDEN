import MiniVariantDrawer from '@/components/MiniVariantDrawer'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <MiniVariantDrawer>
    {children}
  </MiniVariantDrawer>
  )
}