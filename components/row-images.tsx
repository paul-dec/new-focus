import Image from "next/image"

export default async function RowImages() {
  return (
    <div className="flex w-full overflow-hidden py-4">
      <div className="flex flex-row gap-10 animate-infinite-scroll">
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/visuel/1.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/visuel/2.png" alt="logo" />
        <video width="500" height="500" className="flex w-96 h-96 rounded-lg shadow-white-img" loop autoPlay muted>
          <source src="/Motion/1.mp4" type="video/mp4" />
        </video>
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/visuel/4.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/visuel/5.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/visuel/6.png" alt="logo" />
        <video width="500" height="500" className="flex w-96 h-96 rounded-lg shadow-white-img" loop autoPlay muted>
          <source src="/UGC/1.mp4" type="video/mp4" />
        </video>
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/visuel/7.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/visuel/1.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/visuel/2.png" alt="logo" />
        <video width="500" height="500" className="flex w-96 h-96 rounded-lg shadow-white-img" loop autoPlay muted>
          <source src="/Motion/1.mp4" type="video/mp4" />
        </video>
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/visuel/4.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/visuel/5.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/visuel/6.png" alt="logo" />
        <video width="500" height="500" className="flex w-96 h-96 rounded-lg shadow-white-img" loop autoPlay muted>
          <source src="/UGC/1.mp4" type="video/mp4" />
        </video>
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/visuel/7.png" alt="logo" />
      </div>
    </div>
  )
}