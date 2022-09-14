const generateAbout = aboutText => {
    if (!aboutText) {
      return '';
    }
  
    return `
    ${aboutText}
    `;
  };
  
  // create the projects section
  const generateProjects = projectsArr => {
    return `
        ${projectsArr
          .filter(({ feature }) => feature)
          .map(({ name, description, languages, link }) => {
            return `
            ${name}
            ${languages.map(language => language).join(',')}
            ${description}
            ${link}
          `;
          })
          .join('')}
  
        ${projectsArr
          .filter(({ feature }) => !feature)
          .map(({ name, description, languages, link }) => {
            return `
            ${name}
            ${languages.join(', ')}
            ${description}
            ${link}
          `;
          })
          .join('')}

    `;
  };
  
  // export function to generate entire page
  module.exports = templateData => {
    // destructure page data by section
    const { projects, about, ...header } = templateData;
  
    return `
        ${generateAbout(about)}
        ${generateProjects(projects)}
        ${new Date().getFullYear()} 
        ${header.name}
    `;
  };