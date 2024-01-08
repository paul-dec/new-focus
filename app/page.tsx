import BottomBar from '@/components/bottombar'
import Brands from '@/components/brands'
import Faq from '@/components/faq'
import Header from '@/components/header'
import Navbar from '@/components/navbar'
import Pricing from '@/components/pricing'
import RowImages from '@/components/row-images'
import Start from '@/components/start'
import Switch from '@/components/switch'
import Timeline from '@/components/timeline'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 lg:p-10">
      <Navbar />
      <Header />
      <div className='mb-24 lg:mb-36'>
        <RowImages />
      </div>
      <Brands />
      <Timeline />
      <Switch />
      <Pricing />
      <Faq />
      <Start />
      <BottomBar />
    </main>
  )
}
