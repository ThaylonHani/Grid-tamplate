import { Carousel } from "@mantine/carousel";

export function Comments() {
    return (
<div className="row-start-3 col-start-1 col-span-2 row-span-2 flex justify-center select-none border-4 border-[var(--Purple)] rounded-xl">
      <Carousel
          withIndicators
          withControls={false}
          draggable
          maw={"100%"}
          mah={"100%"}
          height="100%"
          slideGap={5}
          styles={
            {
              indicator: {
                backgroundColor: "var(--Gray) !important",
                padding: "0.1rem",                
              }
              
            }
          }
        >
          <Carousel.Slide className="flex gap-4 items-center justify-center">
            <img
              src="/users/moustacheMan.jpeg"
              alt="Man with mustache and glasses"
              className="max-h-full w-16 rounded-full"
            />
            <section className="text-center flex flex-col gap-4 ">
            <h3 className="text-[var(--Orange)]">
              MoustacheMan
            </h3>
            <p className="text-[var(--Gray)]">
            My user photo was created by artificial intelligence
            </p>
            </section>
          </Carousel.Slide>          
          <Carousel.Slide className="flex gap-4 items-center justify-center">
            <img
              src="/users/evilHero.jpeg"
              alt="black cape villain"
              className="max-h-full w-16 rounded-full"
            />
            <section className="text-center flex flex-col gap-4 ">
            <h3 className="text-[var(--Orange)]">
              EvilHero
            </h3>
            <p className="text-[var(--Gray)]">
            My user photo was created by ClipDrop
            </p>
            </section>
          </Carousel.Slide>          
        </Carousel>
      </div>
    )
}