import { Poppins } from "next/font/google";

interface ButtonProps {
    text: string;
    onClick?: () => void;
    className: string;
}

const poppins = Poppins({
    subsets: ['latin'],
    weight: ['700', '600', '500', '400', '300'],
    variable: '--font-poppins'
});

const Button = ({ text, onClick, className }: ButtonProps) => {
    return (
        <button onClick={onClick} className={`font-semibold cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
  border-blue-600 h-[46px] inline-flex items-center justify-center
  border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
  active:border-b-[2px] active:brightness-90 active:translate-y-[2px]
  ${poppins.className} ${className}`}>
            {text}
        </button>
    );
};

export default Button;