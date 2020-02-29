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
import NavContent from './_nav_content.js'



class NavBar extends Component{
	constructor(props){
		super(props)


		this.state = {
			numbers: [1,2,3,4,5],
			options: NavContent
		}
		// This nav should generate links and sublinks from json files
		// Links to be generated will need to be passed to the state of this NavBar component

	}

	componentDidMount(){}
	

	renderNav(options){
		
		let title,subtitle,index,subindex
		let sublevel = {}
	/// each time one of the navigation variables above gets evaluated, I need to render an element with those contents 
		options.map((option) => {
			console.log(option)
			const optionArr = Object.entries(option)
			console.log(optionArr)
			// const display = 
			// display the title id, called pageTitle
			optionArr.map((item) => {
				console.log(item,'options arr items')
				for (let i = 0; i < item.length; i++){
					if (i === 0){
						index = item[i] 

					}
					if (i === 1){
						title = item[i].pageTitle
						sublevel = item[i].pageNums
						this.renderSubMenu(sublevel)
					}
					
					
				}
			})
			
		})
		/// only catches the last for loop
		console.log(title)
		console.log(sublevel)
		
	}

	renderSubMenu(sublevels){
		// this function takes in a sublevel from the renderMenu function
		console.log(sublevels)
		let sublevelArr = Object.entries(sublevels)
		console.log(sublevelArr)
		// convert each sublevel to an array of arrays

		// evaluate variables to be rendered from the sublevel arrays
		let subindex, subtitle
		for (let i = 0; i < sublevelArr.length;i++){
			// for each array. map over the elements in that array and assign variables
			sublevelArr[i].map((item,index) => {
				if (index === 0){
					subindex = item
					console.log(subindex,'subindex')
					/// indices 0 of items are subindex numbers
				}
				if (index === 1){
					subtitle = item
					console.log(subtitle,'subtitle')
					/// indices 1 of items are subtitle strings
				}
			})
		}
	}
	

	render() {
		
		const listItems = this.state.numbers.map((number) => {
			return (<li key={number.toString()}>{number}</li>)
		})

		const navItems = this.state.options.map((item) => {

			// return (<li key={item.toString()}>{item}</li>)
			// console.log(item);
				for (let [key, value] of Object.entries(item)){
					
					console.log(`${key},${value.pageTitle}`)
				}

		})

		// const mapToNavigation = (state) => {
		// 	for (let [key,value] of Object.entries(state)){
		// 		console.log(`${key},${value.pageTitle}`)

		// 		for (let [nest_k,nest_v] of Object.entries(value.pageNums)){
		// 		console.log(
		// 			`${nest_k},${nest_v}`
		// 			)
		
		// 		return (
		// 			<Fragment>
		// 			<li>{value.pageTitle}</li>
		// 				<ul>
		// 					<li>{nest_k,nest_v}</li>
		// 				</ul>
		// 			</Fragment>
		// 			)
		// 		}
		// 	}
		// }
		


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
						{navItems}
						{this.renderNav(this.state.options)}
					</ul>
				</Box>
				
			</Flex>

		)
	}

}


export default NavBar
// module.exports default = {NavBar}