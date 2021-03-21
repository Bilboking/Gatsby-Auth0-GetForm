

import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'
import styled from "styled-components"

function StatefulPage ()  {
  
return (
    
 <Wrapper>

    <Header />
      <ContentWrapper>
      
                <TextWrapper>
           
            <Title>This is the link page for the stateful React component.</Title>
           
            <Description>A Gatsby/React-Auth0-Getform (SEO, Speed, Easy Update(using hooks)) site that acts like a SPA with a public area
                and private area with authentication.</Description>
           <Link to="/">Go back to the homepage</Link>
                </TextWrapper>
            </ContentWrapper>
        </Wrapper>
  )
}

const Wrapper = styled.div`
    background: linear-gradient(180deg, #0276FD 30%, #74BBFB 100%);
`

const ContentWrapper = styled.div`
	max-width: 1234px;
	padding: 200px 30px;
	margin: 0 auto;
`
const TextWrapper = styled.div`
    max-width: 360px;
    display: grid;
    gap: 30px;
`

const Title = styled.h1`
  font-weight: bold;
  font-size: 60px;
	color: white;
`

const Description = styled.p`
    font-size: 17px;
    line-height: 130%;
`

export default StatefulPage