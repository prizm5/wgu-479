import Image from "next/image";
import { HeroSection, PictureCard } from "../shared";

export default function Entertainment() {
  return (
    <main className="w-full bg-white">
      <HeroSection
        backgroundImage="./images/entertainment.jpeg"
        title="Entertainment"
        subtitle="Life is too short to stay inside"
      />
      
      <section className="bg-white px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <PictureCard 
                title="On the Water"
                description="Enjoy a variety of water-based activities including kayaking, paddleboarding, and snorkeling in the crystal-clear waters surrounding Taniti Island."
                img="./images/on-the-water.jpeg"
            />

            <PictureCard
              title="Get your heart pumping"
              description="Experience thrilling adventures such as zip-lining through lush forests, hiking scenic trails, and exploring the island's rugged terrain."
              img="./images/get-your-heart-pumping.jpeg"
            />

            <PictureCard
              title="Casual Fun"
              description="Relax and unwind with beach volleyball, picnics by the shore, and casual strolls along the island's beautiful beaches."
              img="./images/casual-fun.jpeg"
            />  

            <PictureCard
              title="Art & History"
              description="Discover the rich cultural heritage of Taniti Island through its art galleries, historical sites, and local museums."
              img="./images/art-and-history.jpeg"
            />
            
          </div>
        </div>
      </section>
    </main>
  );
}
