import Image from "next/image"

export default async function Navbar() {
  return (
    <div className="flex lg:grid grid-cols-3 w-full">
      <div className="hidden lg:flex flex-row items-center gap-[20px]">
        <a href="#timeline" className="hover:opacity-80 transition-opacity">Comment ça marche&nbsp;?</a>
        <a href="#pricing" className="hover:opacity-80 transition-opacity">Tarification</a>
        <a href="#faq" className="hover:opacity-80 transition-opacity">FAQ</a>
      </div>
      <div className="flex m-auto items-center justify-center	">
        <Image width={500} height={500} className="h-[30px] w-auto" src="/logo.png" alt="logo" />
      </div>
      <div className="hidden lg:flex items-center justify-end	">
        <a href="https://cal.com/robin-focus/offre-illimitee" target="_blank" className="px-8 py-4 border border-light-tertiary hover:border-tertiary transition-colors	 bg-light-secondary rounded-lg text-center">Cliquer pour réserver un appel</a>
      </div>
    </div>
  )
}
