import Image from "next/image"

export default async function RowImages() {
  return (
    <div className="relative flex w-screen overflow-hidden py-4">
      <div className="absolute w-full h-full bg-fade z-10"></div>
      <div className="flex flex-row gap-10 animate-infinite-scroll-mobile lg:animate-infinite-scroll">
        <Image width={500} height={500} className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/1.png" alt="logo" />
        <Image width={500} height={500} className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/2.png" alt="logo" />
        <video width="500" height="500" className="flex w-fit h-64 lg:h-96 rounded-lg" loop autoPlay muted>
          <source src="https://res.cloudinary.com/dgsxyadyt/video/upload/v1709635012/a1ghb0f4q3usakwa0fjm.mp4" type="video/mp4" />
        </video>
        <Image width={500} height={500} className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/4.png" alt="logo" />
        <Image width={500} height={500} className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/5.png" alt="logo" />
        <Image width={500} height={500} className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/6.png" alt="logo" />
        <video width="500" height="500" className="flex w-fit h-64 lg:h-96 rounded-lg" loop autoPlay muted>
          <source src="https://res.cloudinary.com/dgsxyadyt/video/upload/v1709635005/ykh0gpxyd09iwybgoqhn.mp4" type="video/mp4" />
        </video>
        <Image width={500} height={500} className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/7.png" alt="logo" />
        <Image width={500} height={500} className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/1.png" alt="logo" />
        <Image width={500} height={500} className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/2.png" alt="logo" />
        <video width="500" height="500" className="flex w-fit h-64 lg:h-96 rounded-lg" loop autoPlay muted>
          <source src="https://res.cloudinary.com/dgsxyadyt/video/upload/v1709635012/a1ghb0f4q3usakwa0fjm.mp4" type="video/mp4" />
        </video>
        <Image width={500} height={500} className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/4.png" alt="logo" />
        <Image width={500} height={500} className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/5.png" alt="logo" />
        <Image width={500} height={500} className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/6.png" alt="logo" />
        <video width="500" height="500" className="flex w-fit h-64 lg:h-96 rounded-lg" loop autoPlay muted>
          <source src="https://res.cloudinary.com/dgsxyadyt/video/upload/v1709635005/ykh0gpxyd09iwybgoqhn.mp4" type="video/mp4" />
        </video>
        <Image width={500} height={500} className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/7.png" alt="logo" />
      </div>
    </div>
  )
}
