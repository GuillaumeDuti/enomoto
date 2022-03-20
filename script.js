import data from './data/data.js';
import projectSideRendering from './projectSide.js';
let selectedProject = [];

const menu = document.querySelector('#menu');

data.forEach(field => {
    const fieldTitle = field['field-activity'];

    const fieldLi = document.createElement('li');
    const fieldDetails = document.createElement('details');
    const fieldSummary = document.createElement('summary');
    // const fieldSpan = document.createElement('')
    const fieldUl = document.createElement('ul');
    fieldUl.id = `menu_${fieldTitle}`;

    fieldSummary.textContent = fieldTitle;
    menu.appendChild(fieldLi);
    fieldLi.appendChild(fieldDetails);
    fieldDetails.appendChild(fieldSummary);
    fieldDetails.appendChild(fieldUl);

    const projects = field.projects;

    projects.forEach(project => {
        const projectTitle = project.name;
        const projectLi = document.createElement('li');

        const projectA = document.createElement('a');
        projectA.href = "#";
        projectA.textContent = projectTitle;

        projectLi.appendChild(projectA);
        fieldUl.appendChild(projectLi);
    });
});


const linksProjects = document.querySelectorAll('#menu a');

linksProjects.forEach(element => {
    element.addEventListener("click", function () {
        const selection = element.textContent;
        selectProject(selection);

        const aActive = document.querySelector('a.active');
        aActive.classList.remove('active');
        element.classList.toggle('active');
    });
});

const selectProject = async (selection) => {
    const field = data.map(field => field.projects).flat();
    const projet = field.filter(project => project.name == selection);
    selectedProject = projet[0];
    // uploadImagesProject(projet[0]);
    const projectContainer = document.querySelector('#project-container');

    const projectGenerate = await projectSideRendering(selectedProject);
    projectContainer.appendChild(projectGenerate);
    // console.log(projectSideRendering(selectedProject));
};


