import ProjectCard from "./ProjectCard" 
import bachillerato from './assets/img/bachillerato.png'
import chekar from './assets/img/chekar.png'
import galapp from './assets/img/galapp.png'
import kidemyFlyer from './assets/img/kidemy-flyer.png'
import kidemy from './assets/img/kidemy.png'

function Projects () {
    return (
        <section className="projects">
            <div className="projects_box">
                <h3>Projects 💻</h3>
                <article className="projects_description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui vel vitae saepe! A quas assumenda modi. Qui iure, autem eaque sequi alias, suscipit in impedit neque dolores facere, libero quibusdam.
                </article>
            
                <div id="slider" className="slider">
                    <div className="project_content">
                        <div id="content"  className="content">
                        <ProjectCard projectImg={bachillerato} projectTitle="Project #1" projectDescription={"This is an example of a description for a project"}/>
                        <ProjectCard projectImg={chekar} projectTitle="Project #2" projectDescription={"This is an example of a description for a project"}/>
                        <ProjectCard projectImg={galapp} projectTitle="Project #3" projectDescription={"This is an example of a description for a project"}/>
                        <ProjectCard projectImg={kidemyFlyer} projectTitle="Project #4" projectDescription={"This is an example of a description for a project"}/>
                        <ProjectCard projectImg={kidemy} projectTitle="Project #5" projectDescription={"This is an example of a description for a project"}/>
                        </div>
                    

                        <div className="controls">
                            <div className="control_arrow">
                                <a id="prev" className="control prev">
                                    <svg className="arrows" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                    </svg>
                                </a>
                                <a id="next" className="control next">
                                    <svg className="arrows" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Projects
  