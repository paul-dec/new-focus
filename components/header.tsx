export default async function Header() {
  return (
    <div className="flex flex-col justify-center gap-10 lg:gap-20 py-24 lg:py-36">
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-2xl lg:text-6xl font-bold uppercase">Du contenu (en illimité) pour</h1>
        <div className="flex flex-col justify-center items-center relative h-[60px] lg:h-[140px] overflow-hidden	">
          <h1 className="top-[-1px] absolute text-center text-2xl lg:text-6xl font-bold leading-[30px] lg:leading-[70px] uppercase animate-header-loop-mobile lg:animate-header-loop"><p className="text-primary">faire&nbsp;exploser&nbsp;vos<br/>réseaux&nbsp;sociaux</p>sur-performer&nbsp;en<br/>campagne&nbsp;ads<br/><p className="text-primary">alimenter&nbsp;votre<br/>site</p>créer&nbsp;du&nbsp;contenu<br/>en&nbsp;masse<br/><p className="text-primary">faire&nbsp;exploser&nbsp;vos<br/>réseaux&nbsp;sociaux</p></h1>
        </div>
      </div>
      <h2 className="text-center text-xl font-medium opacity-50 font-roboto">Faites autant de requêtes que vous le souhaitez :<br />Motion design, visuels, montage vidéo, acting UGC<br /><br />Livraison en 72h</h2>
      <a href="#pricing" className="flex m-auto px-8 py-4 bg-white hover:scale-110 transition-transform	rounded-lg text-black font-bold border border-light-tertiary uppercase">Voir les abonnements</a>
    </div>
  )
}
