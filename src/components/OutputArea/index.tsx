import OutputBox from '~/components/OutputBox';
import { makeBadgeStringForMarkdown, makeUrlForHTML, makeBadgeStringForHTML } from '~/lib/makeBadgeString';

interface Props {
  readonly badgeTitle: string;
  readonly color: string;
  readonly style: string;
};

const OutputArea = ({ badgeTitle, color, style }: Props) => {
  const htmlBadgeString = makeBadgeStringForHTML(badgeTitle, color, style);
  const markdownBadgeString = makeBadgeStringForMarkdown(badgeTitle, color, style);

  return (
    <div className='output-area'>
      <figure className='badge'>
        <img src={makeUrlForHTML(badgeTitle, color, style)} alt={badgeTitle} />
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
