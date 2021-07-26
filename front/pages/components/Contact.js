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
        <div className="w-screen px-6">
            <div className="">
                <div id="contact" className="font-bold text-black text-xl text-center md:text-2xl">
                    Contactez moi
                </div>   
            </div>
            <div className="mb-5 w-full flex flex-wrap justify-center items-center border w-3/4 rounded-lg md:w-1/2 md:m-auto md:mt-5 md:mb-5">
                <a href="https://twitter.com/ben_duj" class="w-1/6 m-2 md:w-20">
                    <img src="https://s1.qwant.com/thumbr/0x380/0/d/e3eb1692097408a0df29570383cf5149d0f584e46a151ee5083caccad20b8f/img_416151.png?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_416151.png&q=0&b=1&p=0&a=0" alt="Logo Twitter" class="" />
                </a>
                <a href="https://www.linkedin.com/in/benjamin-dujarrier/" class="w-1/6 m-2 md:w-20">
                    <img src="https://s1.qwant.com/thumbr/0x380/8/7/fd6ca47fe71ece96b72c3055c4e7383574c3f433455b6007408f0f53da7522/img_39206.png?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_39206.png&q=0&b=1&p=0&a=0" alt="Logo LinkedIn" class="" />
                </a>
                <a href="https://github.com/BenjamQuill" class="w-1/6 m-2 md:w-20">
                    <img src="https://s2.qwant.com/thumbr/0x380/f/6/dd401938cb2f64e34e6b9099e8e34b4250efaf0dfec0afd717c3d2fef90fd2/img_44605.png?u=https%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_44605.png&q=0&b=1&p=0&a=0" alt="Logo Github" class="" />
                </a>
            </div>
        </div> 
    )
}