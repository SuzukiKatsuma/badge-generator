import OutputBox from '~/components/OutputBox';
import { makeBadgeStringForHTML, makeBadgeStringForMarkdown } from '~/lib/makeBadgeString';

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
        <div dangerouslySetInnerHTML={{ __html: htmlBadgeString }} />
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
