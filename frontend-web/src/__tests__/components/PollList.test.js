import React from 'react';
import ReactDOM from 'react-dom';
import { PollList } from '../../components/pollList/PollList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PollList link="/test" polls={[
      {id: 0, name: 'anketa 1'},
      {id: 1, name: 'anketa 2'},
      {id: 2, name: 'anketa 3'}
  ]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
