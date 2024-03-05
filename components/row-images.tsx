
export default async function Rowimgs() {
  return (
    <div className="relative flex w-screen overflow-hidden py-4">
      <div className="absolute w-full h-full bg-fade z-10"></div>
      <div className="flex flex-row gap-10 animate-infinite-scroll-mobile lg:animate-infinite-scroll">
        <img className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/1.png" alt="logo" />
        <img className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/2.png" alt="logo" />
        <video width="500" height="500" className="flex w-fit h-64 lg:h-96 rounded-lg" playsInline preload="auto" loop autoPlay muted>
          <source src="/Motion/1.mp4" type="video/mp4" />
        </video>
        <img className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/4.png" alt="logo" />
        <img className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/5.png" alt="logo" />
        <img className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/6.png" alt="logo" />
        <video width="500" height="500" className="flex w-fit h-64 lg:h-96 rounded-lg" playsInline preload="auto" loop autoPlay muted>
          <source src="/UGC/1.mp4" type="video/mp4" />
        </video>
        <img className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/7.png" alt="logo" />
        <img className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/1.png" alt="logo" />
        <img className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/2.png" alt="logo" />
        <video width="500" height="500" className="flex w-fit h-64 lg:h-96 rounded-lg" playsInline preload="auto" loop autoPlay muted>
          <source src="/Motion/1.mp4" type="video/mp4" />
        </video>
        <img className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/4.png" alt="logo" />
        <img className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/5.png" alt="logo" />
        <img className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/6.png" alt="logo" />
        <video width="500" height="500" className="flex w-fit h-64 lg:h-96 rounded-lg" playsInline preload="auto" loop autoPlay muted>
          <source src="/UGC/1.mp4" type="video/mp4" />
        </video>
        <img className="flex w-fit h-64 lg:h-96 rounded-lg" src="/Visuel/7.png" alt="logo" />
      </div>
    </div>
  )
}
