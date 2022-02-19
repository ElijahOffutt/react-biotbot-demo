import React from "react";
import Link from 'next/link';
import style from './index.module.scss';
import content from '@public/content.json';

export default function NavLink(props: any) {
    return (
        <>
            { props.meta.hasSubLinks ? 
                (
                    <Link href={props.meta.path}>
                        <a style={{fontFamily: content.font}} className={`${style.navLink} ${props.current && style.current}`}>
                            <b>{props.meta.text} &#129079;</b>
                            <ul>
                                {props.meta.subLinks.map( (link: any) => (
                                    <li>{link.text}</li>
                                ))}
                            </ul>
                        </a>
                    </Link>
                )
                :
                (
                    <Link href={props.meta.path}>
                        <a style={{fontFamily: content.font}} className={`${style.navLink} ${props.current && style.current}`}>
                            <b>{props.meta.text}</b>
                        </a>
                    </Link>
                )
            }
        </>
    )
}