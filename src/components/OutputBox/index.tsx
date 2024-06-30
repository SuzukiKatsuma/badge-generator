import { useState } from 'react';

interface Props{
  readonly targetLabel: string;
  readonly badgeString: string;
}

const OutputBox = ({ targetLabel, badgeString }: Props) => {
  const [buttonText, setButtonText] = useState<string>('copy');

  const onCopy = async () => {
    await navigator.clipboard.writeText(badgeString);

    setButtonText('success');

    setTimeout(() => {
      setButtonText('copy');
    }, 1000);
  };

  return (
    <div>
      <div className='src-title'>
        <p>{targetLabel}</p>
      </div>

      <pre className='src-space'>
        <button type='button' className={buttonText === 'success' ? 'copy-button copy-success' : 'copy-button' } onClick={onCopy}>{buttonText}</button>
        <code>{badgeString}</code>
      </pre>
    </div>
  );
};

export default OutputBox;
