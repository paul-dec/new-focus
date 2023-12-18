import Image from "next/image"

export default async function Navbar() {
  return (
    <div className="flex lg:grid grid-cols-3 w-full">
      <div className="hidden lg:flex flex-row items-center gap-[20px]">
        <a href="#timeline">Comment ça marche ?</a>
        <a href="#pricing">Tarification</a>
        <a href="#faq">FAQ</a>
      </div>
      <div className="flex m-auto items-center justify-center	">
        <Image width={500} height={500} className="h-[30px] w-auto" src="/logo.png" alt="logo" />
      </div>
      <div className="hidden lg:flex items-center justify-end	">
        <a href="https://cal.com/robin-focus/offre-illimitee" target="_blank" className="px-8 py-4 border border-light-tertiary bg-light-secondary rounded-lg text-center">Cliquer pour réserver un appel</a>
      </div>
    </div>
  )
}