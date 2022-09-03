//this is a function component Not class
// use functional component if you want to just render component
import React from "react";

export default function(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <h4>{props.url}</h4>
        </div>
    );
}