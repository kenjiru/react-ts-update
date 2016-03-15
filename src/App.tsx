import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from "classnames";

class App extends React.Component<any, any> {
    render() {
        let classNamesResult = classNames(["allowSyntheticDefaultImports", "is", "here"]);
        console.log(classNamesResult);

        return (
            <div>
                <h1>App title</h1>
                <div>App content</div>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.body);

