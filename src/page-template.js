const generateAbout = aboutText => {
    if (!aboutText) {
      return '';
    }
    return `
        ${aboutText}
    `;
  };
  
  const generateProjects = projectsArr => {
    return `
        ${projectsArr
          .filter(({ feature }) => feature)
          .map(({ name, description, languages, license, link }) => {
            return `
                ${name}
                ${languages.map(language => language).join(',')}
                ${license}
              ${description}
              ${link}
          `;
          })
          .join('')}
  
        ${projectsArr
          .filter(({ feature }) => !feature)
          .map(({ name, description, languages, license, link }) => {
            return `
            ${name}
                ${languages.join(', ')}
                ${license}
              ${description}
              <a href="${link}">
          `;
          })
          .join('')}
    `;
  };
  
  module.exports = templateData => {

    const { projects, about, ...header } = templateData;
  
    return `
        # ${header.name}
            https://github.com/${
              header.github
            }
        ## ${generateAbout(about)}
        ## ${generateProjects(projects)}

        ### ${new Date().getFullYear()} by ${header.name}
    `;
  };
  