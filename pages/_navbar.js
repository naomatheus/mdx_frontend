import React, {Component, Fragment} from 'react'
import {MDXProvider} from '@mdx-js/react'
import { 
	Box,
	Card,
	Image,
	Heading,
	Text,
	Flex
} from 'rebass'

class NavBar extends Component{
	constructor(props){
		super(props)


		this.state = {
			empty:'for now'
		}

	}

	render() {
		return (
			<Flex>
				
	
				<Box
					flexDirection='column'
					justifyContent='space-evenly'
					alignItems='flex-start'
				>
					<div>Links</div>
					<div>Links</div>
					<div>Links</div>
					<div>Links</div>
				</Box>
				
			</Flex>

		)
	}

}


export default NavBar
// module.exports default = {NavBar}