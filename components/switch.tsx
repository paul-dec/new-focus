"use client";

import { useEffect } from "react";
import RowUGC from "./row-ugc";
import RowMotion from "./row-motion";
import RowVisuel from "./row-visuel";

export default async function Switch() {
  return (
    <div className="flex flex-col justify-center items-center gap-20 py-24 lg:py-36 max-w-5xl">
      <div className="flex flex-col sm:flex-row gap-20 xl:translate-x-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-6xl font-black">Motion design</h3>
          <p className="text-2xl font-bold font-roboto">Des animations sur mesure et adaptées à votre image de marque</p>
          <p className="font-medium font-roboto">En partant de vos ressources, nous créons des vidéos personnalisées conçues pour exceller dans vos campagnes médias.</p>
          <a href="https://cal.com/robin-focus/offre-illimitee" target="_blank" className="flex w-fit mt-4 px-8 py-4 bg-white rounded-lg text-black font-bold hover:scale-105 transition-transform uppercase">En savoir plus</a>
        </div>
        <video width="500" height="500" className="flex w-96 h-auto rounded-lg" loop autoPlay muted>
          <source src="/vid_motion.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-col-reverse sm:flex-row gap-20 xl:-translate-x-10">
        <video width="500" height="500" className="flex w-96 h-auto rounded-lg" loop autoPlay muted>
          <source src="/vid_ugc.mp4" type="video/mp4" />
        </video>
        <div className="flex flex-col gap-4">
          <h3 className="text-6xl font-black">Acting</h3>
          <p className="text-2xl font-bold font-roboto">Des vidéos avec acteurs pour faire exploser vos performances</p>
          <p className="font-medium font-roboto">Pour un rendu optimal, nous activons des acteurs qui ont l&apos;habitude de réaliser des vidéos publicitaires dédiées aux réseaux sociaux (UGC, Unboxing, Haul, Trends TikTok)</p>
          <a href="https://cal.com/robin-focus/offre-illimitee" target="_blank" className="flex w-fit mt-4 px-8 py-4 bg-white rounded-lg text-black font-bold hover:scale-105 transition-transform uppercase">En savoir plus</a>
        </div>
      </div>
    </div>
  )
}