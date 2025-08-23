import LOGO from "../../assets/Logo Wrapper.svg"

export default function Footer() {
    return (
        <footer id="aboutUs" className="text-[#FFFFFF] pt-16 px-8 md:px-4 xl:px-0 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10 text-sm md:text-base">
                {/* Contact Section */}
                <div className="flex flex-col gap-10">
                    <div>
                        <h3 className="text-2xl font-medium mb-4">Contact</h3>
                        <p className="mb-2 font-light">Work inquires: <a href="mailto:work@vaultflow.com" className="hover:underline">work@vaultflow.com</a></p>
                        <p className="mb-2 font-light">PR and speaking: <a href="mailto:press@vaultflow.com" className="hover:underline">press@vaultflow.com</a></p>
                        <p className="font-light">New business: <a href="mailto:newbusiness@vaultflow.com" className="hover:underline">newbusiness@vaultflow.com</a></p>
                    </div>

                    {/* Careers */}
                    <div>
                        <h3 className="text-2xl font-medium mb-4">Careers</h3>
                        <p><a href="mailto:careers@vaultflow.com" className="hover:underline">Careers@vaultflow.com</a></p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    {/* Address */}
                    <div>
                        <h3 className="text-2xl font-medium mb-4">Address</h3>
                        <p className="mb-1">398 11th Street, Floor 2</p>
                        <p>San Francisco, CA 94103</p>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="text-2xl font-medium mb-4">Social</h3>
                        <ul className="space-y-2 font-light">
                            <li><a href="#" className="hover:underline">Twitter</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">Tik Tok</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Footer Bottom */}
            <div className="flex gap-4 flex-col-reverse pt-10 items-center md:flex-row justify-between ">
                <p className="font-light text-center text-xs sm:text-base text-[#939393]">© 2023 Vaultflow. All Rights Reserved.</p>
                <div className="flex items-center space-x-2 mt-4 md:mt-0">
                    <img src={LOGO} alt="Vaultflow" />
                </div>
            </div>
        </footer>
    );
}
