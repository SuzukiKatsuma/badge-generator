import React from 'react';

const copy = ({ target }) => {
  navigator.clipboard.writeText(target.nextElementSibling.textContent);

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
  let htmlSrc = 'https://img.shields.io/badge/';
  let mdSrc = 'https://img.shields.io/badge/';
  let logo = badgeTitle.toString().toLowerCase();
  const name = badgeTitle.replace(/ /g, '&nbsp;');

  logo = logo.replace(/ /g, '-');
  logo = logo.replace(/\+/g, '%2b');
  if (logo === 'bash') logo = `gnu-${logo}`;

  htmlSrc += `${badgeTitle}-${color}.svg?logo=${logo}&style=${style}`;
  mdSrc += `${name}-${color}.svg?logo=${logo}&style=${style}`;

  return (
    <div className='output-area'>
      <figure className='badge'>
        <img src={htmlSrc} alt={badgeTitle} />
      </figure>

      <div className='src-title'>
        <p>HTML</p>
      </div>
      <pre className='src-space'>
        <button type='button' className='copy-button' onClick={copy}>copy</button>
        <code>&lt;img src=&quot;{htmlSrc}&quot; /&gt;</code>
      </pre>

      <div className='src-title'>
        <p>Markdown</p>
      </div>

      <pre className='src-space'>
        <button type='button' className='copy-button' onClick={copy}>copy</button>
        <code>![{badgeTitle}]({mdSrc})</code>
      </pre>
    </div>
  );
};

export default Outputs;
