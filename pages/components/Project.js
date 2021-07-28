export default function Project({title, description, resum, label, statut, slug}) {
    return (
        <div class="w-80 py-6 flex flex-col justify-center sm:py-12 md:w-1/2 md:m-2">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-gradient-to-r from-green-600 to-green-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div class="relative px-3 py-5 bg-white bg-opacity-75 shadow-lg sm:rounded-3xl sm:p-20 md:w-96">
                    <div class="max-w-md">
                        <div>
                            {/* <img src="/img/logo.svg" class="h-7 sm:h-8" /> */}
                        </div>
                        <div class="divide-y divide-black">
                            <div class="py-8 leading-6 space-y-4 text-black sm:text-lg sm:leading-7">
                                <p class="text-xl text-green-600">{title}</p>
                                <p class="italic text-xs">{resum}</p>
                                <p class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-800 bg-green-500 uppercase last:mr-0 mr-1">{label}</p>
                                <p className="text-xs text-justify">{description}</p>
                            </div>
                            <div class="pt-6 text-xs leading-6 font-bold leading-7">
                                <p>
                                    <a href="#" class="hover:text-green-800">
                                        {statut === "ok" ? <a href={slug}>Lien GitHub</a> : 'En cours de développement'}
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