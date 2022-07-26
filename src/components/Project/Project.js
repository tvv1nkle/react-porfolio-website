import PageHeader from './../PageHeader/PageHeader';
import classes from './Project.module.css'

const Project = () => {
    return (
        <div className={classes.Project} id="Project">
            <PageHeader title={"My Project"} />
            <h2><a href="https://tvv1nkle.github.io/ColmarAcademy/" target="_blank" rel="noreferrer">
                • Codecademy build website using HTML and CSS for education Colmar Academy
            </a></h2>
            <h2><a href="https://tvv1nkle.github.io/restaurant/" target="_blank" rel="noreferrer">
                • Build restaurant reservation website using HTML
            </a></h2>
            <h2><a href="https://tvv1nkle.github.io/TeaAndCozyCodeCa/" target="_blank" rel="noreferrer">
                • Create bakery website using HTML and CSS Tea and Cozy Codeacademy Project
            </a></h2>
        </div>

    );
}

export default Project;