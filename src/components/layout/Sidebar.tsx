import {
    Gamepad,
    Database,
    Monitor,
    Smartphone,
    Cpu
} from 'lucide-react'; // Necesitaremos instalar lucide-react

const consoles = [
    { name: 'Nintendo NES', icon: <Cpu size={18} /> },
    { name: 'Super Nintendo', icon: <Database size={18} /> },
    { name: 'Nintendo 64', icon: <Gamepad size={18} /> },
    { name: 'GameBoy Advance', icon: <Smartphone size={18} /> },
    { name: 'Sega Genesis', icon: <Monitor size={18} /> },
    { name: 'PlayStation 1', icon: <Database size={18} /> },
];

export const Sidebar = () => {
    return (
        <aside className="w-64 h-full bg-[#1A1A1E] border-r border-[#2D2D33] flex flex-col">
            <div className="p-6">
                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest">Consolas</h2>
            </div>
            <nav className="flex-1 overflow-y-auto px-3 space-y-1">
                {consoles.map((console) => (
                    <button
                        key={console.name}
                        className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-gray-300 hover:bg-[#2D2D33] hover:text-white rounded-lg transition-colors group"
                    >
                        <span className="text-gray-500 group-hover:text-indigo-400">
                            {console.icon}
                        </span>
                        {console.name}
                    </button>
                ))}
            </nav>
        </aside>
    );
};