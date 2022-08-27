import Navbar from "./Navbar/Navbar"
import { useState, useEffect, useRef } from "react"
import { getThemePreferences} from "../utils/themeFuncs"

const Layout = ({children}: any) => {
    const [darkTheme, setDarkTheme] = useState(false)

    //  Get theme preferences from local storage
    useEffect(() => {
        const theme = getThemePreferences()
        setDarkTheme(theme)
    },[])

    return (
        <div className={`transition-colors ${darkTheme ? "dark": ""}`}>
            <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <main className="top-20 relative px-4">
                {children}
            </main>

        </div>
    )
}

export default Layout