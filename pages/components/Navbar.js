export default function Navbar() {
    return (
        <nav
            className="bg-blue-500 rounded-md w-full m-4">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex space-x-3">
                            <a href="#" className="bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">About me</a>

                            <a href="#" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projetcs</a>

                            <a href="#" className="text-blue-300 hover:bg-blue-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sm:hidden" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    <a href="#" className="bg-blue-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">About me</a>

                    <a href="#" className="text-blue-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

                    <a href="#" className="text-blue-300 hover:bg-blue-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
                </div>
            </div>
        </nav>
    )
}