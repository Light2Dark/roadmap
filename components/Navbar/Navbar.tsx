import Image from "next/image"
import Toggle from "./Toggle"
import Link from "next/link"
import { useState } from "react"

export interface ThemeProps {
    darkTheme: boolean
    setDarkTheme: (darkTheme: boolean) => void
}

const Bar = () => {
    return (
        <div className="w-7 h-[1.5px] bg-white rounded-md"></div>
    )
}

const Navbar = ({darkTheme, setDarkTheme}: ThemeProps) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen)
    }

    return (
        <div className="flex flex-row items-center px-2 bg-dark-blue text-pale-cream fixed w-full">
            <Link href="/">
                <a><Image src="/smolwafflenotext.svg" height={60} width={60} /></a>
            </Link>

            {/* Mobile sidebar bars, they should appear as the last element on small screens */}
            <div className="border-[1px] rounded-md py-2.5 px-2 mr-1 flex flex-col gap-2 items-center cursor-pointer order-last md:order-2 md:hidden"
            onClick={toggleSidebar}>
                <Bar />
                <Bar />
                <Bar />
            </div>

            <div className={`nav md:flex flex-row gap-4 items-center ml-auto ${sidebarOpen ? "flex flex-col fixed top-20 text-pale-cream right-3 w-60 rounded-md py-2 bg-dark-blue/90" : "hidden"}`}>
                <Link href = "/maker">
                    <a>Maker</a>
                </Link>

                <Link href = "/community">
                    <a>Community</a>
                </Link>

                <button>Log In</button>
                <button>Sign Up</button>
            </div>

            <Toggle darkTheme={darkTheme} setDarkTheme={setDarkTheme} classProps={"ml-auto md:ml-4 order-2 md:order-last mr-2"} />

        </div>
    )
}

export default Navbar