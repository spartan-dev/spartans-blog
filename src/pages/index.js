import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Spartans Crypt for code sagas  "

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <StaticQuery
        query={bigFront}
        render={ data => {
          console.log(data)
          return(
            <Container>
                <Img
              fluid={data.logo.childImageSharp.fluid}
              alt="spartans logo"
              style={{
                marginBottom: 0,
                width:300,
                height:300,
               
              }}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            </Container>
          )
        }}
        />
        {/* <img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" /> */}
        <h1>
          Hey spartans{" "}
          <span role="img" aria-label="wave emoji">
            👋 
          </span>
        </h1>
        <p>Welcome to your new Gatsby website. You are on your home page.</p>
        <p>
          This starter comes out of the box with styled components and Gatsby's
          default starter blog running on Netlify CMS.
        </p>
        <p>Now go build something great!</p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

const bigFront = graphql`
query spartan{
  logo: file(absolutePath:{regex:"/spartansLogo.png/"}){
    childImageSharp {
      fluid(maxWidth:800){
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Container = styled.div`
  display: flex;
`

export default IndexPage
