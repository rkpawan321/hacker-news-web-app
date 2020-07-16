import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

import theme from './theme';
import { history } from '../common/history';
import StoryLayout from '../layouts/story';

function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route path='/' component={StoryLayout} />
          </Switch>
        </Router>
      </ThemeProvider>
    </MuiPickersUtilsProvider >
  );
}

export default App;


