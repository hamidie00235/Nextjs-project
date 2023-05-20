import Image from 'next/image';
import Link from 'next/link'
const Navbar = () => {
    return (
        
        <nav >
        <div className="logo">
            <Image src="/logo.png" width={128} height={77}></Image>
            </div>
           <Link href="/" > Home</Link>
           <Link href="/about" > about</Link>
           <Link href="/ninjas" >Ninja list</Link>
            
        </nav>
    );
}
 
export default Navbar;