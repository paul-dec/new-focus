import Image from "next/image"

export default async function RowVisuel() {
  return (
    <div className="relative flex flex-col gap-10 w-screen overflow-hidden py-4">
      <div className="absolute w-full h-full bg-fade z-10"></div>
      <div className="flex flex-row gap-10 animate-infinite-scroll-reverse">
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/1.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/2.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/3.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/4.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/5.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/6.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/7.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/8.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/1.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/2.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/3.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/4.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/5.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/6.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/7.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/8.png" alt="logo" />
      </div>
      <div className="flex flex-row gap-10 animate-infinite-scroll">
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/9.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/10.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/11.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/12.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/13.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/14.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/15.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/9.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/10.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/11.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/12.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/13.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/14.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/15.png" alt="logo" />
      </div>
    </div>
  )
}
