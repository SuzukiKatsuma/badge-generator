import OutputBox from '~/components/OutputBox';

interface Props {
  readonly badgeTitle: string;
  readonly color: string;
  readonly style: string;
};

const Outputs = ({ badgeTitle, color, style }: Props) => {
  const BASE_URL = 'https://img.shields.io/badge/';
  let logo = badgeTitle.toString().toLowerCase();
  const name = badgeTitle.replace(/ /g, '&nbsp;');

  logo = logo.replace(/ /g, '-');
  logo = logo.replace(/\+/g, '%2b');
  if (logo === 'bash') logo = `gnu-${logo}`;

  const htmlSrcUrl = `${BASE_URL}${badgeTitle}-${color}.svg?logo=${logo}&style=${style}`;
  const mdSrcUrl = `${BASE_URL}${name}-${color}.svg?logo=${logo}&style=${style}`;

  return (
    <div className='output-area'>
      <figure className='badge'>
        <img src={htmlSrcUrl} alt={badgeTitle} />
      </figure>

      <OutputBox
        targetLabel='Markdown'
        badgeString={`![${badgeTitle}](${mdSrcUrl})`}
      />

      <OutputBox
        targetLabel='HTML'
        badgeString={`<img src="${htmlSrcUrl}" />`}
      />
    </div>
  );
};

export default Outputs;
