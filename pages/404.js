import {useRouter} from "next/router";
import {useEffect} from "react";

function NotFound() {

    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 4000)
    }, [])

    return(
        <>
            <h1>Sahifa topilmadi</h1>
        </>
    )
}

export default NotFound