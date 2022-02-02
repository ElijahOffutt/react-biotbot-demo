import React from "react";

export default function Link(props: any) {
    return (
        <>
            {props.link.hasSubLinks ? 
                (
                    <div className="Link">
                        {props.link.text}
                        <ul className="LinkSubMenu">
                            {props.link.links.map( (link:any) => (
                                <li>{link.text}</li>
                            ))}
                        </ul>
                    </div>
                ) 
                :
                (
                    <div className="Link">
                        {props.link.text}
                    </div>
                )
            }
        </>
    )
}