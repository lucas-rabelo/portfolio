export function Header() {
    return(
        <header className="w-full py-5 flex items-center justify-between px-14 bg-gray-700 border-b border-gray-600">
            <a href="">
                <img src='' alt="Logotipo" />
            </a>

            <div className="flex items-center">
                <ul className="flex items-center gap-5 px-2 mr-2">
                    <li className="text-zinc-400 hover:text-zinc-50">
                        <a href="#ome">
                            Início
                        </a>
                    </li>
                    <li className="text-zinc-400 hover:text-zinc-50">
                        <a href="#about">
                            Sobre
                        </a>
                    </li>
                    <li className="text-zinc-400 hover:text-zinc-50">
                        <a href="#speciality">
                            Especialidades
                        </a>
                    </li>
                    <li className="text-zinc-400 hover:text-zinc-50">
                        <a href="#projects">
                            Projetos
                        </a>
                    </li>
                </ul>

                <a 
                    className="rounded ml-2 bg-white text-black p-2" 
                    href="#contact"
                >
                    Entrar em contato
                </a>
            </div>
        </header>
    );
}