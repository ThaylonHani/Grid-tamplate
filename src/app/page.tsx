"use client";

import { Comments } from "@/components/Comments";
import { Header } from "@/components/Header";
import { Slides } from "@/components/Slides";
// import { Indicator, rem } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function Home() {
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnLastSnap: true, stopOnInteraction: false })
  );
  const autoplay2 = useRef(
    Autoplay({ delay: 3000, stopOnLastSnap: true, stopOnInteraction: false })
  );

  return (
    <div className="grid grid-cols-4 grid-rows-3 w-screen h-screen gap-y-1  ">
    <Header/>
      <div className=" row-span-2 col-span-2 col-start-3 relative max-w-full ">
        <img
          src="/virtualImage.jpeg"
          alt="Street with people walking"
          className="max-h-full w-full bg-center rounded-xl"
        />
        <section className="flex top-0 bottom-0 left-0 right-0 absolute items-center justify-center bg-[rgba(0,0,0,0.5)] w-full h-1/2 m-auto backdrop-blur-sm">
          <h1 className="text-[var(--Yellow)] border-b border-[var(--Orange)] w-full text-center ">
            Visite our website for more images.
          </h1>
        </section>
        <section className="flex top-0 absolute items-center justify-between w-full">
          <img src="/logo.png" alt="" className="w-16" />
          <h3 className="text-[#2a2a2a] text-center rounded-xl p-2 bg-[var(--Green)]  ">
            Best Images
          </h3>
        </section>
      </div>
      <main className="row-start-1 col-start-2 flex flex-col gap-y-1">
      
      <Slides/>
       
      </main>
      <section className="row-start-2 col-start-1">
      <img
          src="landscape/globe.jpeg"
          alt=""
          className="max-h-full w-full rounded-xl"
        />
      </section>
      <aside  className="row-start-3 row-end-4 row-span-1 col-start-3 col-end-5  flex gap-y-1">
     
      <img
          src="landscape/rioDeJaneiro.jpeg"
          alt="A image of Rio de Janeiro"
          className="max-h-full w-full rounded-xl"
        />
        
          <img
              src="/lowPoly/beautifulCrow.jpeg"
              alt="A lowPoly image of crow"
              className="max-h-full w-full rounded-xl"
            />
          
      </aside>
      
      <Comments/>

    </div>
  );
}
