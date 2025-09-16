import Image from "next/image";
import clsx from "clsx";

export default function IPhonePhone({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={366}
      height={729}
      className={clsx(
        "block mx-auto rounded-[30px] border-[6px] border-gray-300 bg-black aspect-[9/19.5] max-w-[320px] min-w-[220px] transition-all duration-500",
        className
      )}
      style={{
        display: "block",
        boxShadow: "0 8px 32px 0 rgba(255, 255, 255, 0.268)", // Aumenta la opacidad y el spread para que se note más
        borderRadius: "30px",
        border: "1px solid #d1d5db",
        background: "#000",
        aspectRatio: "9/19.5",
        maxWidth: "320px",
        minWidth: "220px",
      }}
    />
  );
}
