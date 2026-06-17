import Image from "next/image";
import Link from "next/link";

type ImageCardProps = {
  className?: string
  img: string
  url: string
  alt: string
}

export default function ImageCard({ className = '', url, img, alt }: ImageCardProps){
  return (
    <div className={`md:w-[calc((100%-10px)/2)] xl:w-[calc((100%-20px)/3)] animation-rotate ${className}`}>
      {url ?
        <Link href={url}>
          <figure>
            <picture>
              <source media="(min-width: 1280px)" srcSet={`/images/${img}_pc.webp`} />
              <source media="(min-width: 768px)" srcSet={`/images/${img}_tab.webp`} />
              <Image src={`/images/${img}_sp.webp`} alt={alt} width={750} height={500} />
            </picture>
          </figure>
        </Link>
        :
        <figure>
          <picture>
            <source media="(min-width: 1280px)" srcSet={`/images/${img}_pc.webp`} />
            <source media="(min-width: 768px)" srcSet={`/images/${img}_tab.webp`} />
            <Image src={`/images/${img}_sp.webp`} alt={alt} width={750} height={500} />
          </picture>
        </figure>
      }
    </div>
  );
}