// import { GetStaticProps } from "next";

export default function PageSSG( { user } ) {
    return (
        <h1>Page static</h1>
        // <div>
        //     <h1>{user.name}</h1>
        //     <p>{user.bio}</p>
        // </div>
    )
}

// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     const response = await fetch('http://api.github.com/users/cgama-dev')
//     const user = await response.json()
//     return {
//         props: {
//             user
//         },
//         revalidate: 5
//     }
// }