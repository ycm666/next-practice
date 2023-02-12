
import Image from "next/image"
import Link  from "next/link"
import { useRouter } from "next/router"
const index = ({photo}) => {
    const router = useRouter();
    //console.log(router)
    //const id = router.query.id
    //console.log(id)

    const {title,url} = photo

    //console.log(url)

    return (
        <div>
            <h2>${title}</h2>
            <Image
                src={url}
                width={500}
                height={500}
                alt="..."
            /> 
            <Link href="/photos" >go back</Link> 
        </div>
    )
}


export const getStaticProps = async (context) => {
    // Fetch data from external API
    const { id } = context.params

    const res = await fetch(`https://jsonplaceholder.typicode.com/photos/${ id }`)
    const photo = await res.json()
  
    // Pass data to the page via props
    return { props: { photo } }
}

export const getStaticPaths = async() =>{

    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`)
    const photos = await res.json()
    const ids = photos.map(photo => photo.id)
    const paths = ids.map(id => {
        return{
            params: { id : id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}



export default index;