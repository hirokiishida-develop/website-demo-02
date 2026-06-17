import Container from "@/layouts/Container";
import Caption from "@/components/Caption";
import AboutCard from "@/components/AboutCard";
import ImageCard from "@/components/ImageCard";

export default function Home() {
  return (
    <>
      <section>
        <Container>
          <h1 className="text-[55px] md:text-[clamp(55px,calc((122px/800px)*100vw),122px)] xl:text-[clamp(122px,calc((200px/1280px)*100vw),200px)] font-display tracking-widest leading-[1.45] md:leading-[1.2] text-center break-words">NONSENSE</h1>
          <div className="flex justify-between px-7.5 mt-6">
            <Caption text="A new fashion company" />
            <Caption text="@nonsensefashion" />
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-2.5">
            <AboutCard heading="What:">
              <p className="md:text-[24px] xl:text-[36px] font-sans tracking-[-0.02em] font-bold leading-[1.1] text-center">ARCHIVE<br />SALE</p>
            </AboutCard>
            <AboutCard className="border-y md:border-y-0 md:border-x border-solid border-black" heading="When:">
              <p className="text-[36px] font-sans tracking-[-0.02em] font-bold leading-[1.1] text-center">MAY 11th<br />11AM-6PM</p>
            </AboutCard>
            <AboutCard heading="Where:">
              <p className="md:text-[24px] xl:text-[36px] font-sans tracking-[-0.02em] font-bold leading-[1.1] text-center">123 CANDYLAND LN, <br />PORTLAND, OR</p>
            </AboutCard>
          </div>
        </Container>
      </section>

      <section>
        <Container>
          <div className="flex flex-row flex-wrap gap-2.5 pb-14 md:pb-28">
            <ImageCard url="" img="banner_image_01" alt="banner_image_01" />
            <ImageCard url="" img="banner_image_02" alt="banner_image_02" />
            <ImageCard url="#" img="banner_image_03" alt="banner_image_03" />
            <ImageCard url="" img="banner_image_04" alt="banner_image_04" />
            <ImageCard url="" img="banner_image_05" alt="banner_image_05" />
            <ImageCard url="" img="banner_image_06" alt="banner_image_06" />
            <ImageCard url="" img="banner_image_07" alt="banner_image_07" />
            <ImageCard url="" img="banner_image_08" alt="banner_image_08" />
            <ImageCard url="" img="banner_image_09" alt="banner_image_09" />
            <ImageCard url="#" img="banner_image_10" alt="banner_image_10" />
            <ImageCard url="" img="banner_image_11" alt="banner_image_11" />
            <ImageCard url="#" img="banner_image_12" alt="banner_image_12" />
            <ImageCard className="lg-wide" url="" img="banner_image_13" alt="banner_image_13" />
            <ImageCard className="lg-wide" url="" img="banner_image_14" alt="banner_image_14" />
          </div>
          <p className="text-[28px] md:text-[38px] xl:text-[60px] font-sans tracking-[-0.01em] font-bold leading-[1.2] text-center"> Nonsense is a rebellion against the ordinary. No trends, no seasons—just wearable statements.</p>
        </Container>
      </section>
    </>
  );
}
