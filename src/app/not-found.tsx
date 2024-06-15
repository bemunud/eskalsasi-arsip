import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center gap-5">
      <h2 className="text-5xl">404 | Not Found</h2>
      <p className="text-sm">Maaf, Halaman yang anda cari tidak tersedia</p>
      <Link href="/" className="flex justify-center items-center w-full gap-2 hover:gap-5 transition-all">
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Kembali
      </Link>
    </div>
  );
}
