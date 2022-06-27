import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { FirstContent } from "../components/FirstContent";

export function Home() {
    return (
        <div className="flex flex-col max-w-[1280px] m-auto min-h-screen">
            <Header />
            <main className="flex-1">
                <FirstContent />
            </main>
            <Footer />
        </div>
    );
}