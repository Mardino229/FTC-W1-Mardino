import { useState } from "react";
import LOGO from "../../assets/Logo Wrapper.svg";
import Menu from "../../assets/Menu.svg";
import X from "../../assets/X.svg";

export default function Navbar() {
    const links = [
        { href: "#features", label: "Features" },
        { href: "#pricing", label: "Pricing" },
        { href: "#aboutUs", label: "About Us" },
    ];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 w-full bg-[#0B0121] z-40">
            <div className="container mx-auto max-w-7xl ">
                <div className="flex items-center justify-between h-16 px-6">
                    {/*Logo*/}
                    <a href="#hero">
                        <div className="text-2xl animate-jump-in font-bold text-primary cursor-pointer">
                            <img
                                src={LOGO}
                                className="w-36 h-8 m-0 p-0"
                                alt="Vaultflow"
                            />
                        </div>
                    </a>
                    <div className="hidden animate-fade-left text-base lg:flex items-center gap-8">
                        {/*Link Menu*/}
                        {links.map((link) => (
                            <a
                                key={link.label}
                                className="text-[#ECECEC] font-medium cursor-pointer"
                                href={link.href}
                            >
                                {link.label}
                            </a>
                        ))}
                        <button className="cursor-pointer py-2 px-5 bg-[#ECECEC] text-[#0B081C] rounded-full">
                            Download the app
                        </button>
                        <button className="cursor-pointer py-2 px-5 border text-[#ECECEC] border-[#ECECEC] rounded-full">
                            Talk to an expert
                        </button>
                    </div>
                    <div className="lg:hidden animate-fade-left">
                        {/*Open or Close Menu Button*/}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="font-medium bg-[#20035E] cursor-pointer rounded-md px-3 py-2.5"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <img src={X} alt="Fermer le menu" />
                            ) : (
                                <img src={Menu} alt="Ouvrir le menu" />
                            )}
                        </button>
                    </div>
                </div>
                {/*Menu Mobile*/}
                {isOpen && (
                    <div
                        className={`lg:hidden animate-slide-in-from-left fixed top-16 left-0 w-screen min-h-[calc(100dvh-4rem)] bg-[#0B0121] text-[#ECECEC] flex flex-col justify-between py-5 px-6 shadow-lg z-50`}
                    >
                        <div className="flex flex-col gap-4">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="font-medium text-2xl"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <button className="cursor-pointer py-2 px-5 border text-[#ECECEC] border-[#ECECEC] rounded-full">
                            Talk to an expert
                        </button>
                    </div>
                )}

            </div>

        </nav>
    );
}
