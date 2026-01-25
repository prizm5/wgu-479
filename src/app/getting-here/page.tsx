import Image from "next/image";

export default function GettingHere() {
  return (
    <main className="w-full bg-white">
      <section id="getting-here-section" 
        style={
            {
                backgroundImage:"url(./images/getting-here.jpeg)",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover", 
                backgroundPosition:"center"
            }} 
        className="min-h-[400px] w-full items-center justify-center px-8 py-10 text-sand">
        <div className="relative z-10 text-center">
          <h1 className="mt-62 text-4xl font-bold tracking-tight text-gray-800">
            Starting your journey
          </h1>
          <p className="text-lg text-gray-700">Romance and Adventure Await</p>
        </div>
      </section>

      <section className="bg-white px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-3xl font-bold text-gray-800">Travel Options</h2>
          <div className="mx-auto mb-12 h-1 w-48 bg-gray-300"></div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-gray-300 bg-white p-8">
              <h3 className="mb-6 text-center text-xl font-semibold text-gray-800">Air Travel</h3>
              
              <div className="mb-6 flex justify-center">
                <img src="./images/air-plane.jpeg" alt="Air Travel" className="bg-gray-200 " />
              </div>

              <div className="space-y-3">
                <p>
                    Flying into Taniti International Airport is the most convenient way to reach the island. With regular flights from major cities, you can be on the beach in no time.
                </p>
              </div>


              <div className="mt-6 flex justify-center">
                <div className="text-center h-8 w-32 rounded bg-gray-400">Book Now</div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-300 bg-white p-8">
              <h3 className="mb-6 text-center text-xl font-semibold text-gray-800">Cruising</h3>
              
              <div className="mb-6 flex justify-center">
                <img src="./images/cruise-ship.jpeg" alt="Cruising" className="bg-gray-200 " />
              </div>

              <div className="space-y-3">
                <p>
                    Cruising to Taniti Island offers a scenic and relaxing way to arrive. Enjoy the ocean views and onboard amenities as you sail to your destination.
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <div className=" text-center h-8 w-32 rounded bg-gray-400">Book Now</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
