export default async function Navbar() {
  return (
    <div className="flex lg:grid grid-cols-3 w-full">
      <div className="hidden lg:flex flex-row items-center gap-[20px]">
        <a>Comment ça marche ?</a>
        <a>Tarification</a>
        <a>FAQ</a>
      </div>
      <div className="flex m-auto items-center justify-center	">
        <img className="h-[30px]" src="/logo.png" alt="logo" />
      </div>
      <div className="hidden lg:flex items-center justify-end	">
        <a className="px-8 py-4 border border-light-tertiary bg-light-secondary rounded-lg text-center">Cliquer pour réserver un appel</a>
      </div>
    </div>
  )
}
