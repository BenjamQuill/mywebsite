const sendMail = () => {
    // Tester les donnees
        if (document.getElementById("inline-full-name").value.length==0) {
            alert("Saisir Votre nom !!!");
            return;
        }
        if (document.getElementById("inline-mail").value.length==0) {
            alert("Saisir le titre !!!");
            return;
        }
}

export default function Contact() {
    return (
        <form class="m-10 px-4 border rounded-lg m-5 w-1/2">
            <h1 id="contact" className="text-3xl text-black-700 font-bold m-10 px-10">Contact me</h1>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class="text-2xl block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                        Full Name
                        </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-black-200 appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" placeholder="Your fullname" />
                </div>
            </div>
            <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                    <label class=" text-2xl block text-black-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-mail">
                        Mail
                        </label>
                </div>
                <div class="md:w-2/3">
                    <input class="bg-black-200 appearance-none border-2 border-black-200 rounded w-full py-2 px-4 text-black-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-mail" type="mail" placeholder="Your mail" />
                </div>
            </div>
            <div class="p-5 md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-1/3">
                    <button class="shadow bg-green-600 hover:bg-green-400 focus:shadow-outline focus:outline-none text-black font-bold py-2 px-4 rounded" type="button" onClick={sendMail}>
                        Send !
                    </button>
                </div>
            </div>
        </form>
    )
}