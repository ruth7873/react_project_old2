import { useState } from "react"
import { Link } from "react-router-dom"

export default function ({ prop }) {
    const [IsLogged, setIsLogged] = useState(prop);

    return <>
        {!IsLogged? <div> 
            <Link to={'/login'}>Log in | </Link>
            <Link to={'/signin'}>Sign in</Link></div> :
            <div>
                <Link to={'/homePage'}> Home Page |</Link>
                <Link to={'/recipe'}> Recipes |</Link>
                <Link to={'/recipe'}> My Recipes |</Link>
                <Link to={'/shopping'}> Shopping |</Link>
                <Link to={'/login'}> Change user</Link>
            </div>
        }
    </>
}