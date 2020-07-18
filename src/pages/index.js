import React from 'react'
import styled from 'styled-components'
import Layout from 'layout/Layout'
import SEO from 'components/SEO/SEO'
import Header from 'components/Header/Header'
import Options from 'components/Options/Options'

const OptionsWrapper = styled.main`
  padding: 100px 0;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <OptionsWrapper>
      <Options />
    </OptionsWrapper>
  </Layout>
)

export default IndexPage
