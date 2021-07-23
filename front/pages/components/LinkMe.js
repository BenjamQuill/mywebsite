import Link from 'next/link';

export default function LinkMe({slug, title, description}) {
  return (
    <Link 
      key={slug} 
      href={slug}
      >
        <a
          className="p-6 mt-6 text-black-700 font-bold text-left border w-96 rounded-xl hover:text-green-600 focus:text-green-600"
        >
          <h3 className="text-3xl">{title} &rarr;</h3>
          <p className="mt-4 text-xl text-white text-opacity-75">
            {description}
          </p>
        </a>
    </Link>
  )
}