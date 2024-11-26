import IconCheckmark from "./icons/checkmark";
import IconCheckmarkPurple from "./icons/checkmark_purple";
import IconStars from "./icons/stars";

export default async function Pricing({text1, text2, text3, text4, text5, text6, text7, text8, text9, text10, text11, text12, text13, text14, text15, text16, text17, text18, text19, text20, text21, text22, text23, text24, text25, text26}: {text1: string, text2: string, text3: string, text4: string, text5: string, text6: string, text7: string, text8: string, text9: string, text10: string, text11: string, text12: string, text13: string, text14: string, text15: string, text16: string, text17: string, text18: string, text19: string, text20: string, text21: string, text22: string, text23: string, text24: string, text25: string, text26: string}) {
  return (
    <div id="pricing" className="flex flex-col justify-center items-center gap-20 py-24 lg:py-36">
      <p className="opacity-50 uppercase font-medium mb-[-80px]">{text1}</p>
      <h2 className="text-center text-xl font-medium font-roboto">{text2}</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-20 lg:gap-10">
        <div className="flex flex-col px-10 py-10 gap-2 max-w-[500px] w-full bg-light-secondary rounded-xl">
          <p className="text-2xl font-bold">{text3}</p>
          <p className="text-4xl font-black">{text4}</p>
          <p className="opacity-50 font-roboto">{text5}</p>
          <p className="text-lg font-medium font-roboto">{text6}</p>
          <div className="h-[1px] w-full bg-tertiary opacity-10 my-8"></div>
          <p className="font-bold text-xl font-roboto">{text7}</p>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium font-roboto">{text8}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium font-roboto">{text9}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium font-roboto">{text10}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium font-roboto">{text11}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium font-roboto">{text12}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmark />
            <p className="font-medium font-roboto">{text13}</p>
          </div>
          <a href="https://cal.com/robin-focus/call" target="_blank" className="flex w-fit mt-4 px-8 py-4 bg-white rounded-lg text-black font-bold hover:scale-105 transition-transform uppercase">{text14}</a>
        </div>
        <div className="flex flex-col px-10 py-10 gap-2 max-w-[500px] w-full bg-tertiary rounded-xl">
          <div className="text-2xl font-bold relative text-primary">
            {text15}
            <div className="absolute top-[-4px] left-[40px]">
              <IconStars />
            </div>
          </div>
          <p className="text-4xl font-black text-primary">{text16}</p>
          <p className="opacity-50 text-primary font-roboto">{text17}</p>
          <p className="text-lg font-medium text-primary font-roboto">{text18}</p>
          <div className="h-[1px] w-full bg-primary opacity-10 my-8"></div>
          <p className="font-bold text-xl text-primary font-roboto">{text19}</p>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary font-roboto">{text20}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary font-roboto">{text21}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary font-roboto">{text22}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary font-roboto">{text23}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary font-roboto">{text24}</p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <IconCheckmarkPurple />
            <p className="font-medium text-primary font-roboto">{text25}</p>
          </div>
          <a href="https://cal.com/robin-focus/call" target="_blank" className="flex w-fit mt-4 px-8 py-4 bg-primary rounded-lg text-tertiary font-bold hover:scale-105 transition-transform uppercase">{text26}</a>
        </div>
      </div>
    </div>
  )
}