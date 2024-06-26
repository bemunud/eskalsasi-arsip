import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";
import { DEPARTEMEN } from "@/scripts";

const firstRow = DEPARTEMEN.slice(0, DEPARTEMEN.length / 2);
const secondRow = DEPARTEMEN.slice(DEPARTEMEN.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]"
        // dark styles
        // "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium">{name}</figcaption>
          <p className="text-xs font-medium">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export default function MarqueeSlider() {
  return (
    <section className="w-full flex flex-col gap-4 container">
      <h2 className="font-extrabold text-4xl text-center text-black">
        Lanskap Kementerian & Biro BEM Udayana
      </h2>
      <h2 className="font-extrabold text-lg text-center text-slate-400">
        Terdapat beberapa kementerian dan biro diberbagai bidang yang hadir di BEM Udayana saat ini
      </h2>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-12 bg-primary ">
        <Marquee pauseOnHover className="[--duration:20s]">
          {firstRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className="[--duration:20s]">
          {secondRow.map((review) => (
            <ReviewCard key={review.username} {...review} />
          ))}
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#f6fafe]"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#f6fafe]"></div>
      </div>
    </section>
  );
}
