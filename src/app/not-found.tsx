import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5">
      <h2 className="text-5xl">404 | Not Found</h2>
      <p className="text-sm">Maaf, Halaman yang anda cari tidak tersedia</p>
      <Link
        href="/"
        className="flex w-full items-center justify-center gap-2 transition-all hover:gap-5"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Kembali
      </Link>
    </div>
  );
}
