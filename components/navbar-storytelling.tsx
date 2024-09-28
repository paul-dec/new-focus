import Image from "next/image"

export default async function NavbarStorytelling() {
  return (
    <div className="flex lg:grid grid-cols-3 w-full">
      <div className="hidden lg:flex flex-row items-center gap-[20px]">
      </div>
      <a href="/" className="flex m-auto items-center justify-center	">
        <Image width={500} height={500} className="h-[30px] w-auto" src="/logo.png" alt="logo" />
      </a>
      <div className="hidden lg:flex items-center justify-end	">
        <a href="https://cal.com/robin-focus/book-a-call" target="_blank" className="px-8 py-4 border border-light-tertiary hover:border-tertiary transition-colors	 bg-light-secondary rounded-lg text-center font-roboto">Cliquer pour réserver un appel</a>
      </div>
    </div>
  )
}
