import { getFontDefinitionFromNetwork } from "next/dist/next-server/server/font-utils";

export default function Footer() {
    return (
        <footer className="bg-opacity-25 bg-gradient-to-r from-green-600 to-green-900 flex flex-col items-center justify-center w-full flex- px-20 text-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          V.1 by BenjamQuill{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    )
}