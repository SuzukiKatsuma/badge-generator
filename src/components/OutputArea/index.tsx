import OutputBox from '@/components/OutputBox';
import { makeBadgeStringForMarkdown, makeUrlForHTML, makeBadgeStringForHTML } from '@/lib/makeBadgeString';

import style from "./style.module.css";

interface Props {
  readonly badgeData: BadgeData;
};

const OutputArea = ({ badgeData }: Props) => {
  const htmlBadgeString = makeBadgeStringForHTML(badgeData);
  const markdownBadgeString = makeBadgeStringForMarkdown(badgeData);

  return (
    <div className={style.outputArea}>
      <figure className={style.badge}>
        <img src={makeUrlForHTML(badgeData)} alt={badgeData.name} />
      </figure>

      <OutputBox
        targetLabel='Markdown'
        badgeString={markdownBadgeString}
      />

      <OutputBox
        targetLabel='HTML'
        badgeString={htmlBadgeString}
      />
    </div>
  );
};

export default OutputArea;
