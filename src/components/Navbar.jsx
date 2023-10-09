import { useState } from 'react'

function NavLink({to, children}) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({open, setOpen}) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-gray-900 transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center filter drop-shadow-md font-bold bg-gradient-to-r from-yellow-400 via-yellow-200 to-white h-20"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/">Ticket2</a>
            </div>
            <div className="flex flex-col ml-4 text-white">
                <a className="text-xl font-normal my-4" href="/" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Home
                </a>
                <a className="text-xl font-normal my-4" href="/about" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    About
                </a>
                <a className="text-xl font-normal my-4" href="/contact" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Contact
                </a>
                <a className="text-xl font-normal my-4" href="/events" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Events
                </a>
                <a className="text-xl font-normal my-4" href="/host" onClick={() => setTimeout(() => {setOpen(!open)}, 100)}>
                    Host
                </a>
            </div>  
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="flex filter drop-shadow-md bg-gradient-to-r from-yellow-400 via-yellow-200 to-white px-4 py-4 h-20 items-center">
            <MobileNav open={open} setOpen={setOpen}/>
            <div className="w-3/12 flex items-center">
                <a className="text-2xl font-semibold" href="/">Ticket2</a>
            </div>
            <div className="w-9/12 flex justify-end items-center">

                <div className="z-50 flex relative w-8 h-8 flex-col justify-between items-center md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden font-semibold md:flex">
                    <NavLink to="/">
                        HOME
                    </NavLink>
                    <NavLink to="/contact">
                        CONTACT
                    </NavLink>
                    <NavLink to="/about">
                        ABOUT
                    </NavLink>
                    <NavLink to="/events">
                        EVENTS
                    </NavLink>
                    <NavLink to="/host">
                        HOST
                    </NavLink>
                </div>
            </div>
        </nav>
    )
}