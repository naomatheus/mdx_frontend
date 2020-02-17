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
	Flex,
} from 'rebass'




class App extends Component {
	constructor(props){
		super(props)

		this.state = {
			empty:true
		}
	}

	render(){
		return (

				<Flex
					flex='flex'
					minHeight='100%'

				>
				<Box
					width='100%'
					mx='auto'
					minHeight='100%'
					flexDirection='row'
					justifyContent='space-between'
					alignItems='stretch'
					bg='red'
					p={10}
					my={1}
				>
					<NavBar/>
					
				</Box>
				<Box
					maxWidth='82%'
					flexDirection='row'
					justifyContent='space-between'
					alignItems='stretch'
				>
					<Cover />
				</Box>
				</Flex>
			
			)
	}
}



export default App
