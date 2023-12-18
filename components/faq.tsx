"use client";

import { useEffect } from "react";

export default function Faq() {
  useEffect(() => {
    let boxes = document.getElementsByClassName('expanded-box');
    let texts = document.getElementsByClassName('expanded-text');
    let moreButtons = document.getElementsByClassName('expanded-more-click');
    let lessButtons = document.getElementsByClassName('expanded-less-click');

    lessButtons[0].setAttribute('style', 'display: flex;');
    moreButtons[0].setAttribute('style', 'display: none;');
    texts[0].setAttribute('style', 'max-height: 200px; margin-bottom: 20px; margin-top: 20px;');
    boxes[0].setAttribute('style', 'border-image: linear-gradient(90deg, #5B11C2 0%, #5B11C2 90%, #141414 90%, #141414 92%, #FFFFFF 92%, #FFFFFF 100%); border-image-slice: 1;');
    for (let j = 1; j < texts.length; j++) {
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
      <p className="opacity-50 uppercase font-medium">FAQ</p>
      <div className="flex flex-col lg:flex-row justify-center gap-20 lg:gap-10">
        <div className="flex flex-col lg:px-10 gap-6 max-w-[600px] lg:min-w-[470px] w-full">
          <div className="expanded-box">
            <div className="expanded-more-click">
              <p className="expanded-title">Quand vais-je recevoir mes contenus ?</p>
              <p className="expanded-more">+</p>
            </div>
            <div className="expanded-less-click">
              <p className="expanded-title">Quand vais-je recevoir mes contenus ?</p>
              <p className="expanded-less">-</p>
            </div>
            <p className="expanded-text">Nous traitons en moyenne toutes les demandes en 72h en vous tenant informé. Pour les demandes plus complexes comme les UGC, les délais sont légèrement allongés pour permettre à l’acteur de tourner dans de bonnes conditions.</p>
          </div>
          <div className="expanded-box">
            <div className="expanded-more-click">
              <p className="expanded-title">Qui est notre équipe ?</p>
              <p className="expanded-more">+</p>
            </div>
            <div className="expanded-less-click">
              <p className="expanded-title">Qui est notre équipe ?</p>
              <p className="expanded-less">-</p>
            </div>
            <p className="expanded-text">Robin - Fondateur<br/>Diana - Cheffe de projet<br/>Florian - Motion Designer<br/>Victor - Motion Designer<br/>Nabil - Graphiste<br/>Gabriel - Monteur vidéo<br/>Acting - Plus de 100 acteurs</p>
          </div>
          <div className="expanded-box">
            <div className="expanded-more-click">
              <p className="expanded-title">Comment faire une requête pour un nouveau contenu ?</p>
              <p className="expanded-more">+</p>
            </div>
            <div className="expanded-less-click">
              <p className="expanded-title">Comment faire une requête pour un nouveau contenu ?</p>
              <p className="expanded-less">-</p>
            </div>
            <p className="expanded-text">Nous utilisons Notion pour traiter vos requêtes.<br/>Vous êtes libre d’écrire votre brief directement sur Notion ou de nous transmettre un Loom, un Google Doc, ou n’importe quel support qui nous aide à comprendre vos idées.</p>
          </div>
          <div className="expanded-box">
            <div className="expanded-more-click">
              <p className="expanded-title">Pourquoi mettre en pause mon abonnement ?</p>
              <p className="expanded-more">+</p>
            </div>
            <div className="expanded-less-click">
              <p className="expanded-title">Pourquoi mettre en pause mon abonnement ?</p>
              <p className="expanded-less">-</p>
            </div>
            <p className="expanded-text">Tous les mois ne se ressemblent pas pour votre activité : nous avons mis en place la possibilité de mettre en pause votre abonnement et de le réactiver à tout moment.</p>
          </div>
        </div>
        <div className="flex flex-col px-10 py-10 gap-2 max-w-[600px] w-full bg-light-secondary rounded-xl items-center justy-center">
          <p className="text-2xl font-bold text-center">Pourquoi ne pas embaucher une équipe créative à temps plein ?</p>
          <p className="opacity-50 text-center">Nous mettons à votre disposition toute notre expertise en graphisme, montage vidéo, motion design, ainsi que plus de 100 acteurs.<br/>L'embauche d'une équipe créative complète (un graphiste, un motion designer, un chef de projet…) sera plus coûteuse et difficile à gérer : nous nous occupons de tout cela pour vous !</p>
        </div>
      </div>
    </div>
  )
}