module.exports = {
  plugins:[
    {
        resolve: "gatsby-source-graphql",
        options: {
          // This type will contain remote schema Query type
          typeName:"LOLLIES",
          // This is the field under which it's accessible
          fieldName:"allGraphqlSourceLollies",
          // URL to query from
          url:"https://hungry-williams-ac739a.netlify.app/.netlify/functions/newLolly"
        }
      },

    
  ]
}




