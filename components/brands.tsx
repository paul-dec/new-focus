import Image from "next/image"

export default async function Brands() {
  return (
    // filter: brightness(50%) sepia(100) saturate(100) hue-rotate(266deg);
    <div className="grid grid-cols-6 md:grid-cols-9 gap-4 max-w-6xl">
        <Image width={500} height={500} className="brand-logo" src="/Brands/Bagelstein Logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/Boku Logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/DUOLOAB Logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/Emma Logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/GCC Logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/Killtilt Logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/Mediaschool Logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/Memorizer Logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/MWM logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/O_Tacos Logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/Onatera Logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/Père_Fish Logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/Stormrock Logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/Sync Logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/Unima Logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/VOGGT logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/Wizbii Money Logo.png" alt="logo" />
        <Image width={500} height={500} className="brand-logo" src="/Brands/Yummypets Logo.png" alt="logo" />
    </div>
  )
}
