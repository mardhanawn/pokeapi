import Image from "next/image";

export default function Landing() {
  return (
    <div className="p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col basis-1/2 gap-y-5">
          <div className="text-6xl font-bold w-8/12 leading-tight">{`All the Pokemon data you'll ever need in one place!`}</div>
          <div className="text-2xl">Thousands of data compiled into one place</div>
          <button className="px-5 py-2 text-2xl text-white font-semibold w-fit bg-[#e6ab09] rounded-md">Check PokeDex</button>
        </div>
        <div className="basis-1/2">
          <Image
            src="/pokemon.png"
            alt="Pokemon Landing"
            width={600}
            height={100}
            priority
          />
        </div>
      </div>
    </div>
  );
}
