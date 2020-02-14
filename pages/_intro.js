import React, {Component, Fragment} from 'react'
import {MDXProvider} from '@mdx-js/react'


class Intro extends Component{
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

export default Intro;

// export default ({Component, pageProps}) => (
//   <MDXProvider components={mdComponents}>
//     <Component {...pageProps} />
//   </MDXProvider>
// )

// export default ({Component, theProps}) => (
// 	<MDXProvider components={Intro}>
// 		<Component {...this.props} />
// 	</MDXProvider>
// )