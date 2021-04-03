const { ApolloServer, gql } = require('apollo-server-lambda')
const { typeDefs } = require('./schema')
const faunadb = require('faunadb')
const q = faunadb.query;
require('dotenv').config()
const shortid = require('shortid')

const resolvers = {
  Query: {
    name: () => {
      return "burhanuddin"
    },
    getLolly:async(parents,args,ctx,info)=>{
      try{
        const adminClient = new faunadb.Client({ secret: process.env.ADMIN_KEY_SECRET })
        const response = await adminClient.query(
          q.Get(
            q.Match(q.Index('lollies_by_path'),args.input.lollyPath)
          )
        )
        return response.data

      }catch(error) {
        return error
      }

    },
    getLollies:async(parents,args,ctx,info)=>{
      try {
        const adminClient = new faunadb.Client({ secret: process.env.ADMIN_KEY_SECRET })
        const response = await adminClient.query(
          q.Map(
            q.Paginate(q.Match(q.Index("all_lollies"))),q.Lambda(x => q.Get(x))
          )
        )
        const data = response.data.map((res)=>{
          return{
            ...res.data
          }
          
        }) 
        return data;


      }catch(error){
        return error.toString()
      }

    },
    

}, // Query end mark 
Mutation: {
  createLolly: async (parents, args, ctx, info) => {
    console.log(args)
    try {
      const adminClient = new faunadb.Client({ secret: process.env.ADMIN_KEY_SECRET })
      const shortID = shortid.generate()
      args.input.lollyPath = shortID

      const result = await adminClient.query(
        q.Create(
          q.Collection('lollies'),
          {
            data: {
              lollyPath: shortID,
              ...args.input

            }
          }
        )
      )
      const data = {
        ...result.data
      }
      return data


    } catch (error) {
      console.log(error)
      return error.toString()
    }

  }

}


}
  
  



const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const handler = server.createHandler()

module.exports = { handler }
