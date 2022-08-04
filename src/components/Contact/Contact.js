import { FaGithub, FaMailBulk } from "react-icons/fa";
import classes from './Contact.module.css'
import PageHeader from './../PageHeader/PageHeader';

const handleURL = (url) => {
    return () => window.open(url, "_blank")
}

const Contact = () => {
    return ( 
        <div className={classes.Contact} id="Contact">
            <PageHeader title={"Contact"} />
            <FaGithub color='black' size='50px' style={{padding: '1%',marginLeft: '45%'}}
            onClick={handleURL('https://github.com/tvv1nkle')} />
            <FaMailBulk color='black' size='50px' style={{padding: '1%'}}
            onClick={handleURL('nutchawakorn.n@gmail.com')} />
            <center><h2>nutchawakorn.n@gmail.com</h2></center>
        </div>
     );
}
 
export default Contact;
