export default async function RowMotion() {
  return (
    <div className="relative flex flex-col gap-10 w-screen overflow-hidden py-4">
      <div className="absolute w-full h-full bg-fade z-10"></div>
      <div className="flex flex-row gap-10 animate-infinite-scroll-reverse">
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/1.mp4" type="video/mp4" />
        </video>
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/2.mp4" type="video/mp4" />
        </video>
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/3.mp4" type="video/mp4" />
        </video>
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/4.mp4" type="video/mp4" />
        </video>
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/5.mp4" type="video/mp4" />
        </video>
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/6.mp4" type="video/mp4" />
        </video>
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/7.mp4" type="video/mp4" />
        </video>
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/8.mp4" type="video/mp4" />
        </video>
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/1.mp4" type="video/mp4" />
        </video>
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/2.mp4" type="video/mp4" />
        </video>
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/3.mp4" type="video/mp4" />
        </video>
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/4.mp4" type="video/mp4" />
        </video>
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/5.mp4" type="video/mp4" />
        </video>
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/6.mp4" type="video/mp4" />
        </video>
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/7.mp4" type="video/mp4" />
        </video>
        <video width="500" height="500" className="flex w-96 sm:h-[550px] h-96 rounded-lg" loop autoPlay muted>
          <source src="/Motion/8.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="flex flex-row gap-10 animate-infinite-scroll">
      </div>
    </div>
  )
}
