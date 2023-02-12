import HeadInfo from "./components/HeadInfo";
import Image    from "next/image"
import photosStyles from "../styles/Photos.module.css"
import Link from "next/link";


const photos = ({photos}) => {
    console.log(photos)
    return (
        <div>
            <HeadInfo  title="My Blog Photos" />
            <h1>My Photos</h1>

            <ul className={photosStyles.photos}>
               { photos.map(photo=>(
                  <li key={photo.id}>
                    <Link href={'/photos/' + photo.id }>
                        <Image 
                            src={photo.thumbnailUrl}
                            width={100}
                            height={100}
                            alt={photo.title}
                        /> 
                        <span>{photo.title}</span>
                    </Link>
                  </li>

               ))}  

            </ul>
        </div>
    )
}


export const getServerSideProps = async () => {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_start=0&_end=10`)
    const photos = await res.json()
  
    // Pass data to the page via props
    return { props: { photos } }
}

export default photos;