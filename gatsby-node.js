const path = require(`path`)
const { report } = require("process")

console.log("hello world")
exports.createPages = async ({ actions, graphql }) => {
    console.log(actions)
    const { createPage } = actions
    const lollyTemplate = path.resolve('./src/templates/lollyTemplate.js')

    const response = await graphql(`
  query MyQuery {
    allGraphqlSourceLollies{
      getLollies{
      lollyPath
      }
    }
    }
  
  `)
  
  

    response.data.allGrahqlSourceLollies.getLollies.forEach((path) => {
        
        createPage({
            component: lollyTemplate,
            path: `/lollies/${path.getLollies.lollyPath}`,
            context: {
                lollyPath: path.getLollies.lollyPath
            }

        })

    })
    


}
