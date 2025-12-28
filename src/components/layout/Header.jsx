import { Menu, Bell, Search } from "lucide-react";

export default function Header({ onMenuClick }) {
    return (
        <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between bg-[#111B3C] border-b border-[#2B7FFF33] px-6 text-white shadow-sm">
            <div className="flex items-center gap-4">
                {/* Mobile Menu Button */}
                <button
                    onClick={onMenuClick}
                    className="rounded-md p-1 hover:bg-[#1f2d5c] md:hidden"
                >
                    <Menu size={24} />
                </button>

                {/* Search Bar (Optional) */}
                <div className="relative hidden max-w-md sm:block">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-64 rounded-full bg-[#162456] py-1.5 pl-10 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2B7FFF]"
                    />
                </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
                <button className="relative rounded-full p-2 hover:bg-[#1f2d5c]">
                    <Bell size={20} />
                    <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#111B3C]" />
                </button>

                <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-[#2B7FFF] to-purple-500" />
            </div>
        </header>
    );
}
