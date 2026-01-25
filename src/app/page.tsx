import Image from "next/image";

const image_placeholder = (
  <svg className="h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
  </svg>
);

const HotelCard = () => (
<div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <div className="flex h-32 items-center justify-center bg-gray-100">
                {image_placeholder}
                </div>
                <div className="p-4">
                  <div className="mb-2 space-y-2">
                    <div className="h-3 w-3/4 rounded bg-gray-200"></div>
                    <div className="h-2 w-full rounded bg-gray-100"></div>
                    <div className="h-2 w-full rounded bg-gray-100"></div>
                    <div className="h-2 w-2/3 rounded bg-gray-100"></div>
                  </div>
                  <div className="mt-4 h-8 w-24 rounded bg-gray-300"></div>
                </div>
              </div>
)

interface NavCardProps {
  title: string;
  description: string;
}

const NavCard: React.FC<NavCardProps> = ({ title, description }) => (

          <div className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-20 w-20">
              {image_placeholder}
            </div>
            <a href="/getting-around"><h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3></a>
            <div className="mx-auto mb-3 h-0.5 w-24 bg-gray-300"></div>
            <p className="text-sm text-gray-600"> {description} </p>
          </div>
);
export default function Home() {
  return ( 
    <main className="w-full bg-white">
      <section id="welcome-section" style={{backgroundImage:"url(./images/taniti-welcome.png"}} className="relative min-h-[500px] w-full items-center justify-center px-8 py-10 text-sand">
        <div id="welcome" className="relative z-10 text-left">
          <h1 className="mb-2 text-5xl font-bold tracking-tight text-shadow-lg">
            Welcome to Taniti
          </h1>
          <p className="text-xl text-shadow-lg">Romance and Adventure Await</p>
        </div>
      </section>
      <section className="bg-white px-8 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-800">The Island</h2>
          <div className="mx-auto mb-4 h-1 w-64 bg-gray-300"></div>
          <p className="mx-auto max-w-2xl text-gray-600">
            Taniti is a small tropical island in the Pacific. While the island has an area of 
            less than 500 square miles, the terrain is varied and includes both sandy and rocky beaches, 
            a small but safe harbor, lush tropical rainforests, and a mountainous interior.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          <NavCard title="Exploring" description="Discover pristine beaches, rainforest trails, and breathtaking mountain vistas." />
          <NavCard title="Entertainment" description="Enjoy local restaurants, nightlife, cultural performances, and island festivals." />
          <NavCard title="Transportation" description="Easy access via our airport, plus convenient public buses, taxis, and rental options." />
        </div>
      </section>
      <section className="bg-gray-50 px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">Lodging</h2>
          
          <div className="relative">
            <button 
              className="absolute -left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100"
              aria-label="Previous"
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <HotelCard />
              <HotelCard />
              <HotelCard />
            </div>
            <button 
              className="absolute -right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white p-2 shadow-lg hover:bg-gray-100"
              aria-label="Next"
            >
              <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            <div className="h-3 w-3 rounded-full bg-gray-300"></div>
            <div className="h-3 w-3 rounded-full bg-gray-300"></div>
            <div className="h-3 w-3 rounded-full bg-gray-300"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
