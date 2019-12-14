import * as React from 'react';

interface ListProps {
  name: string;
}

const List: React.FunctionComponent<ListProps> = (props: ListProps) => {
  const { name } = props;
  return (
    <div>
React, Ts, webpack, and initial
      {name}
      {' '}
working.
      {' '}
    </div>
  );
};

export default List;
