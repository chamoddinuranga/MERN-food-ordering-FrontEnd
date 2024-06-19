import landingImage from '../assets/landing.png';
import appDownloadImage from '../assets/appDownload.png';
const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-[#44bd32]">
                    Dive into delicious delivery today
                </h1>
                <span className="text-xl">Crave it? Click it!</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage} />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                        Order takeaway even faster!
                    </span>
                    <span>
                        Download the කමුද.lk App for faster ordering and personalized
                    </span>
                    <img src={appDownloadImage} />
                </div>

            </div>
        </div>
    )
}

export default HomePage;