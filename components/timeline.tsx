import IconAftereffect from "./icons/aftereffect"
import IconDoubleArrow from "./icons/double_arrow"
import IconPhotoshop from "./icons/photoshop"
import IconStripe from "./icons/stripe"
import IconWhatsapp from "./icons/whatsapp"

export default async function Timeline() {
  return (
    <div id="timeline" className="flex flex-col w-full rounded-2xl items-center	justify-center my-24 lg:my-36 gap-20 bg-gradient-to-b from-light-secondary to-transparent pt-16">
      <p className="opacity-50 uppercase font-medium mb-[-80px]">Comment ça marche&nbsp;?</p>
      <div className="flex flex-col lg:flex-row w-full items-center justify-around">
        <div className="flex flex-col w-[90%] lg:w-[30%] items-center relative">
          <p className="bg-gradient-to-b from-primary to-transparent inline-block text-transparent bg-clip-text text-9xl font-black">1</p>
          <h3 className="absolute top-[90px] text-4xl font-bold">Inscription</h3>
          <p className="text-center text-base font-medium opacity-50">Choisissez un de nos deux plans et faites autant de requêtes que vous le souhaitez.</p>
        </div>
        <div className="hidden lg:flex">
          <IconDoubleArrow />
        </div>
        <div className="flex flex-col w-[90%] lg:w-[30%] items-center relative">
          <p className="bg-gradient-to-b from-primary to-transparent inline-block text-transparent bg-clip-text text-9xl font-black">2</p>
          <h3 className="absolute top-[90px] text-4xl font-bold">Production</h3>
          <p className="text-center text-base font-medium opacity-50">Nous traitons vos demandes pour vous livrer les contenus en 72h en moyenne.</p>
        </div>
        <div className="hidden lg:flex">
          <IconDoubleArrow />
        </div>
        <div className="flex flex-col w-[90%] lg:w-[30%] items-center relative">
          <p className="bg-gradient-to-b from-primary to-transparent inline-block text-transparent bg-clip-text text-9xl font-black">3</p>
          <h3 className="absolute top-[90px] text-4xl font-bold">Retours illimités</h3>
          <p className="text-center text-base font-medium opacity-50">Jusqu’à vous satisfaire à 100%.</p>
        </div>
      </div>
      {/* <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-10">
        <div className="flex flex-row items-center gap-2">
          <p className="font-medium opacity-50">Payment securely done via Stripe</p>
          <IconStripe />
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="font-medium opacity-50">Communication done via Whatsapp</p>
          <IconWhatsapp />
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="font-medium opacity-50">Communication done via Whatsapp</p>
          <IconAftereffect />
          <IconPhotoshop />
        </div>
      </div> */}
    </div>
  )
}