import Link from "next/link";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>Oooops...</h1>
            <h2>that page cannot be found</h2>
            <p>GOback to the <Link href="/">homeePage</Link></p>
        </div>
     );
}
 
export default NotFound;