export default async function Header() {
  return (
    <div className="flex flex-col justify-center gap-10 lg:gap-20 py-24 lg:py-36">
      <h1 className="text-center text-4xl lg:text-6xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit nam tristique.</h1>
      <h2 className="text-center text-xl font-medium opacity-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Curabitur ullamcorper interdum massa, in aliquet est.</h2>
      <a className="flex m-auto px-8 py-4 bg-white rounded-lg text-black font-bold border border-light-tertiary">Commencer maintenant</a>
    </div>
  )
}
