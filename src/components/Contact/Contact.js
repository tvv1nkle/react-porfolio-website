import { FaGithub, FaMailBulk } from "react-icons/fa";
import classes from './Contact.module.css'

const Contact = () => {
    return ( 
        <div className={classes.Contact}>
            <h1>Contact</h1>
            <h2><a href="https://github.com/tvv1nkle" target="_blank" rel="noreferrer">
                Github
            </a></h2>
            <h2>nutchawakorn.n@gmail.com</h2>
        </div>
     );
}
 
export default Contact;