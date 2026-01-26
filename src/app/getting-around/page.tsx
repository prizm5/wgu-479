import Image from "next/image";
import { Breadcrumbs, HeroSection, PictureCard } from "../shared";

export default function GettingAround() {
  return (
    <main className="w-full bg-white">
        <HeroSection
        backgroundImage="./images/road.jpeg"
        title="Getting Around"
        subtitle="Choose your own adventure"
      />
      <div className="container mx-auto px-8 py-2">
        <Breadcrumbs label="Getting Around" />
      </div>
      <section className="bg-white px-8 py-2">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <PictureCard 
                title="Public Buses"
                description="Affordable and convenient private bus services connect major destinations across the island, making it easy to explore Taniti at your own pace. Public buses serve Taniti City and run from 5 a.m. to 11 p.m. every day"
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
                description="Rental cars offer flexibility and freedom to explore Taniti Island at your own pace and can be rented from a local rental agency near the airport."
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
