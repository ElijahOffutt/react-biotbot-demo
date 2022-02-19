import React from "react";

export default function BigYellowButton(props: any) {
    
    let tag = (param: string) => {
        switch(param){
            case 'a':
                return <a href="">a</a>;
            case 'button':
                return <button>button</button>;
            default:
                return <div>custom</div>;
        }
    }
    
    return (
        <>
            {tag(props.tag)}
        </>
    )
}