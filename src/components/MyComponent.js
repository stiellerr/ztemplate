import React from "react";
//import ReactDOM from "react-dom";

import "./MyComponent.scss";

class MyComponent extends React.Component {
    render() {
        console.log("Hello React!");
        //return <h1>{this.props.title}</h1>
        return (
            <div className="x">
                {[1, 2, 3].map((item, i) => (
                    <div key={i}>{item}</div>
                ))}
            </div>
        );
        //return React.createElement('h1', null, `Title: ${this.props.title}`);
    }
}

//console.log(p);

export default MyComponent;

//ReactDOM.render(React.createElement(MyComponent, {title: 'Hello'}),document.getElementById('root'));
