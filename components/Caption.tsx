type CaptionProps = {
  text: string
}

export default function Caption({ text }: CaptionProps){
  return (
    <p className="text-[12px] md:text-[14px] tracking-[-0.02em] leading-1.2">{text}</p>
  );
}