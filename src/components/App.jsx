import React from 'react';
import Form from 'components/Form/Form';
// import { nanoid } from 'nanoid';
// import { render } from '@testing-library/react';

class App extends React.Component {
  state = {
    contacts: [],
  };

  formSubmitHandler = data => {
    console.log(data);
  };
  render() {
    return <Form onSubmit={this.formSubmitHandler} />;
  }
}

export default App;
