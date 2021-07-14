import Link from 'next/link';

export default function LinkMe({slug, title, description}) {
  return (
    <Link href={slug}>
        <a
          className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
        >
          <h3 className="text-2xl font-bold">{title} &rarr;</h3>
          <p className="mt-4 text-xl">
            {description}
          </p>
        </a>
    </Link>
  )
}