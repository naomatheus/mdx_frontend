import React, {Component, Fragment} from 'react'
import {MDXProvider} from '@mdx-js/react'



const NavContent = [
	{
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
]

export default NavContent;
