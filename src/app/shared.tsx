
interface CardProps {
  title: string;
  description: string;
  img: string;
  img_alt?: string;
}
export const PictureCard: React.FC<CardProps> = ({ title, description, img, img_alt }) => (
    <div className="overflow-hidden rounded-lg bg-gray-50 shadow-sm">
        <div className="overflow-hidden relative flex h-64 items-center justify-center bg-gray-100">
        <img src={img} alt={img_alt} className="min-h-[300px]"/>
        </div>
        <div className="p-10">
        <h3 className="mb-4 text-lg font-semibold text-gray-800">{title}</h3>
        <div className="space-y-2">
            <p>
                {description}
            </p>
        </div>
        </div>
    </div>
)

export const HeroSection: React.FC<{backgroundImage: string; title: string; subtitle: string}> = ({backgroundImage, title, subtitle}) => (
      <section
        style={
            {
                backgroundImage:`url(${backgroundImage})`,
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover", 
                backgroundPosition:"center"
            }} 
        className="min-h-[400px] w-full items-center justify-center px-8 py-10 text-sand">
        <div className="relative z-10 text-center">
          <h1 className="mt-62 text-4xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="text-lg">{subtitle}</p>
        </div>
      </section>
)