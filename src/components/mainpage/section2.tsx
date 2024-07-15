import NumberTicker from "../magicui/number-ticker";
export default function InformantBem() {
  return (
    <>
      <section className="container">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="text-center">
            <div className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black md:text-8xl">
              <NumberTicker value={294} />
            </div>
            <div>Orang</div>
          </div>
          <div className="text-center">
            <div className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black md:text-8xl">
              <NumberTicker value={23} />
            </div>
            <div>Kementerian</div>
          </div>
          <div className="text-center">
            <div className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black md:text-8xl">
              <NumberTicker value={6} />
            </div>
            <div>Biro</div>
          </div>
          <div className="text-center">
            <div className="whitespace-pre-wrap text-6xl font-medium tracking-tighter text-black md:text-8xl">
              <NumberTicker value={8} />
            </div>
            <div>Bidang Koordinator</div>
          </div>
        </div>
      </section>
    </>
  );
}
