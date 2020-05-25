/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// exports.createPages = async function ({actions, graphql}) {
     
//     const { data } = await graphql`
//             query{
//                 allMdx(sort: {fields: frontmatter___date, order: DESC}) {
//     edges {
//       node {
//         frontmatter {
//           slug
//         }
//         id
//       }
//     }
//   }
// }
//     `

//create paginated pages for post

// const postPerpage = 3;

// const numPages = Math.ceil(data.allMdx.edges.length/postPerpage);

//     Array.from({length: numPages}).forEach((_,i) => {
//         actions.createPages({
//             path: i === 0 ? `/` : `/${i+1}`,
//             component: require.resolve("./src/templates/allPosts.js"),
//             context: {
//                 limit: postPerpage,
                //skip the first 3 values and return the next 3 for 2nd page
    //             skip: i * postPerpage,
    //             numPages,
    //             currentPage: i + 1,
    //         }
    //     }) 
    // })


    //create single blog post
//     data.allMdx.edges.forEach(edge => {
//         const slug = edge.node.frontmatter.slug
//         const id = edge.node.id
        
//         actions.createPages({
//             path: slug,
//             component: require.resolve(`./src/templates/singlePost.js`),
//             context: {id},
//         })
//     })

// }
