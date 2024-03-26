import Image from "next/image";

export default async function BottomBar({text1, text2, text3}: {text1: string, text2: string, text3: string}) {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between border-t-2 border-light-tertiary pt-10 gap-10 mb-4 lg:mb-0">
      <div className="flex flex-col gap-2 items-center lg:items-start">
        <Image width={500} height={500} className="h-[30px] w-auto" src="/logo.png" alt="logo" />
        <a className="font-medium">{text1}</a>
        <a href="legal" className="font-medium underline">{text3}</a>
        <a className="text-primary font-medium">{text2}</a>
      </div>
    </div>
  )
}