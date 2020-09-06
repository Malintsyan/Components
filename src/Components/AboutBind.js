import React from 'react';

function AboutBind() {

    const Obj1 = {

        termin: 'Call',

        funcForUnderstandingBind: function () {

            return (
                this.termin
            )
        }
    }

    const Obj2 = {
        termin: 'bind'

    }
    const funcBind = Obj1.funcForUnderstandingBind;
    const componentBind = funcBind.bind(Obj2);
    const bind1 = componentBind()

    return (
        <div> I finally understand  {bind1} !</div>

    )

}
export default AboutBind;