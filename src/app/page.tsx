import Image from "next/image";
export default function Home() {
  return (
      <main className="flex min-h-screen w-full flex-col items-center justify-between py-10 px-16 bg-white bg-black sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold tracking-tight text-black">
            Welcome to Taniti
          </h1>
            <h3 className="text-l">Romance and Adventure Await</h3>
        </div>
      </main>
  );
}
