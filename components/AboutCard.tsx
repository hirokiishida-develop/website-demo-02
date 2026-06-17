import Caption from "./Caption";

type AboutCardProps = {
  heading: string
  children: React.ReactNode
  className?: string;
}

export default function AboutCard({ heading, children, className = '' }: AboutCardProps) {
  return (
    <div className={`flex flex-col items-center justify-center gap-y-5 md:gap-y-7.5 h-40 md:h-63.5 xl:h-[414px] ${className}`}>
      <Caption text={heading} />
      {children}
    </div>
  );
}