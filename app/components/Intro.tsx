import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Intro: React.FC = () => {
    return (
        <div className="flex flex-col gap-4 items-center">
            <div className="w-[75px] h-[75px] rounded-full border-[#ddd] border-2 overflow-hidden">
                <div
                    className="w-full h-full bg-center bg-cover"
                    style={{
                        backgroundImage: "url('/myImage.png')"
                    }}
                />
            </div>
            <p className="text-center text-sm md:text-2xl">
                <span className="font-bold"
                >{"Hello, I'm Innocent. "}
                </span>
                {"I'm a "}
                <span className="font-bold"
                >{"Full stack Developer "}
                </span>
                {"with 2 years of experience. "}
                <br className="hidden md:block" />
                <span>
                    I excel at creating dynamic and interactive web applications.
                    <br />My focus is React
                    <span className="font-bold"
                    >(Next.js)
                    </span>
                </span>
            </p>
            <div className="flex flex-col gap-2 md:flex-row items-center">
                <Link href="/contact" className="bg-[#0E1D33] text-[#fff] font-semibold border rounded-full p-2 px-4">Contact me</Link>
                <a href="/resumee.pdf" className="bg-[#fff] text-[#0E1D33] font-semibold border rounded-full p-2 px-4 " target="_blank">Dowmload Cv</a>
                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center rounded-full cursor-pointer"
                    href="https://github.com/Innocent259"
                    target="_blank"
                >
                    <FaGithub />
                </a>
                <a
                    className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center rounded-full cursor-pointer"
                    href="https://www.linkedin.com/in/innocent259/"
                    target="_blank"
                >
                    <FaLinkedin />
                </a>
            </div>
        </div>
    )


}

export default Intro;