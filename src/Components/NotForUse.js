import React from 'react';

export function AboutProps(props) {

    let { name } = props;
    let {brackets} =props;

    return (
        < >
            <div>It is {name} component in react.  </div>
            <div>I import  this component in App.js with {brackets} brackets.  </div>

        </>
    )
    
}

function NotForUse() {
    return;

}
export default NotForUse;