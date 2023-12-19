import Image from "next/image"

export default async function RowImages() {
  return (
    <div className="relative flex w-screen overflow-hidden py-4">
      <div className="absolute w-full h-full bg-fade z-10"></div>
      <div className="flex flex-row gap-10 animate-infinite-scroll">
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/1.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/2.png" alt="logo" />
        <video width="500" height="500" className="flex w-96 h-96 rounded-lg shadow-white-img" loop autoPlay muted>
          <source src="/Motion/1.mp4" type="video/mp4" />
        </video>
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/4.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/5.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/6.png" alt="logo" />
        <video width="500" height="500" className="flex w-96 h-96 rounded-lg shadow-white-img" loop autoPlay muted>
          <source src="/UGC/1.mp4" type="video/mp4" />
        </video>
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/7.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/1.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/2.png" alt="logo" />
        <video width="500" height="500" className="flex w-96 h-96 rounded-lg shadow-white-img" loop autoPlay muted>
          <source src="/Motion/1.mp4" type="video/mp4" />
        </video>
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/4.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/5.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/6.png" alt="logo" />
        <video width="500" height="500" className="flex w-96 h-96 rounded-lg shadow-white-img" loop autoPlay muted>
          <source src="/UGC/1.mp4" type="video/mp4" />
        </video>
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/Visuel/7.png" alt="logo" />
      </div>
    </div>
  )
}
