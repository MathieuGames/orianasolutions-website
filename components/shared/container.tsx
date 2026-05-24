interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  parentStyle?: string;
}

export default function Container({
  children,
  className = "",
  parentStyle = "",
}: ContainerProps) {
  return (
    <div className={parentStyle}>
      <div
        className={`w-full px-[27px] py-[55px] md:px-10 xl:px-20 2xl:px-34 xl:py-[70px] max-w-[2040px] mx-auto ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
