import Image from "next/image";

export default async function BottomBar() {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between border-t-2 border-light-tertiary pt-10 gap-10 mb-4 lg:mb-0">
      <div className="flex flex-col gap-2 items-center lg:items-start">
        <Image width={500} height={500} className="h-[30px] w-auto" src="/logo.png" alt="logo" />
        <a className="font-medium">Une agence créative à Nice en France</a>
        <a className="text-primary font-medium">© 2023 Focus</a>
      </div>
    </div>
  )
}