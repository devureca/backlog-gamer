import { Search, LayoutGrid, List } from 'lucide-react';

export const Header = () => {
    return (
        <header className="h-16 bg-[#0D0D0F] border-b border-[#2D2D33] flex items-center justify-between px-6">
            {/* Pestañas Centrales */}
            <div className="flex items-center gap-8 h-full">
                <nav className="flex h-full items-center gap-6">
                    <button className="text-sm font-semibold text-indigo-400 border-b-2 border-indigo-400 h-full px-2">Library</button>
                    <button className="text-sm font-semibold text-gray-400 hover:text-white h-full px-2">Price Charting</button>
                    <button className="text-sm font-semibold text-gray-400 hover:text-white h-full px-2">Settings</button>
                </nav>
            </div>

            {/* Herramientas Derecha */}
            <div className="flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                    <input
                        type="text"
                        placeholder="Search library..."
                        className="bg-[#1A1A1E] border border-[#2D2D33] rounded-full py-1.5 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-indigo-500 w-64"
                    />
                </div>
                <div className="flex bg-[#1A1A1E] rounded-lg p-1 border border-[#2D2D33]">
                    <button className="p-1.5 bg-[#2D2D33] text-white rounded-md"><LayoutGrid size={16} /></button>
                    <button className="p-1.5 text-gray-500 hover:text-white"><List size={16} /></button>
                </div>
            </div>
        </header>
    );
};