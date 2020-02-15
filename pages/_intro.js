import React, {Component, Fragment} from 'react'
import {MDXProvider} from '@mdx-js/react'


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
				<div> There she blows </div>

			</Fragment>
		)
	}
}

export default Cover;
