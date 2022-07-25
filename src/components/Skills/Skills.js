import classes from './Skills.module.css'
import PageHeader from './../PageHeader/PageHeader'
import CodeThinking from './../../img/CodeThinking.svg'

const listTitleStyle = { fontWeight: 900, color: '#9B1FE8', marginBottom: '4px'}

const backendSkills =
 <ul>
    <li style={ listTitleStyle }>BACKEND</li>
    <li>MongoDB</li>
    <li>SQL</li>
 </ul>

const frontendSkills = 
 <ul>
    <li style={ listTitleStyle }>FRONTEND</li>
    <li>Javascript</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>ReactJS</li>
 </ul>

const totalSkills = [backendSkills, frontendSkills]


const Skills = () => {
    return ( 
        <div className={classes.Skills}>
            <PageHeader title={'What about the Skills?'}/>
            <p>I'm a life long learner and enjoy learning new stuff!!
            </p>
            <div className={classes.Container}>
            <img src={CodeThinking} alt="CodeThinking" />
               {totalSkills.map(skills => {
                return (
                    <div className={classes.List}>
                         {skills}
                     </div>   
                )
               })}
            </div>
        </div>
     );
}
 
export default Skills;