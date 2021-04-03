import React from 'react'
import {graphql} from 'gatsby'

export const query = graphql`
query{
    allGraphqlSourceLollies{
    getLolly(input:{lollyPath:"HaVJiKdid"}){
      receiverName
    
    }
    }
    }


`




    

const  lollyTemplate=(props)=> {
    console.log(JSON.parse(props.data.allGraphqlSource.getLolly.receiverName))
 
    return (
        <div>
            this is lolly template 
            
        </div>
    )
}

export default lollyTemplate
