import IconCheckmark from "./icons/checkmark";
import IconCheckmarkPurple from "./icons/checkmark_purple";
import IconStars from "./icons/stars";

export default async function Pricing() {
  return (
    <div className="flex flex-col justify-center items-center gap-20 py-24 lg:py-36">
      <p className="opacity-50 uppercase font-medium mb-[-80px]">Tarification</p>
      <h2 className="text-center text-xl font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Curabitur ullamcorper interdum massa, in aliquet est.</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-20 lg:gap-10">
        <div className="flex flex-col px-10 py-10 gap-2 max-w-[500px] w-full bg-light-secondary rounded-xl">
          <p className="text-2xl font-bold">Basic</p>
          <p className="text-4xl font-black">4900€/mois</p>
          <p className="opacity-50">Pause or cancel anytime</p>
          <p className="text-lg font-medium">Perfect for those with an ongoing need for design support.</p>
          <div className="h-[1px] w-full bg-tertiary opacity-10 my-8"></div>
          <p className="font-bold text-xl">What's included:</p>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium">One request at a time</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium">One request at a time</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium">One request at a time</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium">One request at a time</p>
          </div>
          <a className="flex w-fit mt-4 px-8 py-4 bg-white rounded-lg text-black font-bold">Commencer maintenant</a>
        </div>
        <div className="flex flex-col px-10 py-10 gap-2 max-w-[500px] w-full bg-tertiary rounded-xl">
          <div className="text-2xl font-bold relative text-primary">
            Pro
            <div className="absolute top-[-4px] left-[40px]">
              <IconStars />
            </div>
          </div>
          <p className="text-4xl font-black text-primary">4900€/mois</p>
          <p className="opacity-50 text-primary">Pause or cancel anytime</p>
          <p className="text-lg font-medium text-primary">Perfect for those with an ongoing need for design support.</p>
          <div className="h-[1px] w-full bg-primary opacity-10 my-8"></div>
          <p className="font-bold text-xl text-primary">What's included:</p>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary">One request at a time</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary">One request at a time</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary">One request at a time</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary">One request at a time</p>
          </div>
          <a className="flex w-fit mt-4 px-8 py-4 bg-primary rounded-lg text-tertiary font-bold">Commencer maintenant</a>
        </div>
      </div>
    </div>
  )
}