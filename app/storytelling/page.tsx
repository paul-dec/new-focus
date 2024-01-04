import BottomBar from "@/components/bottombar";
import NavbarStorytelling from "@/components/navbar-storytelling";
import Start from "@/components/start";
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 lg:p-10">
      <NavbarStorytelling />
      <div className="video-bloc">
        <h1 className="video-title">VOTRE HISTOIRE <span className="video-title-color">EN VIDÉO</span></h1>
        <iframe src="https://player.vimeo.com/video/819301723" className="video-player" allowFullScreen></iframe>
      </div>
      <div className="explication-desktop">
        <h2 className="explication-title">LA RÉALISATION D&apos;UNE VIDÉO PARFAITE EN <span className="explication-title-color">5 ÉTAPES</span></h2>
        <div className="explication-row">
          <div className="explication-bloc">
            <Image alt="storytelling" width={500} height={500} className="explication-image" src="/Storytelling/F01.png" />
          </div>
          <div className="explication-bar">
            <svg className="explication-number" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#5B11C2" />
              <path d="M11.2516 14H9.45158V8.192H7.38758V6.956H7.72358C8.19558 6.956 8.57958 6.884 8.87558 6.74C9.17158 6.596 9.41558 6.336 9.60758 5.96H11.2516V14Z" fill="white" />
            </svg>
          </div>
          <div className="explication-bloc">
          </div>
        </div>
        <div className="explication-row">
          <div className="explication-bloc">
          </div>
          <div className="explication-bar">
            <svg className="explication-number" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#5B11C2" />
              <path d="M13.5547 14H6.41467V12.848C6.41467 12.136 6.58667 11.576 6.93067 11.168C7.27467 10.76 7.87067 10.416 8.71867 10.136L10.7827 9.464C11.1507 9.336 11.4067 9.2 11.5507 9.056C11.6947 8.904 11.7667 8.7 11.7667 8.444C11.7667 8.116 11.6467 7.876 11.4067 7.724C11.1667 7.564 10.7347 7.484 10.1107 7.484C9.39867 7.484 8.89867 7.592 8.61067 7.808C8.33067 8.016 8.19067 8.352 8.19067 8.816V8.972H6.42667V8.816C6.42667 7.96 6.73467 7.252 7.35067 6.692C7.97467 6.124 8.91467 5.84 10.1707 5.84C11.3307 5.84 12.1867 6.076 12.7387 6.548C13.2987 7.02 13.5787 7.66 13.5787 8.468C13.5787 9.148 13.3747 9.688 12.9667 10.088C12.5587 10.488 11.9747 10.792 11.2147 11L9.46267 11.48C9.04667 11.608 8.75067 11.748 8.57467 11.9C8.39867 12.052 8.31067 12.28 8.31067 12.584L10.4107 12.38H13.5547V14Z" fill="white" />
            </svg>
          </div>
          <div className="explication-bloc">
            <Image alt="storytelling" width={500} height={500} className="explication-image" src="/Storytelling/F02.png" />
          </div>
        </div>
        <div className="explication-row">
          <div className="explication-bloc">
            <Image alt="storytelling" width={500} height={500} className="explication-image" src="/Storytelling/F03.png" />
          </div>
          <div className="explication-bar">
            <svg className="explication-number" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#5B11C2" />
              <path d="M10.0906 14.12C8.80261 14.12 7.84261 13.876 7.21061 13.388C6.58661 12.892 6.27461 12.188 6.27461 11.276V11.084H8.18261V11.276C8.18261 11.708 8.29461 12.004 8.51861 12.164C8.75061 12.316 9.24661 12.392 10.0066 12.392C10.7586 12.392 11.2746 12.324 11.5546 12.188C11.8426 12.052 11.9866 11.808 11.9866 11.456C11.9866 10.888 11.6066 10.604 10.8466 10.604H8.53061V9.128H10.6786C11.3506 9.128 11.6866 8.876 11.6866 8.372C11.6866 8.076 11.5666 7.868 11.3266 7.748C11.0946 7.628 10.6466 7.568 9.98261 7.568C9.27861 7.568 8.80261 7.652 8.55461 7.82C8.30661 7.98 8.18261 8.268 8.18261 8.684V8.744H6.27461V8.684C6.27461 7.812 6.59861 7.12 7.24661 6.608C7.90261 6.096 8.86661 5.84 10.1386 5.84C11.2186 5.84 12.0426 6.024 12.6106 6.392C13.1866 6.752 13.4746 7.284 13.4746 7.988C13.4746 8.452 13.3386 8.832 13.0666 9.128C12.7946 9.424 12.3986 9.604 11.8786 9.668V9.8C13.1746 9.984 13.8226 10.632 13.8226 11.744C13.8226 12.512 13.4946 13.1 12.8386 13.508C12.1906 13.916 11.2746 14.12 10.0906 14.12Z" fill="white" />
            </svg>
          </div>
          <div className="explication-bloc">
          </div>
        </div>
        <div className="explication-row">
          <div className="explication-bloc">
          </div>
          <div className="explication-bar">
            <svg className="explication-number" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#5B11C2" />
              <path d="M12.8437 14H11.0437V12.464H5.94367V11.24L10.7557 5.96H12.8437V10.844H14.0677V12.464H12.8437V14ZM8.45167 10.844H11.0437V8.036H10.9117L8.45167 10.712V10.844Z" fill="white" />
            </svg>
          </div>
          <div className="explication-bloc">
            <Image alt="storytelling" width={500} height={500} className="explication-image" src="/Storytelling/F04.png" />
          </div>
        </div>
        <div className="explication-row">
          <div className="explication-bloc">
            <Image alt="storytelling" width={500} height={500} className="explication-image" src="/Storytelling/F05.png" />
          </div>
          <div className="explication-bar">
            <svg className="explication-number" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#5B11C2" />
              <path d="M10.0521 14.12C7.49213 14.12 6.21213 13.248 6.21213 11.504V11.396H8.07213V11.504C8.07213 11.856 8.22013 12.108 8.51613 12.26C8.81213 12.404 9.33213 12.476 10.0761 12.476C10.7561 12.476 11.2241 12.388 11.4801 12.212C11.7441 12.028 11.8761 11.716 11.8761 11.276C11.8761 10.828 11.7481 10.516 11.4921 10.34C11.2361 10.156 10.7681 10.064 10.0881 10.064C9.52013 10.064 9.08013 10.104 8.76813 10.184C8.46413 10.264 8.24013 10.408 8.09613 10.616L7.96413 10.604V10.616L6.27213 10.568L6.72813 5.96H13.3521V7.58H8.32413L8.07213 9.68L8.18013 9.692C8.34813 9.412 8.66013 9.168 9.11613 8.96C9.57213 8.744 10.1401 8.636 10.8201 8.636C11.7961 8.636 12.5321 8.864 13.0281 9.32C13.5321 9.768 13.7841 10.412 13.7841 11.252C13.7841 12.148 13.4721 12.852 12.8481 13.364C12.2241 13.868 11.2921 14.12 10.0521 14.12Z" fill="white" />
            </svg>
          </div>
          <div className="explication-bloc">
          </div>
        </div>
      </div>
      <div className="explication-mobile">
        <h2 className="explication-title">LA RÉALISATION D&apos;UNE VIDÉO PARFAITE EN <span className="explication-title-color">5 ÉTAPES</span></h2>
        <div className="explication-row">
          <div className="explication-bar">
            <svg className="explication-number" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#5B11C2" />
              <path d="M11.2516 14H9.45158V8.192H7.38758V6.956H7.72358C8.19558 6.956 8.57958 6.884 8.87558 6.74C9.17158 6.596 9.41558 6.336 9.60758 5.96H11.2516V14Z" fill="white" />
            </svg>
          </div>
          <div className="explication-column">
            <Image alt="storytelling" width={500} height={500} className="explication-image" src="/Storytelling/F01.png" />
          </div>
        </div>
        <div className="explication-row">
          <div className="explication-bar">
            <svg className="explication-number" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#5B11C2" />
              <path d="M13.5547 14H6.41467V12.848C6.41467 12.136 6.58667 11.576 6.93067 11.168C7.27467 10.76 7.87067 10.416 8.71867 10.136L10.7827 9.464C11.1507 9.336 11.4067 9.2 11.5507 9.056C11.6947 8.904 11.7667 8.7 11.7667 8.444C11.7667 8.116 11.6467 7.876 11.4067 7.724C11.1667 7.564 10.7347 7.484 10.1107 7.484C9.39867 7.484 8.89867 7.592 8.61067 7.808C8.33067 8.016 8.19067 8.352 8.19067 8.816V8.972H6.42667V8.816C6.42667 7.96 6.73467 7.252 7.35067 6.692C7.97467 6.124 8.91467 5.84 10.1707 5.84C11.3307 5.84 12.1867 6.076 12.7387 6.548C13.2987 7.02 13.5787 7.66 13.5787 8.468C13.5787 9.148 13.3747 9.688 12.9667 10.088C12.5587 10.488 11.9747 10.792 11.2147 11L9.46267 11.48C9.04667 11.608 8.75067 11.748 8.57467 11.9C8.39867 12.052 8.31067 12.28 8.31067 12.584L10.4107 12.38H13.5547V14Z" fill="white" />
            </svg>
          </div>
          <div className="explication-column">
            <Image alt="storytelling" width={500} height={500} className="explication-image" src="/Storytelling/F02.png" />
          </div>
        </div>
        <div className="explication-row">
          <div className="explication-bar">
            <svg className="explication-number" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#5B11C2" />
              <path d="M10.0906 14.12C8.80261 14.12 7.84261 13.876 7.21061 13.388C6.58661 12.892 6.27461 12.188 6.27461 11.276V11.084H8.18261V11.276C8.18261 11.708 8.29461 12.004 8.51861 12.164C8.75061 12.316 9.24661 12.392 10.0066 12.392C10.7586 12.392 11.2746 12.324 11.5546 12.188C11.8426 12.052 11.9866 11.808 11.9866 11.456C11.9866 10.888 11.6066 10.604 10.8466 10.604H8.53061V9.128H10.6786C11.3506 9.128 11.6866 8.876 11.6866 8.372C11.6866 8.076 11.5666 7.868 11.3266 7.748C11.0946 7.628 10.6466 7.568 9.98261 7.568C9.27861 7.568 8.80261 7.652 8.55461 7.82C8.30661 7.98 8.18261 8.268 8.18261 8.684V8.744H6.27461V8.684C6.27461 7.812 6.59861 7.12 7.24661 6.608C7.90261 6.096 8.86661 5.84 10.1386 5.84C11.2186 5.84 12.0426 6.024 12.6106 6.392C13.1866 6.752 13.4746 7.284 13.4746 7.988C13.4746 8.452 13.3386 8.832 13.0666 9.128C12.7946 9.424 12.3986 9.604 11.8786 9.668V9.8C13.1746 9.984 13.8226 10.632 13.8226 11.744C13.8226 12.512 13.4946 13.1 12.8386 13.508C12.1906 13.916 11.2746 14.12 10.0906 14.12Z" fill="white" />
            </svg>
          </div>
          <div className="explication-column">
            <Image alt="storytelling" width={500} height={500} className="explication-image" src="/Storytelling/F03.png" />
          </div>
        </div>
        <div className="explication-row">
          <div className="explication-bar">
            <svg className="explication-number" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#5B11C2" />
              <path d="M12.8437 14H11.0437V12.464H5.94367V11.24L10.7557 5.96H12.8437V10.844H14.0677V12.464H12.8437V14ZM8.45167 10.844H11.0437V8.036H10.9117L8.45167 10.712V10.844Z" fill="white" />
            </svg>
          </div>
          <div className="explication-column">
            <Image alt="storytelling" width={500} height={500} className="explication-image" src="/Storytelling/F04.png" />
          </div>
        </div>
        <div className="explication-row">
          <div className="explication-bar">
            <svg className="explication-number" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="10" cy="10" r="10" fill="#5B11C2" />
              <path d="M10.0521 14.12C7.49213 14.12 6.21213 13.248 6.21213 11.504V11.396H8.07213V11.504C8.07213 11.856 8.22013 12.108 8.51613 12.26C8.81213 12.404 9.33213 12.476 10.0761 12.476C10.7561 12.476 11.2241 12.388 11.4801 12.212C11.7441 12.028 11.8761 11.716 11.8761 11.276C11.8761 10.828 11.7481 10.516 11.4921 10.34C11.2361 10.156 10.7681 10.064 10.0881 10.064C9.52013 10.064 9.08013 10.104 8.76813 10.184C8.46413 10.264 8.24013 10.408 8.09613 10.616L7.96413 10.604V10.616L6.27213 10.568L6.72813 5.96H13.3521V7.58H8.32413L8.07213 9.68L8.18013 9.692C8.34813 9.412 8.66013 9.168 9.11613 8.96C9.57213 8.744 10.1401 8.636 10.8201 8.636C11.7961 8.636 12.5321 8.864 13.0281 9.32C13.5321 9.768 13.7841 10.412 13.7841 11.252C13.7841 12.148 13.4721 12.852 12.8481 13.364C12.2241 13.868 11.2921 14.12 10.0521 14.12Z" fill="white" />
            </svg>
          </div>
          <div className="explication-column">
            <Image alt="storytelling" width={500} height={500} className="explication-image" src="/Storytelling/F05.png" />
          </div>
        </div>
      </div>
      <Start />
      <BottomBar />
    </main>
  )
}