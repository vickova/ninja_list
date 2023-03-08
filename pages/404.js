import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
    const router = useRouter();

    useEffect(()=>{
        setTimeout(()=>{
            // router.go(-1)
            router.push('/')
        }, 3000)
    }, [])
    return ( 
        <div className="not-found">
            <h1>Ooopss!...</h1>
            <h2>That Page cannot be found</h2>
            <p>Go backto the <Link href="/">Home page</Link></p>
        </div>
     );
}
 
export default NotFound;