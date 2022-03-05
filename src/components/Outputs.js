import React from "react";

import { Row } from "react-bootstrap";

const Outputs = ({ status, color, style }) => {
  let htmlSrc = 'https://img.shields.io/badge/';
  let mdSrc = 'https://img.shields.io/badge/';
  let logo = status.toString().toLowerCase();
  let name = status.replace(/ /g, "&nbsp;");

  logo = logo.replace(/ /g, "-");
  logo = logo.replace('++', "%2b%2b");

  htmlSrc += `${status}-${color}.svg?logo=${logo}&style=${style}`;
  mdSrc += `${name}-${color}.svg?logo=${logo}&style=${style}`;

  return (
    <Row className="output-area">
      <figure className="badge">
        <img src={htmlSrc} alt={status} />
      </figure>

      <div className="src-title">
        <p>HTML</p>
      </div>
      <pre className="src-space">
        <code>&lt;img src="{htmlSrc}" /&gt;</code>
      </pre>
      <div className="src-title">
        <p>Markdown</p>
      </div>
      <pre className="src-space">
        <code>![{status}]({mdSrc})</code>
      </pre>
    </Row>
  );
}

export default Outputs;