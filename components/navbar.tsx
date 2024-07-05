import Image from "next/image"

export default async function Navbar({ text1, text2, text3, text4, language }: { text1: string, text2: string, text3: string, text4: string, language: string }) {
  return (
    <div className="flex lg:grid grid-cols-3 w-full">
      <div className="hidden lg:flex flex-row items-center gap-[20px]">
        {language == '🇫🇷 FR' ? <a href="/">{language}</a> : <a href="/en">{language}</a>}
        <a href="#timeline" className="hover:opacity-80 transition-opacity font-roboto">{text1}</a>
        <a href="#pricing" className="hover:opacity-80 transition-opacity font-roboto">{text2}</a>
        <a href="#faq" className="hover:opacity-80 transition-opacity font-roboto">{text3}</a>
      </div>
      <div className="flex m-auto items-center justify-center	">
        <Image width={500} height={500} className="h-[30px] w-auto" src="/logo.png" alt="logo" />
      </div>
      <div className="hidden lg:flex items-center justify-end	">
        <a href="https://cal.com/robin-focus/offre-illimitee" target="_blank" className="px-8 py-4 border border-light-tertiary hover:border-tertiary transition-colors	 bg-light-secondary rounded-lg text-center font-roboto">{text4}</a>
      </div>
    </div>
  )
}
