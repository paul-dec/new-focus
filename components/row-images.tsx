import Image from "next/image"

export default async function RowImages() {
  return (
    <div className="flex w-full overflow-hidden py-4">
      <div className="flex flex-row gap-10 animate-infinite-scroll">
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/exemples/1.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/exemples/2.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/exemples/3.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/exemples/4.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/exemples/5.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/exemples/1.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/exemples/2.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/exemples/3.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/exemples/4.png" alt="logo" />
        <Image width={500} height={500} className="flex w-96 h-96 rounded-lg shadow-white-img" src="/exemples/5.png" alt="logo" />
      </div>
    </div>
  )
}
