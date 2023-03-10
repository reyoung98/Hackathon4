import { useEffect, useState } from "react"

export default function CoverArt({id}) {

    const [imageUrl, setImageUrl] = useState('')

    const getImage = async () => {
        const response = await fetch(`https://coverartarchive.org/release/${id}/front`)
        const data = await response;

        console.log(data.url)
        setImageUrl(data.url)
    }

    useEffect(()=> {
        getImage()
    }, [])

    return (
        <img src={imageUrl}/>
    )
}

