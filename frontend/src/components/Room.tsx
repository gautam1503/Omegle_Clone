import {useEffect} from "react";
import {useSearchParams} from "react-router-dom"

export  function Room()
{
    const [searchParams, setSearchParams] = useSearchParams();
    const name = searchParams.get("name");

    useEffect(() => {
        console.log(name);
    }, [name]);

    return<div>
        Hi {name}
    </div>
}