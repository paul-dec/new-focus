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
    <div className="flex flex-col justify-center items-center gap-20 py-24 lg:py-36">
      <p className="opacity-50 uppercase font-medium mb-[-80px]">FAQ</p>
      <h2 className="text-center text-xl font-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Curabitur ullamcorper interdum massa, in aliquet est.</h2>
      <div className="flex flex-col lg:flex-row justify-center gap-20 lg:gap-10">
        <div className="flex flex-col lg:px-10 gap-6 max-w-[600px] lg:min-w-[470px] w-full">
          <div className="expanded-box">
            <div className="expanded-more-click">
              <p className="expanded-title">Lorem ipsum dolor sit amet ?</p>
              <p className="expanded-more">+</p>
            </div>
            <div className="expanded-less-click">
              <p className="expanded-title">Lorem ipsum dolor sit amet ?</p>
              <p className="expanded-less">-</p>
            </div>
            <p className="expanded-text">Our web design agency crafts visually captivating websites, providing an exceptional user experience to effectively showcase your brand and drive online success.</p>
          </div>
          <div className="expanded-box">
            <div className="expanded-more-click">
              <p className="expanded-title">Lorem ipsum dolor sit amet ?</p>
              <p className="expanded-more">+</p>
            </div>
            <div className="expanded-less-click">
              <p className="expanded-title">Lorem ipsum dolor sit amet ?</p>
              <p className="expanded-less">-</p>
            </div>
            <p className="expanded-text">Our Webflow service delivers outstanding custom-designed websites, harnessing the platforms versatility to create seamless, responsive, and visually striking online presences.</p>
          </div>
          <div className="expanded-box">
            <div className="expanded-more-click">
              <p className="expanded-title">Lorem ipsum dolor sit amet ?</p>
              <p className="expanded-more">+</p>
            </div>
            <div className="expanded-less-click">
              <p className="expanded-title">Lorem ipsum dolor sit amet ?</p>
              <p className="expanded-less">-</p>
            </div>
            <p className="expanded-text">Our WordPress service specializes in crafting visually stunning, user-friendly websites that harness the platforms extensive capabilities for optimal online performance and results.</p>
          </div>
          <div className="expanded-box">
            <div className="expanded-more-click">
              <p className="expanded-title">Lorem ipsum dolor sit amet ?</p>
              <p className="expanded-more">+</p>
            </div>
            <div className="expanded-less-click">
              <p className="expanded-title">Lorem ipsum dolor sit amet ?</p>
              <p className="expanded-less">-</p>
            </div>
            <p className="expanded-text">Our Shopify service focuses on creating eye-catching, user-centric e-commerce stores that leverage the platforms powerful functionalities for exceptional online shopping experiences and results.</p>
          </div>
          <div className="expanded-box">
            <div className="expanded-more-click">
              <p className="expanded-title">Lorem ipsum dolor sit amet ?</p>
              <p className="expanded-more">+</p>
            </div>
            <div className="expanded-less-click">
              <p className="expanded-title">Lorem ipsum dolor sit amet ?</p>
              <p className="expanded-less">-</p>
            </div>
            <p className="expanded-text">Our custom website service offers tailor-made, visually appealing sites, designed to address your unique needs and goals, ensuring an exceptional online presence that stands out from the competition.</p>
          </div>
        </div>
        <div className="flex flex-col px-10 py-10 gap-2 max-w-[600px] w-full bg-light-secondary rounded-xl items-center justy-center">
          <p className="text-2xl font-bold text-center">Lorem ipsum dolor sit amet ?</p>
          <p className="opacity-50 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id enim porta, ornare leo a, interdum sem. Donec fermentum magna in sodales fermentum. Aenean nec felis in tellus accumsan tincidunt id ut mi. Praesent ut justo congue, vehicula eros in, volutpat velit. Aliquam feugiat vestibulum nisi vel ornare.</p>
          <p className="text-2xl font-bold text-center">Lorem ipsum dolor sit amet ?</p>
          <p className="opacity-50 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id enim porta, ornare leo a, interdum sem. Donec fermentum magna in sodales fermentum. Aenean nec felis in tellus accumsan tincidunt id ut mi. Praesent ut justo congue, vehicula eros in, volutpat velit. Aliquam feugiat vestibulum nisi vel ornare.</p>
          <p className="text-2xl font-bold text-center">Lorem ipsum dolor sit amet ?</p>
          <p className="opacity-50 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id enim porta, ornare leo a, interdum sem. Donec fermentum magna in sodales fermentum. Aenean nec felis in tellus accumsan tincidunt id ut mi. Praesent ut justo congue, vehicula eros in, volutpat velit. Aliquam feugiat vestibulum nisi vel ornare.</p>
        </div>
      </div>
    </div>
  )
}