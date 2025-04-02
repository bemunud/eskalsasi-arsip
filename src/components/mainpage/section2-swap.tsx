import { AuroraText } from "../magicui/aurora-text";

export default function InformantBem() {
  return (
    <>
      <section className="container flex w-full flex-col items-center justify-center gap-2 h-screen">
        <h2 className="max-w-screen-md text-center text-3xl font-extrabold text-black md:text-4xl lg:max-w-screen-lg lg:text-5xl">
          Kebebasan <span className="text-red-600">Akademik</span> Harga Mati, Lawan <AuroraText>Militerisme</AuroraText> Masuk Kampus!
        </h2>
      </section>
    </>
  );
}
