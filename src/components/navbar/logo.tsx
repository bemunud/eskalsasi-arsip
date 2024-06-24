import Link from "next/link";
import Image from "next/image";

export default function LogoNavbar() {
  return (
    <Link href={"/"} className="flex items-center gap-4">
      <Image
        src={"/logo-brand.svg"}
        alt="N"
        className="w-10"
        width={32}
        height={32}
        priority
      />
      <span className="text-xl font-semibold hidden lg:inline">
        BEM Udayana
      </span>
    </Link>
  );
}
