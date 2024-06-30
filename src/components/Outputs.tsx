
const copy = ( target: HTMLElement ) => {
  navigator.clipboard.writeText(target.nextElementSibling?.textContent || '');

  target.textContent = 'success';
  target.classList.add('copy-success');

  setTimeout(() => {
    target.textContent = 'copy';
    target.classList.remove('copy-success');
  }, 1000);
};

type Props = {
  badgeTitle: string;
  color: string;
  style: string;
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

      <div className='src-title'>
        <p>HTML</p>
      </div>
      <pre className='src-space'>
        <button type='button' className='copy-button' onClick={({target}) =>copy(target as HTMLElement)}>copy</button>
        <code>&lt;img src=&quot;{htmlSrcUrl}&quot; /&gt;</code>
      </pre>

      <div className='src-title'>
        <p>Markdown</p>
      </div>

      <pre className='src-space'>
        <button type='button' className='copy-button' onClick={({target}) =>copy(target as HTMLElement)}>copy</button>
        <code>![{badgeTitle}]({mdSrcUrl})</code>
      </pre>
    </div>
  );
};

export default Outputs;
