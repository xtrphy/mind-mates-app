import Image from "next/image";

interface ReviewProps {
    image: string;
    name: string;
    text: string;
}

const Review = ({ image, name, text }: ReviewProps) => {
    return (
        <div className="px-20 py-5 rounded-4xl shadow-2xl duration-700 flex justify-between items-center gap-10 border-2 border-[#B5AFAF]">
            <Image
                src={image}
                alt="Review"
                width={120}
                height={120}
            />
            <div className="flex flex-col gap-2 text-white">
                <h3 className="text-[#1A1A1A] text-2xl font-semibold">{name}</h3>
                <p className="text-[#999AA1] w-lg">{text}</p>
            </div>
        </div>
    );
};

export default Review;