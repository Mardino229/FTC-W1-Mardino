import analytics from"../../assets/analytics.svg";
import token from"../../assets/token.svg";
import code from"../../assets/code.svg";
import image from"../../assets/Image.svg";


export default function Feature () {


    return (
        <section className="text-[#ECECEC]">
            <div className="max-w-md mx-auto text-center">
                <h2 className="text-xl sm:text-3xl max-w-md mx-auto px-2.5 md:text-5xl font-medium mb-6 leading-tight">
                    Features that work for your future.
                </h2>
                <p className="text-[#ECECEC] text-sm  md:text-lg leading-relaxed ">
                    Check out our amazing features and experience the power of Vaultflow for yourself.
                </p>
            </div>
            <div className="flex items-center justify-center px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl w-full">
                {/* Feature 1 */}
                <div className="rounded-2xl pb-10 shadow-[inset_0px_0.5px_0px_0px_rgba(255,255,255,0.5),_0px_-2px_40px_0px_rgba(187,155,255,0.15),_0px_-2px_10px_0px_rgba(233,223,255,0.3)]">
                    <img src={analytics} className="" alt="" />
                    <div className="flex md:px-10 px-9 gap-3 flex-col justify-between">
                        <p className="md:text-3xl text-2xl font-medium">Analytics Dashboard</p>
                        <p className="text-sm font-normal">
                            Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers everything you need to gain valuable insights.
                        </p>
                        <a href="#" className="underline pt-4 md:text-lg text-base font-medium">View dashboard</a>
                    </div>
                </div>
                {/* Feature 2 */}
                <div className="rounded-2xl pb-10 shadow-[inset_0px_0.5px_0px_0px_rgba(255,255,255,0.5),_0px_-2px_40px_0px_rgba(187,155,255,0.15),_0px_-2px_10px_0px_rgba(233,223,255,0.3)]">
                    <img src={token} className="" alt="" />
                    <div className="flex md:px-10 px-9 gap-3 flex-col justify-between">
                        <p className="md:text-3xl text-2xl font-medium">Digital Credit Tokens</p>
                        <p className="text-sm font-normal">
                            Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to drive customer loyalty and encourage repeat business.
                        </p>
                        <a href="#" className="underline pt-4 md:text-lg text-base font-medium">View tokens</a>
                    </div>
                </div>
                {/* Feature 3 + code block */}
                <div className="md:col-span-2 flex items-center flex-col md:flex-row gap-8 justify-between rounded-2xl py-8  shadow-[inset_0px_0.5px_0px_0px_rgba(255,255,255,0.5),_0px_-2px_40px_0px_rgba(187,155,255,0.15),_0px_-2px_10px_0px_rgba(233,223,255,0.3)]">
                    <div className="flex-1 md:max-w-xl">
                        <img src={code} className="" alt="" />
                        <div className="flex md:px-10 px-9  pb-8 gap-3 flex-col justify-between">
                            <p className="md:text-3xl text-2xl font-medium">Code collaboration</p>
                            <p className="text-sm font-normal">
                                Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it’s coming from. Whether you’re integrating data from multiple sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.
                            </p>
                            <a href="#" className="underline pt-4 md:text-lg text-base font-medium">View code collaboration</a>
                        </div>
                    </div>
                    <div className="md:px-10 px-9">
                        <img src={image} className="rounded-2xl shadow-[inset_0px_0.5px_0px_0px_rgba(255,255,255,0.5),_0px_-2px_40px_0px_rgba(187,155,255,0.15),_0px_-2px_10px_0px_rgba(233,223,255,0.3)]" alt="" />
                    </div>
                </div>
                </div>
            </div>
    </section>
    )
}