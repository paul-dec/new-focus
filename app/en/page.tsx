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
      <Navbar text1='How does it work?' text2='Pricing' text3='FAQ' text4='Click to book a call' language='🇫🇷 FR' />
      <Header text1='The creative agency' text2='by ' text3='subscription' text4='' text5='Unlimited' text6='content to' text7='outperform' text8='on social networks and in advertising campaigns.' text9='View subscriptions' />
      <div className='mb-24 lg:mb-36'>
        <RowImages />
      </div>
      <Brands />
      <Timeline text1='How does it work?' text2='Subscription' text3='Choose one of our two plans and make as many requests as you like.' text4='Production' text5='We process your requests and deliver content within 72 hours on average.' text6='Unlimited&nbsp;returns' text7='Until you&apos;re 100% satisfied.' />
      <Switch text1='Motion design' text2='Tailor-made animations adapted to your brand image' text3='Starting with your resources, we create customized videos designed to excel in your media campaigns.' text4='Find out more' text5='Acting' text6='Videos with actors to boost your performance' text7='For optimal rendering, we activate actors who are used to producing advertising videos dedicated to social networks (UGC, Unboxing, Haul, Trends TikTok).' text8='Find out more' />
      <Pricing text1='Pricing' text2='Use our service to mass-produce content.' text3='Basic' text4='4900€/month' text5='Pause or cancel at any time' text6='2 requests at a time' text7='Includes :' text8='Unlimited graphics / editing / motion design' text9='Two requests at once' text10='Average processing time of 72 hours' text11='Unlimited returns' text12='Unlimited number of users and brands' text13='Pause or stop subscription at any time' text14='Book a call' text15='Pro' text16='7900€/month' text17='Pause or cancel at any time' text18='3 requests (with UGC)' text19='Includes :' text20='Graphics / Editing / Motion Design / UGC unlimited' text21='Five requests at a time' text22='Average processing time of 72 hours' text23='Unlimited returns' text24='Unlimited number of users and brands' text25='Pause or stop subscription at any time' text26='Book a call' />
      <Faq text1='FAQ' text2='When will I receive my content?' text3='On average, we process all requests within 72 hours and keep you informed. For more complex requests, such as UGC, lead times are slightly extended to allow the actor to shoot in good conditions.' text4='How do I make a request for new content?' text5='We use Notion to process your requests. You&apos;re free to write your brief directly on Notion or send us a Loom, a Google Doc, or any other medium that helps us understand your ideas.' text6='Why pause my subscription?' text7='Not every month is the same for your business: we&apos;ve made it possible to pause your subscription and reactivate it at any time.' text8='Why not hire a full-time creative team?' text9='We put all our expertise in graphic design, video editing and motion design at your disposal, as well as over 100 actors. Hiring a complete creative team (a graphic designer, a motion designer, a project manager...) will be more costly and difficult to manage: we&apos;ll take care of all that for you!' />
      <Start text1='Book a call' text2='20mn to meet our teams' />
      <BottomBar text1='A creative agency in Nice, France' text2='© 2023 Focus' text3='Legal information' />
    </main>
  )
}
