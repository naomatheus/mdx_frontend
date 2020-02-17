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
import {main_description,heading,heading2, ol1,ol2,ol3,ol4,ol5} from '../text.json'

class Cover extends Component{
	constructor(props){
		super(props)



		this.state = {
			empty:false,
			json: false
		}

		const parseJson = (json) => {

		}
	}
	/* 
		return parsed JSON from Postgres, gathered expediently by psycopg2
		map over and render as component the returned JSON from dataframe 
	*/
	

	render(){
		return (
			<Fragment>
				<Flex
					px={1}
					color='white'
					flexDirection='column'
					justifyContent='space-between'
					height={100}
					width='100%'
					>
					<Heading
						color='black'
						
						>
						Data Dictionary
					</Heading>
					<Box
						bg='grey'
						p={3}
						justifyContent='center'
						>
						<Text 
							fontWeight='bold'
							color='black'
							>
							{heading}

						</Text>
						<br/>
						<Text>
							<div>
								{main_description}	
							</div>
							<br/>
							<div className='heading2'>
								{heading2}
								<ul>
									<li>
										{ol1}
									</li>
									<li>
										{ol2}
									</li>
									<li>
										{ol3}
									</li>
									<li>
										{ol4}
									</li>
									<li>
										{ol5}
									</li>
								</ul>
								
							</div>
							
						</Text>
					</Box>
				</Flex>
			</Fragment>
		)
	}
}

export default Cover;
