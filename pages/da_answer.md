import Cover from './_intro.js'
import { 
	Box,
	Card,
	Image,
	Heading,
	Text,
	Flex,
	Link
} from 'rebass'

< Cover />

# Assessment Data

<Flex
	px={2}
	color='white'
	bg='black'
	alignItems='center'>
	<Text p={2} fontWeight='bold'>Data Dictionary V1</Text>
	<Box mx='auto'/>
	<Link variant='nav' href='#'>
		Concept
	</Link>
</Flex>


## Date of Assessment Attempt:
### Definition

> Field indicates date a skilled assessor attempted to complete an assessment with a client

### Attributes
* varchar
* Length - 200
* Nullable
* Unique - No
* Example

  > 01/01/2019

| Service Tables | Service Fields |
| :--- | :--- |
| dbo.da\_answer | question_code.DATEOFASSESSMENTATTEM |
| |question_code.DATEOFASSESSMENTATTEM_1 |

