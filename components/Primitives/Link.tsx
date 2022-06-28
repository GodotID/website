// Modules
import React from 'react'

// Components
import NextLink from 'next/link'

// Styles
import style from './Link.module.scss'

export default function Link(props: any) {
	return (
		<NextLink href={props.href}>
			<a className={style.a}>
				{props.children}
			</a>
		</NextLink>
	);
}
