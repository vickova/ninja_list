import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                {/* <img src="/Logo-1.png" /> */}
                <Image src="/Logo-1.png" alt="logo" width={128} height={77}/>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/ninjas">Ninja List</Link>
        </nav>
     );
}
 
export default Navbar;