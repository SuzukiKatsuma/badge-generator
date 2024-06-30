const BASE_URL = 'https://img.shields.io/badge';

const badgeTitleToLogoString = (badgeTitle: string) => {
  if (badgeTitle === 'bash') return 'gnu-bash';

  const logo =
    badgeTitle.toString().toLowerCase()
      .replace(/ /g, '-')
      .replace(/\+/g, '%2b');

  return logo;
};

const makeBadgeStringForMarkdown = (badgeTitle: string, color: string, style: string) => {
  const name = badgeTitle
    .replace(/ /g, '&nbsp;')
    .replace(/\+/g, '%2b');

  const logo = badgeTitleToLogoString(badgeTitle);

  const url = `${BASE_URL}/${name}-${color}.svg?logo=${logo}&style=${style}`;

  return `![${name}](${url})`;
};

const makeUrlForHTML = (badgeTitle: string, color: string, style: string) => {
  const logo = badgeTitleToLogoString(badgeTitle);
  return `${BASE_URL}/${badgeTitle}-${color}.svg?logo=${logo}&style=${style}`;
};

const makeBadgeStringForHTML = (badgeTitle: string, color: string, style: string) => {
  const url = makeUrlForHTML(badgeTitle, color, style);
  return `<img src="${url}" alt="${badgeTitle}" />`;
};

export { makeBadgeStringForMarkdown, makeUrlForHTML, makeBadgeStringForHTML };
