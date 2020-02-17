import React, {Component, Fragment} from 'react'
import Cover from './_intro.js'
import NavBar from './_navbar.js'
import {MDXProvider} from '@mdx-js/react'
import { 
	Box,
	Card,
	Image,
	Heading,
	Text,
	Flex
} from 'rebass'

const mdComponents = {
  h1: props => <h1 style={{color: 'red'}} {...props} />
}

const components = {
	h1: Heading.h1,
	h2: Heading.H2,
	p: Text,
	box: Box,
	card:Card,
	flex: Flex
}


export default ({Component, pageProps}) => (
  <MDXProvider components={components}>
    <Component {...pageProps} />
    
  </MDXProvider>
)

