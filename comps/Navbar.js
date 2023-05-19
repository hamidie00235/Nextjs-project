import Link from 'next/link'
const Navbar = () => {
    return (
        <nav>
        <div className="logo" >
            <h1>Ninja List</h1>
           <Link href="/" > Home</Link>
           <Link href="/about" > about</Link>
           <Link href="/ninjas" >Ninja list</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;