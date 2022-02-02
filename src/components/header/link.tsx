import React from "react";

import styles from './index.module.scss'

export default function Link(props: any) {
    return (
        <>
            { props.meta.hasLinks ? 
                (
                    <div className={`${styles.Link}`} style={{
                        cursor: 'pointer',
                        float: 'left', 
                        marginRight: '40px',
                        color: 'white',
                        textTransform: 'uppercase',
                        lineHeight: '40px',
                        position: 'relative',
                        fontSize: '.9em'}}>
                        <b>{props.meta.text} &#8964;</b>
                        <ul>
                            {props.meta.links.map( (link: any) => (
                                <li>{link.text}</li>
                            ))}
                        </ul>
                    </div>
                )
                :
                (
                    <div className={`${styles.Link}`} style={{
                        cursor: 'pointer',
                        float: 'left', 
                        marginRight: '40px',
                        color: 'white',
                        textTransform: 'uppercase',
                        lineHeight: '40px',
                        fontSize: '.9em'}}>
                        <b>{props.meta.text}</b>
                    </div>
                )
            }
        </>
    )
}