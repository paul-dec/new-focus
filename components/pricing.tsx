import IconCheckmark from "./icons/checkmark";
import IconCheckmarkPurple from "./icons/checkmark_purple";
import IconStars from "./icons/stars";

export default async function Pricing() {
  return (
    <div id="pricing" className="flex flex-col justify-center items-center gap-20 py-24 lg:py-36">
      <p className="opacity-50 uppercase font-medium mb-[-80px]">Tarification</p>
      <h2 className="text-center text-xl font-medium font-roboto">Utilisez notre service pour produire du contenu en masse.</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-20 lg:gap-10">
        <div className="flex flex-col px-10 py-10 gap-2 max-w-[500px] w-full bg-light-secondary rounded-xl">
          <p className="text-2xl font-bold">Basic</p>
          <p className="text-4xl font-black">4900€/mois</p>
          <p className="opacity-50 font-roboto">Pause ou annulation à tout moment</p>
          <p className="text-lg font-medium font-roboto">2 requêtes à la fois</p>
          <div className="h-[1px] w-full bg-tertiary opacity-10 my-8"></div>
          <p className="font-bold text-xl font-roboto">Inclus :</p>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium font-roboto">Graphisme / Montage / Motion Design en illimité</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium font-roboto">Deux requêtes à la fois</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium font-roboto">Temps moyen de traitement de 72h</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium font-roboto">Retours illimités</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium font-roboto">Nombre d’utilisateurs et de marques illimités</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium font-roboto">Pause ou arrêt de l’abonnement à tout moment</p>
          </div>
          <a href="https://cal.com/robin-focus/offre-illimitee" target="_blank" className="flex w-fit mt-4 px-8 py-4 bg-white rounded-lg text-black font-bold hover:scale-105 transition-transform uppercase">Réserver un appel</a>
        </div>
        <div className="flex flex-col px-10 py-10 gap-2 max-w-[500px] w-full bg-tertiary rounded-xl">
          <div className="text-2xl font-bold relative text-primary">
            Pro
            <div className="absolute top-[-4px] left-[40px]">
              <IconStars />
            </div>
          </div>
          <p className="text-4xl font-black text-primary">6900€/mois</p>
          <p className="opacity-50 text-primary font-roboto">Pause ou annulation à tout moment</p>
          <p className="text-lg font-medium text-primary font-roboto">5 requêtes (avec de l’UGC)</p>
          <div className="h-[1px] w-full bg-primary opacity-10 my-8"></div>
          <p className="font-bold text-xl text-primary font-roboto">Inclus :</p>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary font-roboto">Graphisme / Montage / Motion Design / UGC en illimité</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary font-roboto">Cinq requêtes à la fois</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary font-roboto">Temps moyen de traitement de 72h</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary font-roboto">Retours illimités</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary font-roboto">Nombre d’utilisateurs et de marques illimités</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary font-roboto">Pause ou arrêt de l’abonnement à tout moment</p>
          </div>
          <a href="https://cal.com/robin-focus/offre-illimitee" target="_blank" className="flex w-fit mt-4 px-8 py-4 bg-primary rounded-lg text-tertiary font-bold hover:scale-105 transition-transform uppercase">Réserver un appel</a>
        </div>
      </div>
    </div>
  )
}