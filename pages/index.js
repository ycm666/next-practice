import HeadInfo from "./components/HeadInfo"

export default function Home({posts}) {

  //console.log(posts)
  console.log('---')
  return (
    <div>
      <HeadInfo/>
      <h1>Welcome to My Blog</h1>

      <ul>
        {posts.map(post =>(
           <li key={post.id}>{post.id} : {post.title}</li>
        ))}
      </ul>
    </div>
  )
}


// This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
//   const posts = await res.json()

//   // Pass data to the page via props
//   return { props: { posts } }
// }

export const getStaticProps = async () => {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=0&_end=10`)
  const posts = await res.json()

  // Pass data to the page via props
  return { props: { posts } }
}