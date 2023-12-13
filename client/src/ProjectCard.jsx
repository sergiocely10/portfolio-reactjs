
function ProjectCard ({projectImg, projectTitle, projectDescription}) {
    return(
        <div className="card">
            <div className="card_content">
                <div className="card_image">
                    <img src={projectImg}/>
                </div>
                <div className="card_description">
                    <span className="title">{projectTitle}</span>
                    <span className="description">{projectDescription}</span>
                </div>
                <div className="button">
                    <button className="viewmore"> View more </button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard