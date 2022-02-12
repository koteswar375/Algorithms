import './Problem.css';
import './Description';
import './Example';
import Description from './Description';
import Example from './Example';
import Constraints from './Constraints';
import Heading from "./Heading";


const Problem = (props) => {
  return (
    <div className="problem border-end border-secondary">
      <Heading></Heading>
      <Description></Description>
      <Example></Example>
      <Constraints></Constraints>
    </div>
  )
}


export default Problem