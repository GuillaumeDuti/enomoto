export const generateMenu = (data) => {
    const menu = document.querySelector('#menu');
    data.forEach(field => {
        const fieldTitle = field['field-activity'];

        const fieldLi = document.createElement('li');
        const fieldDetails = document.createElement('details');
        const fieldSummary = document.createElement('summary');
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
};

export const generateAbout = (description, links) => {
    const aboutSection = document.querySelector('#about-section');
    const p = document.createElement('p');
    p.innerHTML = description;

    links.forEach(link => {
        const a = document.createElement('a');
        a.href = link.url;
        a.innerHTML = link.name;
        p.appendChild(a);
    });

    aboutSection.appendChild(p);

    const aboutButton = document.querySelector('#about-link');
    aboutButton.addEventListener('click', () => {
        aboutButton.classList.toggle('active');
        aboutSection.classList.toggle('active');
    });

};

