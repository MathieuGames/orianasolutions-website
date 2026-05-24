interface TagProps {
  children: string;
}

export default function Tag({ children }: TagProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-black/10 px-4.5 py-1.5 text-sm 3xl:text-base font-medium leading-none tracking-tight">
      {children}
    </div>
  );
}
