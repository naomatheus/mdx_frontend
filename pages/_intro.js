import React, {Component, Fragment} from 'react'
import {MDXProvider} from '@mdx-js/react'
import { 
	Box,
	Card,
	Image,
	Heading,
	Text,
	Flex,
	Link
} from 'rebass'

class Cover extends Component{
	constructor(props){
		super(props)

		this.state = {
			empty:false
		}
	}
	/* 
		return parsed JSON from Postgres, gathered expediently by psycopg2
		map over and render as component the returned JSON from dataframe 
	*/

	render(){
		return (


			<Fragment>
				<div> Cover component </div>
				<Flex
					px={2}
					color='white'
					flexDirection='column'
					justifyContent='center'>
					<Box
						bg='black'
						justifyContent='column'
						width='33%'
						height={500}
						>
						<Text p={2} fontWeight='bold'>Data Dictionary V1
						</Text>
					</Box>
					
					<Link variant='nav' href='#'>
						Concept
					</Link>
				</Flex>
			</Fragment>
		)
	}
}

export default Cover;
