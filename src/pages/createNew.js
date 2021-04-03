import React, { useState, useRef, } from 'react'
import Header from '../components/Header'
import { useMutation } from '@apollo/client'
import gql from 'graphql-tag';
import LollyComponent from '../components/LollyComponent'

const CREATE_LOLLY = gql`
 mutation createLolly($input:CreateLollyInput){
     createLolly(input:$input){
         receiverName
         senderName
         message
         lollyTop
         lollyMiddle
         lollyBottom
         lollyPath
         
     }

}

`




const CreateNew = () => {
  const [createNewLolly] = useMutation(CREATE_LOLLY)


    const [colorTop, setColorTop] = useState('red')
    const [colorMiddle, setColorMiddle] = useState('green')
    const [colorBottom, setColorBottom] = useState('orange')
    const receiverNameRef = useRef();
    const messageRef = useRef();
    const senderNameRef = useRef();

    const createLollyForm =  async () => {
        console.log('clicked')
        const result = await createNewLolly({
            variables:{
                input:{
                    receiverName:receiverNameRef.current.value,
                    senderName:senderNameRef.current.value,
                    message:messageRef.current.value,
                    lollyTop:colorTop,
                    lollyMiddle:colorMiddle,
                    lollyBottom:colorBottom,
                    lollyPath:"Abc"
                    
                }
            }
        }); console.log(result)
    }
        
       



    return (
        <div className="container">
            <Header />

            <div className="lolly-form">
                <div >
                    <LollyComponent lollyTop={colorTop} lollyMiddle={colorMiddle} lollyBottom={colorBottom} />
                </div>
                <div className="lolly-color-picker" >

                    <label htmlFor="lollyTop" className="colorPickerLabel" >

                        <input type="color" className="colorPicker" name="lollyTop" value={colorTop} id="lollyTop"
                            onChange={(e) => { setColorTop(e.target.value) }}

                        />

                    </label>

                    <label htmlFor="lollyMiddle" className="colorPickerLabel" >

                        <input type="color" className="colorPicker" name="lollyMiddle" value={colorMiddle} id="lollyMiddle"
                            onChange={((e) => { setColorMiddle(e.target.value) })}
                        />

                    </label>

                    <label htmlfor="lollyBottom" className="colorPickerLabel" >
                        <input type="color" className="colorPicker" name="lollyBottom" value={colorBottom} id="lollyBottom"
                            onChange={((e) => { setColorBottom(e.target.value) })}


                        />
                    </label>

                </div>
                <div>
                    <div className="lollyFrom">
                        <label htmlFor="receiverName"> TO
                        </label>
                        <input type="text" name="receiverName" id="receiverName"
                            ref={receiverNameRef} />
                        <label htmlFor="message"> Message
                        </label>
                        <textarea rows="15" columns="35"  name="message" ref={messageRef} >

                        </textarea>

                        <label htmlFor="senderName"> From
                        </label>
                        <input type="text" name="senderName" id="senderName"
                            ref={senderNameRef} />

                    </div>
                    <input type="button" value="SEND" onClick={createLollyForm} />
                    

                </div>

            </div>
          
        </div>




    )
}

export default CreateNew
