import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        },3000)

    },[])
    return (
     <div className="not-found">
     <h1>Ooooooops...</h1>
     <h2>that page cannot be found.</h2>
    <p>Go back to the <Link href="/" className="error">Homepage</Link></p>

     </div>
    );
}
 
export default NotFound;