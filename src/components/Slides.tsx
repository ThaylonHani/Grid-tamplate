import { Carousel } from "@mantine/carousel";

export function Slides() {
    
    return (
        <>
          <Carousel
          withIndicators
          draggable
          maw={"100%"}
          mah={"100%"}
          slideGap={10}
          height="100%"
          styles={
            {
              control: {
                color: "2a2a2a",
                backgroundColor: "var(--Yellow) !important",
                border:"var(--Orange)"
              },
              indicator: {
                backgroundColor: "var(--Yellow) !important",
                padding: "0.1rem",                
              }
              
            }
          }
        >
          <Carousel.Slide>
            <img
              src="/neonPunk/blondeWoman.jpeg"
              alt="Blonde Woman"
              className="max-h-full w-full rounded-xl"
            />
          </Carousel.Slide>

          <Carousel.Slide>
            <img
              src="/neonPunk/blueMan.jpeg"
              alt="Blue man with glasses holding bat "
              className="max-h-full w-full rounded-xl"
            />
          </Carousel.Slide>

          <Carousel.Slide>
            <img
              src="/neonPunk/curlyWoman.jpeg"
              alt="Curly woman with blue lipstick"
              className="max-h-full w-full rounded-xl"
            />
          </Carousel.Slide>

          <Carousel.Slide>
            <img
              src="/neonPunk/strongMan.jpeg"
              alt="Strong man with black jacket "
              className="max-h-full w-full rounded-xl"
            />
          </Carousel.Slide>
        </Carousel>
        <Carousel
          withIndicators
          draggable
          maw={"100%"}
          mah={"100%"}
          height="100%"
          slideGap={10}
          styles={
            {
              control: {
                color: "2a2a2a",
                backgroundColor: "var(--Purple) !important",
                border:"var(--Orange)"
              },
              indicator: {
                backgroundColor: "var(--Purple) !important",
                padding: "0.1rem",                
              }
              
            }
          }
        >
          <Carousel.Slide>
            <img
              src="/photographic/beardedMan.jpeg"
              alt=""
              className="max-h-full w-full rounded-xl"
            />
          </Carousel.Slide>

          <Carousel.Slide>
            <img
              src="/photographic/blueHairWoman.jpeg"
              alt=""
              className="max-h-full w-full rounded-xl"
            />
          </Carousel.Slide>

          <Carousel.Slide>
            <img
              src="/photographic/dog.jpeg"
              alt=""
              className="max-h-full w-full rounded-xl"
            />
          </Carousel.Slide>

          <Carousel.Slide>
            <img
              src="/photographic/Odin.jpeg"
              alt=""
              className="max-h-full w-full rounded-xl"
            />
          </Carousel.Slide>
          
        </Carousel>
        </>
    )
}