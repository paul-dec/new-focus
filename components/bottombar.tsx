import IconInstagram from "./icons/instagram";
import IconLinkedin from "./icons/linkedin";
import IconTwitter from "./icons/twitter";
import IconWhatsappOutline from "./icons/whatsapp_outline";

export default async function BottomBar() {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between border-t-2 border-light-tertiary pt-10 gap-10">
      <div className="flex flex-col gap-2 items-center lg:items-start">
        <img className="h-[30px] w-fit" src="/logo.png" alt="logo" />
        <a className="font-medium">Une agence créative à Nice en France</a>
        <a className="text-primary font-medium">© 2023 Focus</a>
      </div>
      <div className="flex items-center justify-center lg:justify-end	gap-4">
        <a>
          <IconTwitter />
        </a>
        <a>
          <IconInstagram />
        </a>
        <a>
          <IconLinkedin />
        </a>
        <a>
          <IconWhatsappOutline />
        </a>
      </div>
    </div>
  )
}