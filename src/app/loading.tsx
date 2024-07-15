import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className="flex h-screen w-full flex-col items-center justify-center">
      <Image
        src="/logoeskalasi-svg.svg"
        alt="loading"
        width={50}
        height={50}
        className="animate-spin rounded-lg"
      />
    </section>
  );
}
