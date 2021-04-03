const {gql} =require('apollo-server-lambda')

const typeDefs= gql`
type Query {
    name:String!
    getLollies:[Lolly!]
    getLolly(input:GetLollyInput):Lolly

}
input GetLollyInput {
    lollyPath:String!
}
type Lolly {
    receiverName:String!
    senderName:String!
    message:String!
    lollyTop:String!
    lollyMiddle:String!
    lollyBottom:String!
    lollyPath:String!

}
type Mutation {
    createLolly(input:CreateLollyInput):Lolly
}

input CreateLollyInput {
    receiverName:String!
    senderName:String!
    message:String!
    lollyTop:String!
    lollyMiddle:String!
    lollyBottom:String!
    lollyPath:String!

}

`
module.exports ={
    typeDefs
}