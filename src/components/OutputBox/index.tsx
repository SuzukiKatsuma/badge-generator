import { useState } from "react";

import style from "./style.module.css";

interface Props {
  readonly targetLabel: string;
  readonly badgeString: string;
}

const OutputBox = ({ targetLabel, badgeString }: Props) => {
  const [buttonText, setButtonText] = useState<string>("copy");

  const onCopy = async () => {
    await navigator.clipboard.writeText(badgeString);

    setButtonText("success");

    setTimeout(() => {
      setButtonText("copy");
    }, 1000);
  };

  return (
    <div className={style.outputBox}>
      <p className={style.srcTitle}>{targetLabel}</p>

      <pre className={style.srcSpace}>
        <button
          type="button"
          className={
            buttonText === "success"
              ? `${style.copyButton} ${style.copySuccess}`
              : style.copyButton
          }
          onClick={onCopy}
        >
          {buttonText}
        </button>
        <code>{badgeString}</code>
      </pre>
    </div>
  );
};

export default OutputBox;
