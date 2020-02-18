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
import Store from '../store.md'

class Content extends Component {
	constructor(props){
		super(props)


		this.state = {
			empty:'for now'
		}
	}
	// potentially stateless

	render(){
		return (

			<div>
				<Box
					sx={{
						maxWidth: 512,
						mx: 'auto',
						px: 3
					}}
				>
					<Store />
					Here's text for the content box
				</Box>
			</div>

		)
	}


}

export default Content; 