import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/svg/Logo_Oriana_Primaire_Noir.svg"
      alt="Oriana Solutions"
      width={1262}
      height={372}
      className="w-36 xl:w-44 2xl:w-48 h-auto"
      priority
    />
  );
}
