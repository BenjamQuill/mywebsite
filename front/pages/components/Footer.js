import { getFontDefinitionFromNetwork } from "next/dist/next-server/server/font-utils";

export default function Footer() {
    return (
        <footer className="bg-green-800 text-black-800 flex items-center justify-center w-full h-24 border-t">
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