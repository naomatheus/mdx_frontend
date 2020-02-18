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
			numbers: [1,2,3,4,5],
			nestedNums: {
				1: {
					pageTitle: 'Introduction',
					pageNums: {
						1.1 : 'Generating a Business Rules Catalog',
						1.2 : 'MDX - Markdown',
						1.3 : 'Gatsby',
						1.4 : 'Next.js'
					}
				},
				2: {
					pageTitle: 'Importing your Data Dictionary',
					pageNums: {
						2.1:'Getting Started',
						2.2:'Formatting Your Excel Document',
						2.3:'Errors',
						2.4:'What to Expect'
					}
				},
				3: {
					pageTitle: 'Customization',
					pageNums:{
						3.1:'Available Features',
						3.2:'Pricing',
						3.3:'Ad Hoc Support',
						3.4:'JSON, CSV, and Other Import Formats'
					}
				}


			}
		}


		// This nav should generate links and sublinks from json files
		// Links to be generated will need to be passed to the state of this NavBar component

	}

	render() {
		
		const listItems = this.state.numbers.map((number) => {
			return (<li key={number.toString()}>{number}</li>)
		})

		const mapToNavigation = (state) => {

			for (let [key,value] of Object.entries(state)){
				console.log(`${key},${value.pageTitle}`)


				for (let [nest_k,nest_v] of Object.entries(value.pageNums)){
				console.log(
					`${nest_k},${nest_v}`
					)
				return (
					<Fragment>
					<li>{value.pageTitle}</li>
						<ul>
							<li>{nest_k,nest_v}</li>
						</ul>
					</Fragment>
					)
				}

			
			}
			

			
		}
		


		return (
			<Flex>
				<Box
					flexDirection='column'
					justifyContent='space-evenly'
					alignItems='flex-start'
				>
					<ul>
						{listItems}

					</ul>
					<ul>
						{mapToNavigation(this.state.nestedNums)}
					</ul>
				</Box>
				
			</Flex>

		)
	}

}


export default NavBar
// module.exports default = {NavBar}