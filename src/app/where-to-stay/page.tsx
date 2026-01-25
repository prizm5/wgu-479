import Image from "next/image";

export default function WhereToStay() {
  return (
    <main className="w-full bg-white">
      <section
        style={
            {
                backgroundImage:"url(./images/hotel-paradise.jpeg)",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover", 
                backgroundPosition:"center"
            }} 
        className="min-h-[400px] w-full items-center justify-center px-8 py-10 text-sand">
        <div className="relative z-10 text-center">
          <h1 className="mt-62 text-4xl font-bold tracking-tight">
            Accommodations
          </h1>
          <p className="text-lg">Where to stay in Paradise</p>
        </div>
      </section>

      <section className="bg-white px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg bg-gray-50 shadow-sm">
              <div className="overflow-hidden relative flex h-64 items-center justify-center bg-gray-100">
                <img src="./images/hostels.jpeg" alt="Budget-Friendly Hostels" className="bg-gray-200 " />
              </div>
              <div className="p-10">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">Budget-Friendly Hostels</h3>
                <div className="space-y-2">
                    <p>
                        Explore our selection of budget-friendly hostels that offer comfort and community for travelers looking to save without sacrificing experience.
                    </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-50 shadow-sm">
              <div className="overflow-hidden relative flex h-64 items-center justify-center bg-gray-100">
                <img src="./images/family-owned.jpeg" alt="Family Owned" className="bg-gray-200 " />
              </div>
              <div className="p-10">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">Family Owned</h3>
                <div className="space-y-2">
                    <p>
                        Discover charming family-owned accommodations that provide a warm, personal touch and a chance to experience local culture and hospitality.
                    </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-50 shadow-sm">
              <div className="overflow-hidden relative flex h-64 items-center justify-center bg-gray-100">
                <img src="./images/city-inn.jpeg" alt="Bed & Breakfast" className="bg-gray-200 over
                 " />
              </div>
              <div className="p-10">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">Bed & Breakfast</h3>
                <div className="space-y-2">
                    <p>
                        Enjoy a cozy stay at our handpicked bed & breakfast establishments, where comfort meets charm and every morning starts with a delicious homemade breakfast.
                    </p>
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-lg bg-gray-50 shadow-sm">
              <div className="overflow-hidden relative flex h-64 items-center justify-center bg-gray-100">
                <img src="./images/mountain-retreat.jpeg" alt="Luxury Hotels" />
              </div>
              <div className="p-10">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">Luxury Hotels</h3>
                <div className="space-y-2">
                    <p>
                        Indulge in the finest accommodations with our selection of luxury hotels, offering unparalleled service, exquisite amenities, and breathtaking views for an unforgettable stay.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
