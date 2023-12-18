export default async function Header() {
  return (
    <div className="flex flex-col justify-center gap-10 lg:gap-20 py-24 lg:py-36">
      <h1 className="text-center text-4xl lg:text-6xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit nam tristique.</h1>
      <h2 className="text-center text-xl font-medium opacity-50">Faites autant de requêtes que vous le souhaitez :<br/>Motion design, visuels, montage vidéo, acting UGC<br/><br/>Livraison en 72h</h2>
      <a href="#pricing" className="flex m-auto px-8 py-4 bg-white rounded-lg text-black font-bold border border-light-tertiary">Voir les abonnements</a>
    </div>
  )
}
