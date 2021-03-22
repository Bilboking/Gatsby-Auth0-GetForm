import React from "react"
import { Link } from "gatsby"
import Header from '../components/header'


// import Layout from "../components/layout"
// import SEO from "../components/seo"
import styled from "styled-components"
// import { withAuthenticationRequired } from '@auth0/auth0-react'


// const SecondPage = () => (
//   <Layout>
//     <SEO title="Page two" />
//     <h1>Hi from the second page</h1>
//     <p>Welcome to page 2</p>
//     <Link to="/">Go back to the homepage</Link>
//   </Layout>
// )

function BuyPage ()  {
  
return (
    
 <Wrapper>

    <Header />
      <ContentWrapper>
    
                <TextWrapper>
           
            <Title>Sorry, nothing yet avialable to buy.</Title>
           
            <Description>Check back soon.</Description>
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

export default BuyPage