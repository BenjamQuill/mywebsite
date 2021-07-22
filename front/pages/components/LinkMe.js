import Link from 'next/link';
import { useRouter } from 'next/router'

export default function LinkMe({slug, title, description}) {

  const router = useRouter();

  console.log('router', router);

  return (
    <Link 
      key={slug} 
      href={slug}
      onClick={(e) => {
        e.preventDefault()
        // typically you want to use `next/link` for this usecase
        // but this example shows how you can also access the router
        // and use it manually
        router.push(href)
      }}
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