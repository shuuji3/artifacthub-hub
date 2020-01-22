import React from 'react';

interface Props {
  text: string;
}

const InfoTitle = (props: Props) => (
  <div className="mt-2 mb-1"><small className="card-title text-muted text-uppercase">{props.text}</small></div>
);

export default InfoTitle;
