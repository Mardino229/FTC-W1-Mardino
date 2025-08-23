import heroImage from"../../assets/bghero.svg";

export default function Hero() {

    return (
        <div id="hero" className="md:max-w-5xl max-w-4xl text-center mx-auto">
            {/* Banner */}
            <div className="inline-block mb-6 px-4 mx-4 text-xs sm:text-sm border border-[#FFFFFF] rounded-full md:text-lg text-[#F2F4F8] cursor-pointer">
                We just raised $20M in Series B. Learn more
            </div>

            {/* Heading */}
            <h1 className="text-3xl animate-fade-down sm:text-5xl md:text-7xl font-medium leading-tight bg-gradient-to-r from-[#ECECEC] to-[rgba(236,236,236,0)] bg-clip-text text-transparent mb-6">
                Modern analytics <br /> for the modern world
            </h1>

            {/* Subheading */}
            <p className="text-[rgba(236,236,236,0.65)] animate-fade-up text-xs md:text-base px-4 md:px-0 max-w-sm mx-auto mb-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique.
            </p>

            {/* Buttons */}
            <div className="flex justify-center gap-6 md:mb-16 mb-8">
                <button className="bg-[#ECECEC] animate-fade-right text-sm md:text-base w-full md:w-auto mx-4 cursor-pointer text-[#0B081C] py-3 px-6 rounded-full">
                    Download the app
                </button>
                <button className="cursor-pointer animate-fade-left  hidden md:flex py-3 px-6 border text-[#ECECEC] border-[#ECECEC] rounded-full">
                    Talk to an expert
                </button>
            </div>

            {/* Dashboard image */}
            <div className="animate-fade-up w-full md:max-w-7xl mx-auto md:px-6">
                <img
                    src={heroImage}
                    alt="Dashboard analytics preview"
                    className="w-full rounded-xl"
                    loading="lazy"
                />
            </div>
        </div>
    )
}