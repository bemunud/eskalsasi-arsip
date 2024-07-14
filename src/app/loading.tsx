import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className="h-screen w-full flex flex-col justify-center items-center">
      <Image
        src="/logoeskalasi-svg.svg"
        alt="loading"
        width={50}
        height={50}
        className="rounded-lg animate-spin"
      />
    </section>
  );
}
