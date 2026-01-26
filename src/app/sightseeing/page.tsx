import Image from "next/image";
import { Breadcrumbs, HeroSection, PictureCard } from "../shared";

export default function Sightseeing() {
  return (
    <main className="w-full bg-white">
      <HeroSection
        backgroundImage="./images/sightseeing.jpeg"
        title="Sightseeing"
        subtitle="Come see the many wonders"
      />
      <div className="container mx-auto px-8 py-2">
        <Breadcrumbs label="Sightseeing"/>
      </div>
      <section className="bg-white px-8 py-2">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <PictureCard 
              title="Taniti City"
              description="Explore the vibrant Taniti City, which boasts native architecture and nearby white, sandy beaches that encircle Yellow Leaf Bay."
              img="./images/taniti-city.jpeg"
            />

            <PictureCard
              title="Tours"
              description="Discover the best tours on Taniti Island, from guided cultural excursions to adventurous outdoor activities that showcase the island's natural beauty."
              img="./images/tours.jpeg"
            />

            <PictureCard 
              title="Hiking"
              description="Explore scenic hiking trails that wind through Taniti Island's diverse landscapes, offering breathtaking views and opportunities to connect with nature."
              img="./images/hiking.jpeg"
            />

            <PictureCard
              title="Natural Wonders"
              description="Discover the island's natural wonders, from stunning waterfalls to unique geological formations, perfect for nature lovers and adventure seekers."
              img="./images/natural-wonders.jpeg"
            />

          </div>
        </div>
      </section>
    </main>
  );
}
