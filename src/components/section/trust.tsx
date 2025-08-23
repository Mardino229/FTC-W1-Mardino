import dell from"../../assets/dell.svg";
import lactice from"../../assets/Lacctice.svg";
import ncr from"../../assets/ncr.svg";
import rakuten from"../../assets/rakuten.svg";
import Ted from"../../assets/Ted.svg";
import zendesk from"../../assets/zendesk.svg";
import pacific from"../../assets/pacific.svg";

export default function Trust() {
    return (
        <section className="pt-10 pb-8 px-5">
            {/* Trusted logos */}
            <div className="max-w-6xl mx-auto animate-fade-up text-[rgba(255,255,255,0.8)] flex flex-col gap-4 mb-3 text-center">
                <p className="mb-8 text-xs md:text-xl">
                    Trusted by teams at over 1,000 of the world’s leading organizations
                </p>
                <div className="flex flex-wrap md:justify-around justify-center items-center gap-6 grayscale opacity-70">
                    <img src={dell} alt="Dell" className="md:h-6 h-4" />
                    <img src={zendesk} alt="Zendesk" className="md:h-6 h-4" />
                    <img src={rakuten} alt="Rakuten" className="md:h-6 h-4" />
                    <img src={pacific} alt="Pacific Funds" className="md:h-6 h-4" />
                    <img src={ncr} alt="NCR" className="md:h-6 h-4" />
                    <img src={lactice} alt="Lattice" className="md:h-6 h-4" />
                    <img src={Ted} alt="TED" className="md:h-6 h-4" />
                </div>
            </div>
        </section>
    );
}
