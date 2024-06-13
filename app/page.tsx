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
      <Navbar text1='Comment ça marche&nbsp;?' text2='Tarification' text3='FAQ' text4='Cliquer pour réserver un appel' />
      <Header text1='L’agence créative' text2='par ' text3='abonnement' text4='Du contenu' text5='en illimité' text6='pour' text7='sur-performer' text8='sur les réseaux sociaux et en campagne publicitaire.' text9='Voir les abonnements' />
      <div className='mb-24 lg:mb-36'>
        <RowImages />
      </div>
      <Brands />
      <Timeline text1='Comment ça marche&nbsp;?' text2='Inscription' text3='Choisissez un de nos deux plans et faites autant de requêtes que vous le souhaitez.' text4='Production' text5='Nous traitons vos demandes pour vous livrer les contenus en 72h en moyenne.' text6='Retours&nbsp;illimités' text7='Jusqu’à vous satisfaire à 100%.' />
      <Switch text1='Motion design' text2='Des animations sur mesure et adaptées à votre image de marque' text3='En partant de vos ressources, nous créons des vidéos personnalisées conçues pour exceller dans vos campagnes médias.' text4='En savoir plus' text5='Acting' text6='Des vidéos avec acteurs pour faire exploser vos performances' text7='Pour un rendu optimal, nous activons des acteurs qui ont l&apos;habitude de réaliser des vidéos publicitaires dédiées aux réseaux sociaux (UGC, Unboxing, Haul, Trends TikTok)' text8='En savoir plus' />
      <Pricing text1='Tarification' text2='Utilisez notre service pour produire du contenu en masse.' text3='Basic' text4='4900€/mois' text5='Pause ou annulation à tout moment' text6='2 requêtes à la fois' text7='Inclus :' text8='Graphisme / Montage / Motion Design en illimité' text9='Deux requêtes à la fois' text10='Temps moyen de traitement de 72h' text11='Retours illimités' text12='Nombre d’utilisateurs et de marques illimités' text13='Pause ou arrêt de l’abonnement à tout moment' text14='Réserver un appel' text15='Pro' text16='7900€/mois' text17='Pause ou annulation à tout moment' text18='3 requêtes (avec de l’UGC)' text19='Inclus :' text20='Graphisme / Montage / Motion Design / UGC en illimité' text21='Trois requêtes à la fois' text22='Temps moyen de traitement de 72h' text23='Retours illimités' text24='Nombre d’utilisateurs et de marques illimités' text25='Pause ou arrêt de l’abonnement à tout moment' text26='Réserver un appel' />
      <Faq text1='FAQ' text2='Quand vais-je recevoir mes contenus&nbsp;?' text3='Nous traitons en moyenne toutes les demandes en 72h en vous tenant informé. Pour les demandes plus complexes comme les UGC, les délais sont légèrement allongés pour permettre à l’acteur de tourner dans de bonnes conditions.' text4='Comment faire une requête pour un nouveau contenu&nbsp;?' text5='Nous utilisons Notion pour traiter vos requêtes. Vous êtes libre d’écrire votre brief directement sur Notion ou de nous transmettre un Loom, un Google Doc, ou n’importe quel support qui nous aide à comprendre vos idées.' text6='Pourquoi mettre en pause mon abonnement&nbsp;?' text7='Tous les mois ne se ressemblent pas pour votre activité : nous avons mis en place la possibilité de mettre en pause votre abonnement et de le réactiver à tout moment.' text8='Pourquoi ne pas embaucher une équipe créative à temps plein&nbsp;?' text9='Nous mettons à votre disposition toute notre expertise en graphisme, montage vidéo, motion design, ainsi que plus de 100 acteurs. L&apos;embauche d&apos;une équipe créative complète (un graphiste, un motion designer, un chef de projet…) sera plus coûteuse et difficile à gérer : nous nous occupons de tout cela pour vous !' />
      <Start text1='Réserver un appel' text2='20mn pour rencontrer nos équipes' />
      <BottomBar text1='Une agence créative à Nice en France' text2='© 2023 Focus' text3='Mentions légales' />
    </main>
  )
}
