import Image from "next/image";

interface ReviewProps {
    image: string;
    name: string;
    text: string;
}

const Review = ({ image, name, text }: ReviewProps) => {
    return (
        <div className="px-20 py-10 rounded-4xl bg-gradient-to-r from-[#2dd1d7] to-[#088bb6] shadow-2xl duration-700 flex justify-between items-center gap-10">
            <Image
                src={image}
                alt="Review"
                width={120}
                height={120}
            />
            <div className="flex flex-col gap-2 text-white">
                <h3 className="text-2xl font-semibold">{name}</h3>
                <p className="w-lg">{text}</p>
            </div>
        </div>
    );
};

export default Review;