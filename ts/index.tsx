import 'basscss/css/basscss.css';
import 'less/all.less';
import { AppBar, Toolbar } from 'material-ui';
import { MuiThemeProvider } from 'material-ui/styles';
import * as React from 'react';
import { render } from 'react-dom';
import * as injectTapEventPlugin from 'react-tap-event-plugin';

import { Docs } from './docs';

injectTapEventPlugin();

render(
    <MuiThemeProvider>
        <div>
            <AppBar
                style={{backgroundColor: 'white', position: 'fixed'}}
                iconElementLeft={(
                    <a href="http://trustlines.network">
                        <img src="./logo.png" style={{height: '50px'}} />
                    </a>
                )}
            />
            <div style={{paddingTop: '60px'}}>
                <Docs />
            </div>
        </div>
    </MuiThemeProvider>,
    document.getElementById('app'),
);
