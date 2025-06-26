import { useState } from "react";

import style from "./style.module.css";

interface Props {
  readonly targetLabel: string;
  readonly badgeString: string;
}

const COPY_SUCCESS_DURATION = 1000;

const OutputBox = ({ targetLabel, badgeString }: Props) => {
  const [buttonText, setButtonText] = useState<string>("copy");

  const onCopy = async () => {
    await navigator.clipboard.writeText(badgeString);

    setButtonText("success");

    setTimeout(() => {
      setButtonText("copy");
    }, COPY_SUCCESS_DURATION);
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
