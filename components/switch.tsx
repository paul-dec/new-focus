export default async function Switch({ text1, text2, text3, text4, text5, text6, text7, text8 }: { text1: string, text2: string, text3: string, text4: string, text5: string, text6: string, text7: string, text8: string }) {
  return (
    <div className="flex flex-col justify-center items-center gap-20 py-24 lg:py-36 max-w-5xl">
      <div className="flex flex-col sm:flex-row gap-20 xl:translate-x-10">
        <div className="flex flex-col gap-4">
          <h3 className="text-6xl font-black">{text1}</h3>
          <p className="text-2xl font-bold font-roboto">{text2}</p>
          <p className="font-medium font-roboto">{text3}</p>
          <a href="https://cal.com/robin-focus/call" target="_blank" className="flex w-fit mt-4 px-8 py-4 bg-white rounded-lg text-black font-bold hover:scale-105 transition-transform uppercase">{text4}</a>
        </div>
        {/* <video width="500" height="500" className="flex w-96 h-auto rounded-lg" playsInline preload="auto" loop autoPlay muted>
          <source src="https://res.cloudinary.com/dgsxyadyt/video/upload/v1709635167/ewypqgqyjk4uwzyulurb.mp4" type="video/mp4" />
        </video> */}
        <video
          className="flex w-96 h-auto rounded-lg"
          src="vid_motion.mp4"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
        />
      </div>
      <div className="flex flex-col-reverse sm:flex-row gap-20 xl:-translate-x-10">
        {/* <video width="500" height="500" className="flex w-96 h-auto rounded-lg" playsInline preload="auto" loop autoPlay muted>
          <source src="https://res.cloudinary.com/dgsxyadyt/video/upload/v1709635167/moyczayhzxelniihvgua.mp4" type="video/mp4" />
        </video> */}
        <video
          className="flex w-96 h-auto rounded-lg"
          src="vid_ugc.mp4"
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-6xl font-black">{text5}</h3>
          <p className="text-2xl font-bold font-roboto">{text6}</p>
          <p className="font-medium font-roboto">{text7}</p>
          <a href="https://cal.com/robin-focus/call" target="_blank" className="flex w-fit mt-4 px-8 py-4 bg-white rounded-lg text-black font-bold hover:scale-105 transition-transform uppercase">{text8}</a>
        </div>
      </div>
    </div>
  )
}