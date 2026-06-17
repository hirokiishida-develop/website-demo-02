type ContainerProps = {
  children: React.ReactNode
}

export default function Container({ children }: ContainerProps){
  return(
    <div className="px-2.5">
      {children}
    </div>
  );
}