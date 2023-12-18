import IconCheckmark from "./icons/checkmark";
import IconCheckmarkPurple from "./icons/checkmark_purple";
import IconStars from "./icons/stars";

export default async function Pricing() {
  return (
    <div id="pricing" className="flex flex-col justify-center items-center gap-20 py-24 lg:py-36">
      <p className="opacity-50 uppercase font-medium mb-[-80px]">Tarification</p>
      <h2 className="text-center text-xl font-medium">Utilisez notre service pour produire du contenu en masse.</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-20 lg:gap-10">
        <div className="flex flex-col px-10 py-10 gap-2 max-w-[500px] w-full bg-light-secondary rounded-xl">
          <p className="text-2xl font-bold">Basic</p>
          <p className="text-4xl font-black">4900€/mois</p>
          <p className="opacity-50">Pause ou annulation à tout moment</p>
          <p className="text-lg font-medium">2 requêtes à la fois</p>
          <div className="h-[1px] w-full bg-tertiary opacity-10 my-8"></div>
          <p className="font-bold text-xl">Inclus :</p>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium">Graphisme / Montage / Motion Design en illimité</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium">Deux requêtes à la fois</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium">Temps moyen de traitement de 72h</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium">Retours illimités</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium">Nombre d’utilisateurs et de marques illimités</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium">Pause ou arrêt de l’abonnement à tout moment</p>
          </div>
          <a href="https://cal.com/robin-focus/offre-illimitee" target="_blank" className="flex w-fit mt-4 px-8 py-4 bg-white rounded-lg text-black font-bold">Réserver un appel</a>
        </div>
        <div className="flex flex-col px-10 py-10 gap-2 max-w-[500px] w-full bg-tertiary rounded-xl">
          <div className="text-2xl font-bold relative text-primary">
            Pro
            <div className="absolute top-[-4px] left-[40px]">
              <IconStars />
            </div>
          </div>
          <p className="text-4xl font-black text-primary">6990€/mois</p>
          <p className="opacity-50 text-primary">Pause ou annulation à tout moment</p>
          <p className="text-lg font-medium text-primary">5 requêtes (avec de l’UGC)</p>
          <div className="h-[1px] w-full bg-primary opacity-10 my-8"></div>
          <p className="font-bold text-xl text-primary">Inclus :</p>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary">Graphisme / Montage / Motion Design / UGC en illimité</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary">Cinq requêtes à la fois</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary">Temps moyen de traitement de 72h</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary">Retours illimités</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary">Nombre d’utilisateurs et de marques illimités</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary">Pause ou arrêt de l’abonnement à tout moment</p>
          </div>
          <a href="https://cal.com/robin-focus/offre-illimitee" target="_blank" className="flex w-fit mt-4 px-8 py-4 bg-primary rounded-lg text-tertiary font-bold">Réserver un appel</a>
        </div>
      </div>
    </div>
  )
}