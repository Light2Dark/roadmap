import Link from "next/link";

type LinksProps = {
    sidebarOpen: boolean;
}

const Links = ({sidebarOpen}: LinksProps) => {
    return (
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
    )

}

export default Links