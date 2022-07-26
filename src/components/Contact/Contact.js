import { FaGithub, FaMailBulk } from "react-icons/fa";
import classes from './Contact.module.css'


const handleURL = (url) => {
    return () => window.open(url, "_blank")
}

const Contact = () => {
    return ( 
        <div className={classes.Contact}>
            <h1>Contact</h1>
            <FaGithub color='black' size='50px' style={{padding: '1%'}}
            onClick={handleURL('https://github.com/tvv1nkle')} />
            <FaMailBulk color='black' size='50px' style={{padding: '1%'}}
            onClick={handleURL('nutchawakorn.n@gmail.com')} />
            <h2>nutchawakorn.n@gmail.com</h2>
        </div>
     );
}
 
export default Contact;
