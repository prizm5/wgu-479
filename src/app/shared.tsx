
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