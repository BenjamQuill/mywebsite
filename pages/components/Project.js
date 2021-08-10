export default function Project({title, description, resum, label, slug}) {
    return (
        <div className="w-80 py-6 flex flex-col justify-center sm:py-12 md:w-1/2 md:m-2">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div className="relative px-3 py-5 bg-white bg-opacity-75 shadow-lg sm:rounded-3xl sm:p-20 md:w-96">
                    <div className="max-w-md">
                        <div>
                            {/* <img src="/img/logo.svg" className="h-7 sm:h-8" /> */}
                        </div>
                        <div className="divide-y divide-black">
                            <div className="py-8 leading-6 space-y-4 text-black sm:text-lg sm:leading-7">
                                <p className="text-xl text-green-600">{title}</p>
                                <p className="italic text-xs">{resum}</p>
                                <p className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-800 bg-green-500 uppercase last:mr-0 mr-1">{label}</p>
                                <p className="text-xs text-justify">{description}</p>
                            </div>
                            <div className="pt-6 text-xs leading-6 font-bold leading-7">
                                <p>
                                    <a href={slug} className="hover:text-green-800">
                                        Lien Github
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}