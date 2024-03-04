export default async function Header({text1, text2, text3, text4, text5, text6, text7, text8, text9}: {text1: string, text2: string, text3: string, text4: string, text5: string, text6: string, text7: string, text8: string, text9: string}) {
  return (
    <div className="flex flex-col justify-center gap-10 lg:gap-20 py-24 lg:py-44">
      <div className="flex flex-col justify-center">
        <h1 className="text-center text-3xl lg:text-6xl font-bold uppercase">{text1}<br/>{text2}<span className="text-primary">{text3}</span></h1>
        {/* <div className="flex flex-col justify-center items-center relative h-[60px] lg:h-[140px] overflow-hidden	">
          <h1 className="top-[-1px] absolute text-center text-2xl lg:text-6xl font-bold leading-[30px] lg:leading-[70px] uppercase animate-header-loop-mobile lg:animate-header-loop"><p className="text-primary">faire&nbsp;exploser&nbsp;vos<br/>réseaux&nbsp;sociaux</p>sur-performer&nbsp;en<br/>campagne&nbsp;ads<br/><p className="text-primary">alimenter&nbsp;votre<br/>site</p>créer&nbsp;du&nbsp;contenu<br/>en&nbsp;masse<br/><p className="text-primary">faire&nbsp;exploser&nbsp;vos<br/>réseaux&nbsp;sociaux</p></h1>
        </div> */}
      </div>
      <h2 className="text-center text-lg lg:text-2xl font-medium font-roboto"><span className="opacity-80">{text4}</span> <span className="text-primary">(</span><span className="opacity-80">{text5}</span><span className="text-primary">)</span> <span className="opacity-80">{text6}</span> <span className="text-primary">{text7}</span><br/><span className="opacity-80">{text8}</span></h2>
      <a href="#pricing" className="flex m-auto px-8 py-4 bg-white hover:scale-110 transition-transform	rounded-lg text-black font-bold border border-light-tertiary uppercase text-lg">{text9}</a>
    </div>
  )
}
