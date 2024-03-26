import BottomBar from "@/components/bottombar";
import NavbarStorytelling from "@/components/navbar-storytelling";
import Start from "@/components/start";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 lg:p-10 gap-10">
      <NavbarStorytelling />
      <div className="flex flex-col max-w-[800px] w-full mt-10">
        <h1 className="text-4xl font-black mb-2">Mentions légales</h1>
        <p className="font-medium font-roboto">Editeur du site<br />FOCUS SAS</p>
        <p className="font-medium font-roboto">Siège social : 455 promenade des anglais, 06200, Nice, France<br />RCS Nice B 908 457 559</p>
      </div>
      <div className="flex flex-col max-w-[800px] w-full">
        <p className="font-medium font-roboto">Nous proposons des vidéos publicitaires et du contenu qui captivent l&apos;attention de votre audience.</p>
        <p className="font-medium font-roboto">Nous travaillons en étroite collaboration avec nos clients pour créer des campagnes qui sont efficaces, qui engagent, et qui vous aident à atteindre vos objectifs de manière rapide et rentable.</p>
      </div>
      <div className="flex flex-col max-w-[800px] w-full">
        <h1 className="text-4xl font-black mb-2">Focus</h1>
        <p className="font-medium font-roboto">455 promenade des anglais</p>
        <p className="font-medium font-roboto">06200 Nice</p>
        <p className="font-medium font-roboto">contact@wearefocus.co</p>
      </div>
      <Start text1='Réserver un appel' text2='20mn pour rencontrer nos équipes' />
      <BottomBar text1='Une agence créative à Nice en France' text2='© 2023 Focus' text3="Mentions légales" />
    </main>
  )
}