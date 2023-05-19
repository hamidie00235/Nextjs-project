import Link from 'next/link'
const Navbar = () => {
    return ( 
        <nav>
        <div className="logo" >
            <h1>Ninja List</h1>
           <Link href="/" > <a>Home</a></Link>
           <Link href="/about" > <a>about</a></Link>
           <Link href="/ninjas" ><a>See Ninja list</a></Link>
            </div>
        </nav>
     );
}
 
export default Navbar;