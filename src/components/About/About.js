import classes from './About.module.css'
import PageHeader from '../PageHeader/PageHeader';
import me from './../../img/me.png'

const About = () => {
    return (
        <div className={classes.AboutMe}>
            <PageHeader title={'About Me'} />
            <div className={classes.Container}>
                <div className={classes.Text}>
                    <h2>Hello!</h2>
                    <p>My name is Nutchawakorn Na Lampang and I’m excited to be applying for Technology industry.
                        I graduated in Agricultural Economics from Kasetsart university.
                        I've worked with many people.I'm a quick learner and able to work under pressure.
                        I’ve spent three months try to learn coding and graduated from Junior Software Developer bootcamp Generation Thailand
                        where I engaged in intensive youth training program designed to prepare participants
                        for a position in the web development industry by learning about coding,
                        programming, professionalism, persistence and the essential behavioural skills
                        and mindsets to be successful on the job.I believe my background will bring a valuable perspective to your team.
                        It has been a long-term goal of mine to pursue a career in Junior Software Developer.
                    </p>
                </div>
                <div className={classes.Photo}>
                    <img className={classes.Me} src={me} alt="me"></img>
                </div>
            </div>
        </div>
    );
}

export default About;