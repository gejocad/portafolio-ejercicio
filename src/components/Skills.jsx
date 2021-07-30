import React, { Component } from 'react'
import styled from "styled-components";
import H2Styled from '../styled/H2Styled';


const Container = styled.div`
display: flex;
flex-direction: column;

  
`



const ProgressHtml=styled.div`
height: 8px;
border-radius: 50px;
background:  #a8324e;
    width: 55%;
    
    @media only screen and (max-width: 767px){
        width:55%
    }
    `

const ProgressCss =styled.div`
height: 8px;
border-radius: 50px;
background: #a8324e;
width: 40%;

   @media only screen and (max-width: 767px){
    width:45%
}
    `

const ProgressJavascript= styled.div`
    width: 35%;
    height: 8px;
    
    border-radius: 50px;
    background: #a8324e;
    
    @media only screen and (max-width: 767px){
        width:35%
    }
    `

const ProgressReactJs= styled.div`
    
    height: 8px;
    border-radius: 50px;
    background:  #a8324e;
    width: 25%;
    @media only screen and (max-width: 767px){
        width:25%
    }
    `
const SkillTextH= styled.p`

justify-content:center;

`
const SkillTextJ= styled.p`

justify-content:center;
`
const SkillTextC= styled.p`

justify-content:center;
`
const SkillTextR= styled.p`

justify-content:center;
`
export default class Skills extends Component {
    render() {
        return (
            

            <Container>
                <H2Styled name="Habilidades"></H2Styled>

               
                            
                                <SkillTextH >Html</SkillTextH>
                            <ProgressHtml>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ProgressHtml>
                            
                        
                        
                            <SkillTextC >Css</SkillTextC>
                           
                            <ProgressCss >&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ProgressCss>
                            
                            <SkillTextJ >JavaScript</SkillTextJ>
                            
                            
                            <ProgressJavascript>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ProgressJavascript>
                           
                            <SkillTextR >ReactJS</SkillTextR>
                       
                            
                            <ProgressReactJs>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</ProgressReactJs>
                            
                 
            </Container>
              )
            }
        }