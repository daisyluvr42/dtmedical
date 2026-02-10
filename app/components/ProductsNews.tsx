
import Link from 'next/link';

export const Products = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex items-center justify-center mb-12">
                    <img src="/assets/title-left-5f7a618b.svg" alt="Title Left" className="w-6 h-6" />
                    <h2 className="text-3xl md:text-4xl font-bold mx-3 text-gray-900">Product</h2>
                    <img src="/assets/title-right-33edfae6.svg" alt="Title Right" className="w-6 h-6" />
                </div>
                <div className="flex flex-col md:flex-row mb-16 items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 flex justify-start items-center">
                        <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-3xl flex-shrink-0">
                            <img src="/assets/product-1-45ddc0dc.png" alt="Doctor with clipboard" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col">
                        <div className="max-w-md mx-auto md:mx-0">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">CCBT Module</h3>
                            <div className="mb-4 flex items-center">
                                <div className="flex-1">
                                    <p className="text-gray-800">The platform offers science-backed strategies to support mental well-being, with a focus on managing stress, low mood, and anxious thoughts. It features interactive exercises, cognitive skills training, and mindfulness practices to help users build healthier habits and improve overall resilience.</p>
                                </div>
                            </div>
                            <Link className="inline-block bg-[#25AFFA] hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 mt-2" href="/products#ccbt-module">Learn More</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row-reverse items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 flex justify-end items-center">
                        <div className="w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-3xl flex-shrink-0">
                            <img src="/assets/product-2-9bee8f27.png" alt="Sleep data visualization" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col">
                        <div className="max-w-md mx-auto md:mx-0">
                            <h3 className="text-2xl font-bold mb-6 text-gray-900">CBT-I Module</h3>
                            <div className="mb-4 flex items-center">
                                <div className="flex-1">
                                    <p className="text-gray-800">Offers a digital sleep diary and metric tracking to help users develop better sleep routines and enhance sleep quality.</p>
                                </div>
                            </div>
                            <Link className="inline-block bg-[#25AFFA] hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-lg transition duration-300 mt-2" href="/products#cbt-i-module">Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export const News = () => {
    // News data could be dynamic, but hardcoding for now as per static structure
    const newsItems = [
        { id: "1", date: "20230630-0701", desc: "Participated in the China Medical Enterprises Going Overseas Conference in Tianjin", img: "/assets/news-1-cb7aa037.png" },
        { id: "4", date: "20240508", desc: "Participation in the Future Medical Eco Show in Beijing", img: "/assets/news-4-0dae10aa.png" },
        { id: "7", date: "20241027", desc: "Attend local entrepreneurship fairs and learn about the workings of local organizations such as Canada's MEDICAL CLINIC", img: "/assets/news-7-6d2676e2.png" },
        { id: "11", date: "", desc: "Participated in the entrepreneurial project showcase organized by LaunchHub.", img: "/assets/news-11-37d91f6a.png" },
    ];
    // And placeholders
    const placeholders = [2, 3, 5, 6, 8, 9, 10, 12].map(n => ({
        id: n.toString(), date: "", desc: "", img: `/assets/news-${n}-`
    }));

    return (
        <section className="py-12 md:py-12 bg-[#25AFFA] text-white relative overflow-hidden rounded-[32px]">
            <div className="container mx-auto px-4 relative z-10">
                <div className="flex items-center justify-center mb-12">
                    <img src="/assets/title-left-5f7a618b.svg" alt="Title Left" className="w-6 h-6" style={{ filter: "brightness(0) invert(1)" }} />
                    <h2 className="text-3xl md:text-4xl font-bold mx-3 text-white">Activity Participation</h2>
                    <img src="/assets/title-right-33edfae6.svg" alt="Title Right" className="w-6 h-6" style={{ filter: "brightness(0) invert(1)" }} />
                </div>
                <div className="relative">
                    {/* Note: Scrolling logic is pure CSS snap-x here, buttons functionality would need client component state, skipping for static port unless requested for interactivity */}
                    <div className="flex overflow-x-auto pb-6 scrollbar-hide snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
                        {/* Since we don't know the exact filenames for placeholders (hash diffs likely), I will only render the ones I saw in list_dir or just render all based on list_dir output from Step 23.
                 Step 23 showed: news-1, news-10, news-11, news-12, news-2, news-3, news-4, news-5, news-6, news-7, news-8, news-9.
                 I will try to match them.
             */}
                        <NewsCard id="1" date="20230630-0701" desc="Participated in the China Medical Enterprises Going Overseas Conference in Tianjin" img="/assets/news-1-cb7aa037.png" />
                        <NewsCard id="2" date="" desc="" img="/assets/news-2-893a5216.png" />
                        <NewsCard id="3" date="" desc="" img="/assets/news-3-16d55a77.png" />
                        <NewsCard id="4" date="20240508" desc="Participation in the Future Medical Eco Show in Beijing" img="/assets/news-4-0dae10aa.png" />
                        <NewsCard id="5" date="" desc="" img="/assets/news-5-3bf1305a.png" />
                        <NewsCard id="6" date="" desc="" img="/assets/news-6-19d7d4f3.png" />
                        <NewsCard id="7" date="20241027" desc="Attend local entrepreneurship fairs and learn about the workings of local organizations such as Canada`s MEDICAL CLINIC" img="/assets/news-7-6d2676e2.png" />
                        <NewsCard id="8" date="" desc="" img="/assets/news-8-6631bd49.png" />
                        <NewsCard id="9" date="" desc="" img="/assets/news-9-70119811.png" />
                        <NewsCard id="10" date="" desc="" img="/assets/news-10-8c62e891.png" />
                        <NewsCard id="11" date="" desc="Participated in the entrepreneurial project showcase organized by LaunchHub." img="/assets/news-11-37d91f6a.png" />
                        <NewsCard id="12" date="" desc="" img="/assets/news-12-7a0ef638.png" />
                    </div>
                </div>
            </div>
        </section>
    );
};

const NewsCard = ({ id, date, desc, img }: { id: string, date: string, desc: string, img: string }) => (
    <Link className="flex-shrink-0 snap-start w-[250px] overflow-hidden transition duration-300 cursor-pointer group relative" href={`/news#${id}`}>
        <img src={img} alt={`News from ${date}`} className="object-cover group-hover:scale-105 transition-transform duration-300 w-[250px] h-[250px]" />
        <div className="p-4 text-white bg-transparent ml-3">
            <h3 className="text-lg font-bold text-white mb-2">{date}</h3>
            <p className="text-sm text-white line-clamp-3">{desc}</p>
        </div>
    </Link>
)
