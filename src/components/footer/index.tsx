import FooterMenu from "./footer-menu";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <section className="">
      <div className="flex container flex-col md:flex-row py-5">
        <div className="bg-inherit w-full grid gap-4">
          <span className="flex items-center space-x-3">
            <Image
              src={"./logo-brand.svg"}
              alt="logo brand"
              width={32}
              height={32}
              className="w-10"
              priority
              draggable="false"
            />
            <label
              htmlFor="logo"
              className="text-lg font-bold hidden md:inline"
            >
              Badan Eksekutif Mahasiswa Universitas Udayana
            </label>
          </span>
          <p className="text-sm font-medium">Kunjungi akun sosial media kami</p>
          <div className="flex items-center gap-x-4">
            <Link href={"#"}>
              <FaXTwitter />
            </Link>
            <Link href={"#"}>
              <FaFacebook />
            </Link>
            <Link href={"#"}>
              <FaInstagram />
            </Link>
            <Link href={"#"}>
              <FaTelegramPlane />
            </Link>
          </div>
        </div>
        <div className="bg-pink-700 w-full">tes</div>
      </div>
      <FooterMenu />
    </section>
  );
}
