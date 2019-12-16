import React from 'react';
import './button.css';

interface Props {
  id: string;
  label: string;
  onclick: Function;
}
const Button: React.FC<Props> = ({
  id, label, onclick,
}: Props) => (
  <button id={id} className="button" type="button" tabIndex={0} onClick={() => onclick()}>
    {label}
  </button>
);

export default Button;
