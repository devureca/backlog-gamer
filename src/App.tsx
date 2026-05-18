import "./App.css";
import { Sidebar } from "./components/layout/Sidebar";
import { Header } from "./components/layout/Header";

function App() {
  return (
    <div className="flex h-screen w-screen overflow-hidden bg-[#0D0D0F] text-white">
      {/* Barra Lateral */}
      <Sidebar />

      {/* Contenido Principal */}
      <div className="flex flex-col flex-1">
        <Header />

        <main className="flex-1 p-8 overflow-y-auto">
          <div className="flex items-center justify-center h-full border-2 border-dashed border-[#2D2D33] rounded-2xl">
            <p className="text-gray-500 font-medium">Aquí se verán tus juegos pronto...</p>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;