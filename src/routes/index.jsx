import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from '../components/Main';

export default function Routes() {
    return (
        <Switch>
            <Route path="*" component={Main} />
        </Switch>
    );
}
