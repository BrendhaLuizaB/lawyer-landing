import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

function Card({title, description, imageSrc}: CardProps) {
  return (
    <div>
      <Image width={405} height={405} alt="" src={imageSrc} />
      <div>
        <h2 className="mt-6 font-02 font-medium text-md">{title}</h2>
        <p className="font-02 text-xs text-subtitle">{description}</p>
      </div>
    </div>
  );
}

export default Card;
