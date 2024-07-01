import NumberTicker from "../magicui/number-ticker";
export default function InformantBem() {
  return (
    <>
      <section className="container">
        <div className="md:container">
          <div className="md:container flex flex-col gap-12 md:grid md:grid-cols-2 md:gap-24">
            <h2 className="font-extrabold text-3xl md:text-4xl text-black">
              Fakta Menarik Organisasi Ini
            </h2>
            <div className="flex flex-col justify-end text-start max-w-min bg-red-300 gap-y-5">
              <div className="">
                <div className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black">
                  <NumberTicker value={100} />
                </div>
                <div>Anggota</div>
              </div>
              <div className="">
                <div className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black">
                  <NumberTicker value={100} />
                </div>
                <div>Kementerian</div>
              </div>
              <div className="">
                <div className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black">
                  <NumberTicker value={100} />
                </div>
                <div>Biro</div>
              </div>
              <div className="">
                <div className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black">
                  <NumberTicker value={8} />
                </div>
                <div>Kemenkoan</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
