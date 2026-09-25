import Image from "next/image";

type DuotoneImageProps = {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
  preload?: boolean;
};

/**
 * Stock photo tinted with the brand gradient so images from different
 * photographers read as one set. Inside a `group`, hovering fades in the
 * original colors.
 */
export function DuotoneImage({
  src,
  alt,
  sizes,
  className,
  preload,
}: DuotoneImageProps) {
  return (
    <div className={`duotone relative overflow-hidden ${className ?? ""}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        preload={preload}
        className="duotone-base object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <Image
        src={src}
        alt=""
        aria-hidden
        fill
        sizes={sizes}
        className="duotone-color object-cover transition-[opacity,transform] duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
      />
    </div>
  );
}
