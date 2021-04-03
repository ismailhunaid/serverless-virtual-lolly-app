import React from "react"
import LollyComponent from '../components/LollyComponent'
import Header from '../components/Header'
import { navigate } from 'gatsby'




const Home = () => {
  return (
    <div className="container">

      <Header />
      <div className="lolly-container">
        <div>
          <LollyComponent lollyTop="red" lollyMiddle="blue" lollyBottom="brown" />
        </div>
        <div>
          <LollyComponent lollyTop="red" lollyMiddle="blue" lollyBottom="brown" />

        </div>
        <div>
          <LollyComponent lollyTop="red" lollyMiddle="blue" lollyBottom="brown" />
        </div>
        <div>
          <LollyComponent lollyTop="red" lollyMiddle="blue" lollyBottom="brown" />
        </div>

      </div>
      <input type="button" value="Create New Lolly"  onClick={()=> {navigate('/createNew')}}/> 
      

    </div>
  )
}

export default Home