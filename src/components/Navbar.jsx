import React, {useState} from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../images/logo.png"

const Navbar = () => {

    const [nav, setNav] = useState(true)

    const handleNav = () => {
        setNav(!nav)
    }

    return(
        <nav className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-6 text-[#eeeeee]">
            <img src={logo} alt="logo" className="w-8 h-8 md:w-12 md:h-12"/>
            <ul className="hidden md:flex">
                <li className="p-4">Home</li>
                <li className="p-4">About</li>
                <li className="p-4">Projects</li>
                <li className="p-4">Contact</li>
            </ul>
            <menu onClick={handleNav} className="block md:hidden">
                {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
            </menu>
            <menu className={!nav ? "fixed left-0 top-20  w-full h-full bg-[#111111] ease-in-out duration-500" : "fixed left-[-100%]"}>
                <ul className="p-4 text-center">
                    <li className="p-4 border-b border-[#333333]">Home</li>
                    <li className="p-4 border-b border-[#333333]">About</li>
                    <li className="p-4 border-b border-[#333333]">Projects</li>
                    <li className="p-4">Contact</li>
                </ul>
            </menu>
        </nav>
    )
}

export default Navbar