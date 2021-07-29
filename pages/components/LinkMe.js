export default function LinkMe({slug, title, description}) {
  return (
          <a
            className="w-full p-3 mt-3 text-black font-bold text-left border rounded-xl hover:text-green-600 focus:text-green-600 md:p-4 md:w-1/5 md:m-1"
            href={slug}
          >
            <h3 className="text-xl md:text-2xl">&rarr; {title}</h3>
            <p className="text-center mt-4 text-xs text-white text-opacity-75 md:text-xl md:mt-10">
              {description}
            </p>
          </a>
  )
}