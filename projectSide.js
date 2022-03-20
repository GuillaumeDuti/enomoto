// templates 
const infoTemplates = (title, description = "&#3232;_&#3232;") => {

    // <div id="project-title">
    //             <h3>${title}</h3>
    //         </div>
    return `<div id="project-description">
                <p>${description}</p>
            </div>`;
};

const imagesTemplate = (src, alt) => {

    // return `<div class="img--container">
    //             <img id="current-img" src="${src}" alt="${alt}">
    //         </div>`;

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('img--container');

    let img = document.createElement('img');
    img.setAttribute('src', src);
    img.setAttribute('alt', alt);

    return imgContainer.appendChild(img);
};

// Template fill 
const generateInfo = (project) => {
    const title = project.name;
    const description = project.description;

    const infoContainer = document.createElement('div');
    infoContainer.id = "project-info-container";

    infoContainer.innerHTML = infoTemplates(title, description);
    return infoContainer;
};

const generateImages = (project) => {

    const imagesContainer = document.createElement('div');
    imagesContainer.id = "images-container";
    project.images.forEach((image, index) => {
        const img = imagesTemplate(image.url, image.alt);
        imagesContainer.appendChild(img);
    });
    console.log(imagesContainer);
    return imagesContainer;
};

const projectSideRendering = async (project) => {
    // console.log(selectedProject);
    await removeProject();
    let divGallery = document.createElement('div');
    divGallery.id = "gallery";
    const infosSection = await generateInfo(project);
    const imagesSection = await generateImages(project);

    // divGallery.innerHTML = infosSection;
    divGallery.appendChild(infosSection);
    divGallery.appendChild(imagesSection);
    // console.log(infoTemplates);
    return divGallery;

};



const removeProject = () => {
    const projectContainer = document.querySelector('#project-container');
    let first = projectContainer.firstElementChild;
    while (first) {
        first.remove();
        first = projectContainer.firstElementChild;
    }
};



export default projectSideRendering;