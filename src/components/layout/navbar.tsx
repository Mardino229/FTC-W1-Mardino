import {useState} from "react";
import LOGO from "../../assets/Logo Wrapper.svg"
import Menu from "../../assets/Menu.svg"
import X from "../../assets/X.svg"
export default function Navbar() {
    const links = [
        { href: "#features", label: "Features" },
        { href: "#pricing", label: "Pricing" },
        { href: "#aboutUs", label: "About Us" },
    ];
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="sticky top-0 w-full bg-[#0B0121] z-40 border-b">
            <div className="container mx-auto max-w-7xl ">
                <div className="flex items-center justify-between h-16 px-6">
                    <a href="/">
                        <div
                            // whileHover={{ scale: 1.05 }}
                            className="text-2xl font-bold text-primary cursor-pointer"
                        >
                            <img src={LOGO} className="w-36 h-8 m-0 p-0" alt="Vaultflow" />
                        </div>
                    </a>
                    <div className="hidden text-base md:flex items-center gap-8">
                        {links.map((link) => (
                            <a key={link.label} className="text-[#ECECEC] font-medium cursor-pointer" href={link.href}>{link.label}</a>
                        ))}
                        <button className="cursor-pointer py-2 px-5 bg-[#ECECEC] text-[#0B081C] rounded-full">
                            Download the app
                        </button>
                        <button className="cursor-pointer py-2 px-5 border text-[#ECECEC] border-[#ECECEC] rounded-full">
                            Talk to an expert
                        </button>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="font-medium bg-[#20035E] cursor-pointer rounded-md px-3 py-2.5"
                        >
                            {isOpen
                                ? <img src={X} alt="Fermer le menu" />
                                : <img src={Menu} alt="Ouvrir le menu" />
                            }
                        </button>
                    </div>
                </div>
                {isOpen && (
                    <div
                        // initial={{ opacity: 0, y: -20 }}
                        // animate={{ opacity: 1, y: 0 }}
                        // exit={{ opacity: 0, y: -20 }}
                        className="md:hidden flex flex-col justify-between min-h-[calc(100dvh-4rem)] py-5 px-6"
                    >
                            <div className="flex text-[#ECECEC] flex-col gap-4">
                                {links.map((link) => (
                                    <a className="font-medium text-2xl" key={link.href} href={link.href}>
                                        <a
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </a>
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
    )
}