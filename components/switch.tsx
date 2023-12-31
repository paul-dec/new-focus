"use client";

import { useEffect } from "react";
import RowUGC from "./row-ugc";
import RowMotion from "./row-motion";
import RowVisuel from "./row-visuel";

export default async function Switch() {
  function clickBtn(id: number) {
    const section1 = document.getElementById('section1')
    const section2 = document.getElementById('section2')
    const section3 = document.getElementById('section3')
    const sections = [section1, section2, section3];
    sections.forEach(section => {
      section?.setAttribute('style', 'display: none')
    })
    const section = document.getElementById(`section${id}`)
    section?.setAttribute('style', 'display: block')
    const btn = document.getElementById(`btn${id}`)
    const width = btn?.clientWidth;
    const left = btn?.offsetLeft;
    const background = document.getElementById('background')
    background?.setAttribute('style', `width: ${width}px; transform: translateX(${(left ?? 0) - 8}px) translateY(-50%); left: 8px;`)
  }

  useEffect(() => {
    const btn = document.getElementById(`btn2`)
    const width = btn?.clientWidth;
    const left = btn?.offsetLeft;
    const background = document.getElementById('background')
    background?.setAttribute('style', `width: ${width}px; transform: translateX(${(left ?? 0) - 8}px) translateY(-50%); left: 8px;`)
  }, [])
  return (
    <div className="flex flex-col justify-center items-center gap-20 py-24 lg:py-36">
      <div className="relative flex flex-row gap-2 p-2 bg-light-secondary rounded-full border border-light-tertiary">
        <div id="background" className="transition-all absolute bg-primary rounded-full h-[80%] w-[145px] lg:w-[174px] top-1/2 left-[97px] lg:left-[110px] -translate-y-1/2 shadow-white-img"></div>
        <button id="btn1" onClick={() => clickBtn(1)} className="z-10 px-4 py-2 rounded-lg text-tertiary font-bold lg:text-xl font-roboto uppercase">Visuel</button>
        <button id="btn2" onClick={() => clickBtn(2)} className="z-10 px-4 py-2 rounded-lg text-tertiary font-bold lg:text-xl font-roboto uppercase">Motion Design</button>
        <button id="btn3" onClick={() => clickBtn(3)} className="z-10 px-4 py-2 rounded-lg text-tertiary font-bold lg:text-xl font-roboto uppercase">UGC</button>
      </div>
      <div id="section1" style={{"display": "none"}}>
        <RowVisuel />
      </div>
      <div id="section2">
        <RowMotion />
      </div>
      <div id="section3" style={{"display": "none"}}>
        <RowUGC />
      </div>
    </div>
  )
}