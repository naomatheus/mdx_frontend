import React, {Component, Fragment} from 'react'
import Cover from './_intro.js'
import NavBar from './_navbar.js'
import Content from './content.js'
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
			className='docs-main'
		>
			<Flex
				className='docs-navbar--flex'
				flex='flex'
				minHeight='100%'
				flexDirection='row'
				width='100%'
				bg='red'
			>
				<Box
					className='docs-navbar'
					width='23.3%'
					mx={10}
					p={10}
					my={1}
				>
					<NavBar/>
					
				</Box>
			</Flex>

			<Flex
				className='docs-content--align'
				flexDirection='column'
			>

				<Box
					className='docs-cover'
					
				>
					<Cover /> 
				</Box>
				
				<Box
					className='docs-content'
					
				>
					<Content/>                          
				</Box>

			</Flex>
				
		</Flex>
			
			)
	}
}



export default App
