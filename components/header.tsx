export default async function Header() {
  return (
    <div className="flex flex-col justify-center gap-10 lg:gap-20 py-24 lg:py-36">
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-4xl lg:text-6xl font-bold">Du contenu (en illimité) pour</h1>
        <div className="flex flex-col justify-center items-center relative h-[80px] lg:h-[120px] overflow-hidden	">
          <h1 className="top-[-1px] absolute text-center text-4xl lg:text-6xl font-bold leading-[40px] lg:leading-[60px] animate-header-loop-mobile lg:animate-header-loop"><p className="text-primary">faire exploser vos<br/>réseaux sociaux</p>sur-performer en<br/>campagne publicitaire<br/><p className="text-primary">alimenter votre<br/>site</p>créer du contenu<br/>en masse<br/><p className="text-primary">faire exploser vos<br/>réseaux sociaux</p></h1>
        </div>
      </div>
      <h2 className="text-center text-xl font-medium opacity-50">Faites autant de requêtes que vous le souhaitez :<br />Motion design, visuels, montage vidéo, acting UGC<br /><br />Livraison en 72h</h2>
      <a href="#pricing" className="flex m-auto px-8 py-4 bg-white rounded-lg text-black font-bold border border-light-tertiary">Voir les abonnements</a>
    </div>
  )
}
