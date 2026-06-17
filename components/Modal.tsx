type ModalTextProps = {
  children: React.ReactNode
}

const ModalText = ({ children }: ModalTextProps) => {
  return (
    <p className="text-white font-[42px] md:text-[34px] xl:text-[42px] font-sans tracking-[-0.01em] font-semibold leading-[1.3] text-center">
      {children}
    </p>
  )
}

type ModalProps = {
  onClose: ()=> void
}

export default function Modal({ onClose }:ModalProps){
  return (
    <div className="fixed top-0 left-0 right-0 h-dvh pb-50 bg-black overflow-y-auto z-50">
      <div className="flex flex-col items-center gap-y-25 px-4 md:px-12.5 xl:px-20">
        <button className="w-50 bg-amber-700 cursor-pointer" onClick={onClose}>
          <img src="/images/icon_modal_close.svg" alt="modal close" />
        </button>
        <div className="flex flex-col gap-y-20">
            <ModalText>We make clothes for people who don’t care about fitting in. Inspired by chaos, creativity, and the absurdity of everyday life, Nonsense is a rebellion against the ordinary. No trends, no seasons—just wearable statements.</ModalText>
            <ModalText>Join us for our exclusive popup shop and experience the "Nonsense" aesthetic firsthand.</ModalText>
            <ModalText>Browse unique, limited-edition pieces. Venmo and cash accepted.</ModalText>
        </div>
      </div>
    </div>
  )
}