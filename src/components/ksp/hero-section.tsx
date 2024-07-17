import Image from "next/image";

export default function JumbotronSPI() {
return (
    <section className="flex h-full w-full flex-col items-center justify-center overflow-hidden xl:h-[48rem]">
        <div className="relative h-auto w-full rounded-lg overflow-hidden shadow-lg">
            <Image
                src={`/cover/ksp.png`}
                width={1980}
                height={1020}
                alt="cover"
                className="h-auto w-full filter brightness-75"
            />
            <div className="absolute inset-0 w-2/3 bg-stone-700 bg-opacity-20 backdrop-blur-xl"></div>
        </div>
    </section>
);
}
