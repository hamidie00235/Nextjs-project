import Link from "next/link";

const NotFound = () => {
    return (
        <div clsasName="not-found">
        <h1>Ooooooops...</h1>
        <h2>that page cannot be found.</h2>
       <p>Go back to the <Link href="/">Homepage</Link></p>

        </div>
      );
}
 
export default NotFound;