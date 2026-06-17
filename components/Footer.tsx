import Link from "next/link";
import Container from "@/layouts/Container";

export default function Footer(){
  return(
    <footer className="pt-12 md:pt-22 pb-5">
      <Container>
        <div className="flex flex-col gap-y-11 px-7.5">
          <Link className="flex flex-col md:flex-row xl:flex-row-reverse items-center md:justify-end xl:justify-between gap-y-4 md:gap-x-10 xl:gap-x-[157px] py-5 md:py-0 px-2.5 md:px-0 border border-solid border-black" href="#">
            <p className="text-base md:text-2xl xl:text-4xl font-sans tracking-[-0.02em] font-bold leading-[1.1] text-center md:text-right xl:text-center md:w-[calc(100%-(157px+40px))] xl:w-[calc(100%-(157px))">Sign Up for our Newsletter</p>
            <figure className="md:w-[157px]">
              <picture>
                <source media="(min-width: 1280px)" srcSet="/images/icon_arrow_up_right_pc.svg" />
                <source media="(min-width: 768px)" srcSet="/images/icon_arrow_up_right_tab.svg" />
                <img src="/images/icon_arrow_up_right_sp.svg" alt="open link" />
              </picture>
            </figure>
          </Link>
          <figure>
            <picture>
              <source media="(min-width: 1280px)" srcSet="/images/cta_image_pc.webp" />
              <source media="(min-width: 768px)" srcSet="/images/cta_image_tab.webp" />
              <img className="w-full h-auto" src="/images/cta_image_sp.webp" alt="footer cta" />
            </picture>
          </figure>
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-10">
              <p className="text-base md:text-2xl xl:text-4xl font-sans tracking-[-0.02em] font-bold leading-[1.1] text-center">A Wearable Statements Pop Up</p>
              <h1 className="text-[46px] md:text-[clamp(46px,calc((112px/800px)*100vw),112px)] xl:text-[clamp(112px,calc((182px/1280px)*100vw),182px)] font-sans tracking-[0.1em] font-black leading-[1.2] text-center">NONSENSE</h1>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between gap-y-1.5">
              <p className="text-[13px] text-[20px] font-sans tracking-[-0.04em] font-extrabold leading-[1.2]">Nonsense© 2025 All Rights <br className="hidden md:block xl:hidden" />Reserved</p>
              <p className="text-[13px] text-[20px] font-sans tracking-[-0.04em] font-extrabold leading-[1.2]">@nonsenseFashion</p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}