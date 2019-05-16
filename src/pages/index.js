import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

export const query = graphql`
  query list {
    tacoStandApi {
      listTacoStands {
        items {
          location
          name
          description
          id
          rating
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const { tacoStandApi: { listTacoStands: { items }}} = data
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {
        items.map((i, index) => (
          <div key={i.id}>
            <h2>{i.name}</h2>
            <h4>{i.description}</h4>
            <h5>{i.rating}</h5>
          </div>
        ))
      }
      <Link to="/page-2/">Go to page 2</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/profile/info">User Info</Link>
    </Layout>
  )
}

export default IndexPage
