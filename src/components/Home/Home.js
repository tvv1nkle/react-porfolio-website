import classes from './Home.module.css'
import code from './../../img/code.svg'
import binaryWorld from './../../img/binaryWorld.jpg'
const Home = () => {
    return ( 
        <div className={classes.Home} id="Home">
            <div className={classes.Container}>
                <h1 className={classes.Hello}>Hello, <br></br>My name is Nutchawakorn Na Lampang</h1>
                <h1>Welcome on my website</h1>
            </div>
            <img className={classes.Code} src={code} alt="code"></img>
            <img className={classes.BinaryWorld} src={binaryWorld} alt="binaryWorld"></img>
        </div>
     );
}
 
export default Home;