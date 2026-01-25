import Image from "next/image";

const image_placeholder = (
  <svg className="h-8 w-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
  </svg>
);


interface NavCardProps {
  title: string;
  description: string;
  img: string;
  img_alt?: string;
  url: string;
}

const NavCard: React.FC<NavCardProps> = ({ title, description, img, img_alt, url }) => (
  <div className="flex flex-col items-center text-center">
    <div className="mb-4 flex">
      <img src={`./images/${img}`} alt={img_alt} />
    </div>
    <a href={url} ><h3 className="mb-2 text-xl font-semibold text-gray-800">{title}</h3></a>
    <div className="mx-auto mb-3 h-0.5 w-24 bg-gray-300"></div>
    <p className="text-sm text-gray-600"> {description} </p>
  </div>
);

const HotelCard: React.FC<NavCardProps> = ({ title, description, img, img_alt, url }) => (
  <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
    <div className="bg-gray-100">
      <img src={`./images/${img}`} alt={title} className="w-100 h-40" />
    </div>
    <div className="p-2">
      <div>{description}</div>
      <div className=" p-1 mt-4 h-8 w-24 rounded bg-gray-300">Book Now</div>
    </div>
  </div>
)

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
          <NavCard title="Exploring" description="Discover pristine beaches, rainforest trails, and breathtaking mountain vistas." img="exploring.jpeg" img_alt="Exploring Icon" url="/sightseeing" />
          <NavCard title="Entertainment" description="Enjoy local restaurants, nightlife, cultural performances, and island festivals." img="entertainment.jpeg" img_alt="Entertainment Icon" url="/entertainment" />
          <NavCard title="Transportation" description="Easy access via our airport, plus convenient public buses, taxis, and rental options." img="transportation.jpeg" img_alt="Transportation Icon" url="/getting-around" />
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
              <HotelCard title="Hotel Paradise" description="Luxurious beachfront resort with stunning ocean views." img="hotel-paradise.jpeg" url="/hotel-paradise" />
              <HotelCard title="Mountain Retreat" description="Modern accommodations nestled in the mountains for a peaceful getaway." img="mountain-retreat.jpeg" url="/mountain-retreat" />
              <HotelCard title="City Inn" description="Conveniently located hotel in the heart of the island's main town." img="city-inn.jpeg" url="/city-inn" />
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
