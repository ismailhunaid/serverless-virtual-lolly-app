// const path = require(`path`)

// exports.createPages = async ({ actions, graphql }) => {
//   const { data } = await graphql(`
//   query MyQuery {
//     LOLLIES {
//       getLollies {
//       lollyPath
//       }
//     }
//   }
//   `)

//   console.log(data)
//   data.LOLLIES.getAllLollies.forEach(({ lollyPath }) => {
//     actions.createPage({
//       path: `lollies/${lollyPath}`,
//       component: path.resolve(`./src/components/dynamicLollyPage.js`),
//       context: {
//         lollyPath: lollyPath,
//       },
//     })
//   })
// }
