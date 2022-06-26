// Modules
import React from 'react'
import style from './Flex.module.scss'

enum FlexDirection {
	Row,
	Column
}

enum FlexWidth {
	Full = -2,
	MaxContent
}

interface FlexProps {
	width?: FlexWidth | number;
	direction?: FlexDirection;
	children?: any;
	onClick?: any;

	spacebetween?: string;
	verticalcenter?: string;
	gap?: number;

	className?: string[] | string;
}

const DefaultProps: FlexProps = {
	width: FlexWidth.MaxContent,
	direction: FlexDirection.Row,
	className: []
};

export default function Flex(props: FlexProps) {
	props = {...DefaultProps, ...props};

	if (!Array.isArray(props.className)) props.className = [props.className];

	return (
		<div {...props} className={[style.flex, ...props.className].join(" ")} >
			{props.children}
		</div>
	)
}
