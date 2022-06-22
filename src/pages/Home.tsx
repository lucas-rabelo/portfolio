import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export function Home() {
    return(
        <div className="flex flex-col min-h-screen">
            <Header />
            <Footer />
        </div>
    );
}