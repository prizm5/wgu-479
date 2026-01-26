import Image from "next/image";
import { PictureCard } from "../shared";

export default function GettingAround() {
  return (
    <main className="w-full bg-white">
      <section
        style={
            {
                backgroundImage:"url(./images/road.jpeg)",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover", 
                backgroundPosition:"center"
            }} 
        className="min-h-[400px] w-full items-center justify-center px-8 py-10 text-sand">
        <div className="relative z-10 text-center">
          <h1 className="mt-62 text-4xl font-bold tracking-tight">
            Getting Around
          </h1>
          <p className="text-lg">Choose your own adventure</p>
        </div>
      </section>

      <section className="bg-white px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <PictureCard 
                title="Public Buses"
                description="Affordable and convenient private bus services connect major destinations across the island, making it easy to explore Taniti at your own pace."
                img="./images/bus.jpeg"
            />  
            <PictureCard 
                title="Private Buses"
                description="Private bus services offer a comfortable and efficient way to travel between key locations on Taniti Island, perfect for groups and families."
                img="./images/private-bus.jpeg"
            />  

            <PictureCard
                title="Taxis"
                description="Taxis are readily available throughout Taniti Island, providing a quick and convenient way to reach your destination with ease."
                img="./images/transportation.jpeg"
            />

            <PictureCard
                title="Rental Cars"
                description="Rental cars offer flexibility and freedom to explore Taniti Island at your own pace, with a variety of options to suit your needs."
                img="./images/rental-car.jpeg"
            />

            <PictureCard
                title="Biking"
                description="Biking is a popular and eco-friendly way to explore Taniti Island, with scenic routes and bike rental options available."
                img="./images/biking.jpeg"
            />

            <PictureCard
                title="Walking"
                description="Walking is a great way to experience the natural beauty and local culture of Taniti Island up close."
                img="./images/walking.jpeg"
            />

          </div>
        </div>
      </section>
    </main>
  );
}
