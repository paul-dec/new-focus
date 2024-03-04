"use client";

import { useEffect } from "react";

export default function Faq({text1, text2, text3, text4, text5, text6, text7, text8, text9}: {text1: string, text2: string, text3: string, text4: string, text5: string, text6: string, text7: string, text8: string, text9: string}) {
  useEffect(() => {
    let boxes = document.getElementsByClassName('expanded-box');
    let texts = document.getElementsByClassName('expanded-text');
    let moreButtons = document.getElementsByClassName('expanded-more-click');
    let lessButtons = document.getElementsByClassName('expanded-less-click');

    // lessButtons[0].setAttribute('style', 'display: flex;');
    // moreButtons[0].setAttribute('style', 'display: none;');
    // texts[0].setAttribute('style', 'max-height: 200px; margin-bottom: 20px; margin-top: 20px;');
    // boxes[0].setAttribute('style', 'border-image: linear-gradient(90deg, #5B11C2 0%, #5B11C2 90%, #141414 90%, #141414 92%, #FFFFFF 92%, #FFFFFF 100%); border-image-slice: 1;');
    for (let j = 0; j < texts.length; j++) {
      moreButtons[j].setAttribute('style', 'display: flex;');
      boxes[j].setAttribute('style', 'border-image: linear-gradient(90deg, #5B11C2 0%, #5B11C2 8%, #141414 8%, #141414 10%, #FFFFFF 10%, #FFFFFF 100%); border-image-slice: 1;');
    }

    for (let i = 0; i < moreButtons.length; i++) {
      moreButtons[i].addEventListener("click", (event) => {
        for (let j = 0; j < texts.length; j++) {
          texts[j].setAttribute('style', 'max-height: 0; margin-bottom: 0; margin-top: 0;');
          moreButtons[j].setAttribute('style', 'display: flex;');
          lessButtons[j].setAttribute('style', 'display: none;');
          boxes[j].setAttribute('style', 'border-image: linear-gradient(90deg, #5B11C2 0%, #5B11C2 8%, #141414 8%, #141414 10%, #FFFFFF 10%, #FFFFFF 100%); border-image-slice: 1;');
        }
        texts[i].setAttribute('style', 'max-height: 200px; margin-bottom: 20px; margin-top: 20px;');
        moreButtons[i].setAttribute('style', 'display: none;');
        lessButtons[i].setAttribute('style', 'display: flex;');
        boxes[i].setAttribute('style', 'border-image: linear-gradient(90deg, #5B11C2 0%, #5B11C2 90%, #141414 90%, #141414 92%, #FFFFFF 92%, #FFFFFF 100%); border-image-slice: 1;');
      });
    }

    for (let i = 0; i < lessButtons.length; i++) {
      lessButtons[i].addEventListener("click", (event) => {
        for (let j = 0; j < texts.length; j++) {
          texts[j].setAttribute('style', 'max-height: 0; margin-bottom: 0; margin-top: 0;');
          lessButtons[j].setAttribute('style', 'display: none;');
          moreButtons[j].setAttribute('style', 'display: flex;');
          boxes[j].setAttribute('style', 'border-image: linear-gradient(90deg, #5B11C2 0%, #5B11C2 8%, #141414 8%, #141414 10%, #FFFFFF 10%, #FFFFFF 100%); border-image-slice: 1;');
        }
      });
    }
  }, [])


  return (
    <div id="faq" className="flex flex-col justify-center items-center gap-20 py-24 lg:py-36">
      <p className="opacity-50 uppercase font-medium">{text1}</p>
      <div className="flex flex-col lg:flex-row justify-center gap-20 lg:gap-10">
        <div className="flex flex-col lg:px-10 gap-6 max-w-[600px] lg:min-w-[470px] w-full">
          <div className="expanded-box">
            <div className="expanded-more-click">
              <p className="expanded-title font-roboto">{text2}</p>
              <p className="expanded-more">+</p>
            </div>
            <div className="expanded-less-click">
              <p className="expanded-title font-roboto">{text2}</p>
              <p className="expanded-less">-</p>
            </div>
            <p className="expanded-text font-roboto">{text3}</p>
          </div>
          {/* <div className="expanded-box">
            <div className="expanded-more-click">
              <p className="expanded-title font-roboto">Qui est notre équipe&nbsp;?</p>
              <p className="expanded-more">+</p>
            </div>
            <div className="expanded-less-click">
              <p className="expanded-title font-roboto">Qui est notre équipe&nbsp;?</p>
              <p className="expanded-less">-</p>
            </div>
            <p className="expanded-text font-roboto">Robin - Fondateur<br/>Diana - Cheffe de projet<br/>Florian - Motion Designer<br/>Victor - Motion Designer<br/>Nabil - Graphiste<br/>Gabriel - Monteur vidéo<br/>Acting - Plus de 100 acteurs</p>
          </div> */}
          <div className="expanded-box">
            <div className="expanded-more-click">
              <p className="expanded-title font-roboto">{text4}</p>
              <p className="expanded-more">+</p>
            </div>
            <div className="expanded-less-click">
              <p className="expanded-title font-roboto">{text4}</p>
              <p className="expanded-less">-</p>
            </div>
            <p className="expanded-text font-roboto">{text5}</p>
          </div>
          <div className="expanded-box">
            <div className="expanded-more-click">
              <p className="expanded-title font-roboto">{text6}</p>
              <p className="expanded-more">+</p>
            </div>
            <div className="expanded-less-click">
              <p className="expanded-title font-roboto">{text6}</p>
              <p className="expanded-less">-</p>
            </div>
            <p className="expanded-text font-roboto">{text7}</p>
          </div>
        </div>
        <div className="flex flex-col px-10 py-10 gap-2 max-w-[600px] w-full bg-light-secondary rounded-xl items-center justy-center">
          <p className="text-2xl font-bold text-center font-roboto">{text8}</p>
          <p className="opacity-50 text-center font-roboto">{text9}</p>
        </div>
      </div>
    </div>
  )
}