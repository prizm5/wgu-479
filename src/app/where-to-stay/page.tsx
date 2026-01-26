import { Breadcrumbs, HeroSection, PictureCard } from "../shared"

export default function WhereToStay() {
  return (
    <main className="w-full bg-white">
      <HeroSection
        backgroundImage="./images/hotel-paradise.jpeg"
        title="Accommodations"
        subtitle="Where to stay in Paradise"
      />
      <div className="container mx-auto px-8 py-2">
        <Breadcrumbs label="Where to Stay" />
      </div>
      <section className="bg-white px-8 py-2">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <PictureCard 
                title="Budget-Friendly Hostels"
                description="Explore our selection of budget-friendly hostels that offer comfort and community for travelers looking to save without sacrificing experience."
                img="./images/hostels.jpeg"
            />  
            <PictureCard 
                title="Family Owned"
                description="Discover charming family-owned accommodations that provide a warm, personal touch and a chance to experience local culture and hospitality."
                img="./images/family-owned.jpeg"
            />
            <PictureCard
                title="Bed & Breakfast"
                description="Enjoy a cozy stay at our handpicked bed & breakfast establishments, where comfort meets charm and every morning starts with a delicious homemade breakfast."
                img="./images/city-inn.jpeg"    
            />
            <PictureCard
                title="Luxury Hotels"
                description="Indulge in the finest accommodations with our selection of luxury hotels, offering unparalleled service, exquisite amenities, and breathtaking views for an unforgettable stay."
                img="./images/mountain-retreat.jpeg"
            />
            
          </div>
        </div>
      </section>
    </main>
  );
}
