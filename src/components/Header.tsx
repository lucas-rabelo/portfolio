import { useState } from 'react';
import { List, X } from 'phosphor-react';

import classNames from 'classnames';

export function Header() {

    const [menuState, setMenuState] = useState(false);

    function handleOpenAndCloseMenu() {
        setMenuState(!menuState);
    }

    return (
        <>
            <header className={classNames("w-full py-5 flex items-center justify-between px-14 bg-gray-700 border-b border-gray-600", {
                "hidden": menuState,
            })}>

                <a href="">
                    <img src='' alt="Logotipo" />
                </a>

                <div className="hidden md:flex items-center">
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
                        className="rounded ml-2 bg-white text-black p-[.4rem]"
                        href="#contact"
                    >
                        Entrar em contato
                    </a>

                </div>
                <a className="p-[.17rem] md:hidden" onClick={handleOpenAndCloseMenu}>
                    <List size={32} weight="bold" />
                </a>
            </header>

            <div className={classNames("w-full h-[100vh]  bg-black flex py-5 flex-col items-center justify-center md:hidden", {
                "hidden transition-opacity": !menuState
            })}>

                <a onClick={handleOpenAndCloseMenu} className="absolute top-[18rem] right-10">
                    <X size={32} weight="bold" className="text-white" />
                </a>

                <ul className="flex flex-col items-center gap-3 mb-3">
                    <li className="text-zinc-400 hover:text-zinc-50 py-2 px-1">
                        <a href="#home" className="text-2xl">
                            Início
                        </a>
                    </li>
                    <li className="text-zinc-400 hover:text-zinc-50 py-2 px-1">
                        <a href="#about" className="text-2xl">
                            Sobre
                        </a>
                    </li>
                    <li className="text-zinc-400 hover:text-zinc-50 py-2 px-1">
                        <a href="#speciality" className="text-2xl">
                            Especialidades
                        </a>
                    </li>
                    <li className="text-zinc-400 hover:text-zinc-50 py-2 px-1">
                        <a href="#projects" className="text-2xl">
                            Projetos
                        </a>
                    </li>
                </ul>

                <a
                    className="rounded mt-1 text-2xl bg-white text-black p-[.4rem] hover:bg-black hover:text-white hover:border hover:border-white transition-colors"
                    href="#contact"
                >
                    Entrar em contato
                </a>
            </div>
        </>
    );
}