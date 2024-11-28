import { Computer } from 'react-icons/md'; 
export default function Header() {
    const headerList = [
        {
            name: "What Am I Capable Of"
        },
        {
            name: "Backstory"
        },
        {
            name: "Sign In"
        },
        {
            name: "About Me"
        },
        {
            name: "Contact Me"
        },
    ];

    const [click, setClick] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }

    return (
        <div className="bg-gray-800 sm:py-4">
            <nav className="flex justify-between container sm:items-center">
                <h2 className="py-2 sm:text-3xl text-white font-bold">Gio TECH</h2>
                <div
                    onClick={() => handleClick()}
                    className="text-2xl sm:hidden z-[9] cursor-pointer font-bold relative flex items-center">
                    <Computer className={`absolute transition-all ${click ? "opacity-0" : "opacity-1"}`} />
                    <Computer className={`transition-all ${!click ? "opacity-0" : "opacity-1"}`} />
                </div>
                <div className={`sm:hidden transition-all absolute right-0 w-screen h-screen ${click ? "opacity-0" : "opacity-1"}`}>
                    <ul className="absolute z-[4] flex flex-col right-0 top-0 h-screen bg-gray-900 text-white px-2 pt-9 sm:hidden gap-2">
                        {headerList.map(item => (
                            <li key={item.name} className=""><a href="#">{item.name}</a></li>
                        ))}
                    </ul>
                    <div onClick={() => handleClick()} className={`${click && "hidden"} w-screen h-screen absolute top-0 right-0 bg-black opacity-50`} />
                </div>
                <ul className="sm:flex sm:text-xl hidden gap-6 text-white">
                    {headerList.map(item => (
                        <li key={item.name} className=""><a href="#">{item.name}</a></li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

