import Image from "next/image";
import { Breadcrumbs, HeroSection } from "../shared";

export default function GettingHere() {
  return (
    <main className="w-full bg-white">
      <HeroSection
        backgroundImage="./images/getting-here.jpeg"
        title="Getting Here"
        subtitle="Romance and Adventure Await"
      />
      <div className="container mx-auto px-8 py-2">
        <Breadcrumbs label="Getting Here" />
      </div>
      <section className="bg-white px-8 py-2">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg border border-gray-300 bg-white p-8">
              <h3 className="mb-6 text-center text-xl font-semibold text-gray-800">Air Travel</h3>
              
              <div className="mb-6 flex justify-center">
                <img src="./images/air-plane.jpeg" alt="Air Travel" className="bg-gray-200 " />
              </div>

              <div className="space-y-3">
                <p>
                    Taniti Airport is currently serviced by smaller jets and propeller planes, making it the most convenient way to reach the island.
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
                    A small cruise ship that docks in Yellow Leaf Bay for one night per week to Taniti Island offers a scenic and relaxing way to arrive. 
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <div className=" text-center h-8 w-32 rounded bg-gray-400">Book Now</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 px-8 py-2">
        <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">Traveler Tips</h2>
        <ul className="mx-auto mb-8 max-w-6xl space-y-4">
          <li className="list-disc px-4">
            Taniti enjoys a large number of national holidays, and many tourist attractions and restaurants will be closed on holidays.
          </li>
          <li className="list-disc px-4">
            The official languages of Taniti are Tanitian and English. Many locals also speak Japanese and Spanish.
          </li>
          <li className="list-disc px-4">
            Taniti uses the U.S. dollar as its currency, but many businesses will also accept euros and yen. 
            Several banks facilitate currency exchange, and many businesses accept major credit cards.
          </li> 
        </ul>
      </section>


    </main>
  );
}
