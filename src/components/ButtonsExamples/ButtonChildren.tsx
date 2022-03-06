import React from 'react'

type ButtonChildrenProps = {
    children?: string;
}

export function ButtonChildren(props: ButtonChildrenProps) {
    return (
        <button>
            {props.children}
        </button>
    )
}
