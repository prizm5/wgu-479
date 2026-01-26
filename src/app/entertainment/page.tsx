import Image from "next/image";
import { Breadcrumbs, HeroSection, PictureCard } from "../shared";

export default function Entertainment() {
  return (
    <main className="w-full bg-white">
      <HeroSection
        backgroundImage="./images/entertainment.jpeg"
        title="Entertainment"
        subtitle="Life is too short to stay inside"
      />
      <div className="container mx-auto px-8 py-2">
        <Breadcrumbs label="Entertainment" />
      </div>
      <section className="bg-white px-8 py-2">
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
              description="Relax and unwind at the beach, visit several pubs, including a microbrewery, dance at a new dance club,  playing at an arcade, visiting art galleries, and bowling"
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
