import Link from 'next/link'
const Navbar = () => {
    return (
        <nav >
        <div className="logo">
            <h1 className="b">Ninja List</h1>
            </div>
           <Link href="/" > Home</Link>
           <Link href="/about" > about</Link>
           <Link href="/ninjas" >Ninja list</Link>
            
        </nav>
    );
}
 
export default Navbar;