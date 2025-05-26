import type { BadgeParameter } from "@/types/BadgeParameter"
const BASE_URL = 'https://img.shields.io/badge';

const badgeTitleToLogoString = (badgeTitle: string) => {
  if (badgeTitle === 'bash') return 'gnu-bash';

  const logo =
    badgeTitle.toString().toLowerCase()
      .replace(/ /g, '-')
      .replace(/\+/g, '%2b');

  return logo;
};

const makeBadgeStringForMarkdown = (badgeParameter: BadgeParameter) => {
  const name = badgeParameter.name
    .replace(/ /g, '&nbsp;')
    .replace(/\+/g, '%2b');

  const logo = badgeTitleToLogoString(badgeParameter.name);

  const url = `${BASE_URL}/${name}-${badgeParameter.color}.svg?logo=${logo}&style=${badgeParameter.style}`;

  return `![${name}](${url})`;
};

const makeUrlForHTML = (badgeParameter: BadgeParameter) => {
  const logo = badgeTitleToLogoString(badgeParameter.name);
  return `${BASE_URL}/${badgeParameter.name}-${badgeParameter.color}.svg?logo=${logo}&style=${badgeParameter.style}`;
};

const makeBadgeStringForHTML = (badgeParameter: BadgeParameter) => {
  const url = makeUrlForHTML(badgeParameter);
  return `<img src="${url}" alt="${badgeParameter.name}" />`;
};

export { makeBadgeStringForMarkdown, makeUrlForHTML, makeBadgeStringForHTML };
