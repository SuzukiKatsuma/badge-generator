import OutputBox from "@/components/OutputBox";
import {
  makeBadgeStringForHTML,
  makeBadgeStringForMarkdown,
  makeUrlForHTML,
} from "@/lib/makeBadgeString";
import type { BadgeParameter } from "@/types/BadgeParameter";

import style from "./style.module.css";

interface Props {
  readonly badgeParameter: BadgeParameter;
}

const OutputArea = ({ badgeParameter }: Props) => {
  const htmlBadgeString = makeBadgeStringForHTML(badgeParameter);
  const markdownBadgeString = makeBadgeStringForMarkdown(badgeParameter);

  return (
    <div className={style.outputArea}>
      <figure className={style.badge}>
        <img src={makeUrlForHTML(badgeParameter)} alt={badgeParameter.name} />
      </figure>

      <OutputBox targetLabel="Markdown" badgeString={markdownBadgeString} />

      <OutputBox targetLabel="HTML" badgeString={htmlBadgeString} />
    </div>
  );
};

export default OutputArea;
