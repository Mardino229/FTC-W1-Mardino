
export default function PowerFull() {
    return (
        <section className="text-[#ECECEC] flex items-center justify-center px-4 pt-6">
            {/*Section Powerfull*/}
            <div
                className="
          max-w-7xl w-full mx-auto
          rounded-2xl
          md:px-8 px-6 py-14
          shadow-[inset_0px_0.5px_0px_0px_rgba(255,255,255,0.5),_0px_-2px_40px_0px_rgba(187,155,255,0.15),_0px_-2px_10px_0px_rgba(233,223,255,0.3)]
          backdrop-blur-md
          text-center
        "
            >
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-7 leading-tight">
                    Our powerful analytics <br className="hidden md:block"/>provides invaluable insights.
                </h2>
                <p className="text-sm sm:text-base mb-10 max-w-2xl text-center mx-auto">
                    Unlock the power of data with our cutting-edge analytics product.
                    Get instant insights with our user-friendly Analytics Dashboard, and take advantage
                    of our innovative digital credit tokens to reward your customers and incentivize engagement.
                </p>
                {/*Bouton Download*/}

                <button
                    className="border border-[#ECECEC] rounded-full px-8 py-3 text-sm sm:text-lg font-medium cursor-pointer"
                >
                    Download the app
                </button>
            </div>
        </section>
    );
}
