export default async function Start({text1, text2}: {text1: string, text2: string}) {
  return (
    <div className="flex flex-col justify-center gap-10 py-24 lg:py-36">
      <a href="https://cal.com/robin-focus/call" target="_blank" className="flex flex-col gap-2 m-auto px-8 lg:px-32 py-8 bg-light-secondary hover:scale-110 hover:bg-tertiary transition-all border border-light-tertiary text-tertiary rounded-lg text-2xl hover:text-secondary font-bold text-center uppercase">
        {text1}
        <p className="text-center text-lg font-medium opacity-50 font-roboto lowercase">{text2}</p>
      </a>
    </div>
  )
}
