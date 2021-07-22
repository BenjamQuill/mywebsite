export default function Project({title, description, resum, label}) {
    return (
        <div class="min-h-screen py-6 flex flex-col justify-center sm:py-12">
            <div class="relative py-3 sm:max-w-xl sm:mx-auto">
                <div class="absolute inset-0 bg-gradient-to-r from-green-100 to-sky-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
                <div class="relative px-4 py-10 bg-white bg-opacity-75 shadow-lg sm:rounded-3xl sm:p-20">
                    <div class="max-w-md mx-auto">
                        <div>
                            {/* <img src="/img/logo.svg" class="h-7 sm:h-8" /> */}
                        </div>
                        <div class="divide-y divide-black">
                            <div class="py-8 text-base leading-6 space-y-4 text-black-500 sm:text-lg sm:leading-7">
                                <p class="text-3xl text-green-600">{title}</p>
                                <p class="italic text-xs">{resum}</p>
                                <p class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-800 bg-green-500 uppercase last:mr-0 mr-1">{label}</p>
                                <p>{description}</p>
                            </div>
                            <div class="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
                                <p>Want to see my code ?</p>
                                <p>
                                    <a href="#" class="hover:text-green-800"> My link GitHub &rarr; </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}