import React from 'react';

function HeaderTag(props) {
	const { tag, ...others } = props;

	return tag === 'h2' ? <h2 {...others}>{props.children}</h2> : tag === 'h1' ? <h1 {...others}>{props.children}</h1> : tag === 'h3' ? <h3 {...others}>{props.children}</h3> : tag === 'h4' ? <h4 {...others}>{props.children}</h4> : tag === 'h5' ? <h5 {...others}>{props.children}</h5> : tag === 'h6' ? <h6 {...others}>{props.children}</h6> : <p {...others}>{props.children}</p>;
}

export default HeaderTag;