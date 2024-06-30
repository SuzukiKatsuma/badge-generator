const BASE_URL = 'https://img.shields.io/badge';

const badgeTitleToLogoString = (badgeTitle: string) => {
  if (badgeTitle === 'bash') return 'gnu-bash';

  const logo =
    badgeTitle.toString().toLowerCase()
      .replace(/ /g, '-')
      .replace(/\+/g, '%2b');

  return logo;
};

const makeBadgeStringForMarkdown = (badgeData: BadgeData) => {
  const name = badgeData.name
    .replace(/ /g, '&nbsp;')
    .replace(/\+/g, '%2b');

  const logo = badgeTitleToLogoString(badgeData.name);

  const url = `${BASE_URL}/${name}-${badgeData.color}.svg?logo=${logo}&style=${badgeData.style}`;

  return `![${name}](${url})`;
};

const makeUrlForHTML = (badgeData: BadgeData) => {
  const logo = badgeTitleToLogoString(badgeData.name);
  return `${BASE_URL}/${badgeData.name}-${badgeData.color}.svg?logo=${logo}&style=${badgeData.style}`;
};

const makeBadgeStringForHTML = (badgeData: BadgeData) => {
  const url = makeUrlForHTML(badgeData);
  return `<img src="${url}" alt="${badgeData.name}" />`;
};

export { makeBadgeStringForMarkdown, makeUrlForHTML, makeBadgeStringForHTML };
