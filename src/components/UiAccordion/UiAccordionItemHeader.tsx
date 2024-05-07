import React from 'react'

interface IUiAccordionItemHeader {
    onClick?: () => void,
    children: React.ReactNode
}

export function UiAccordionItemHeader ({
    children,
    onClick
}:IUiAccordionItemHeader) {
    return (
        <div className="ui-accordion-item-header" onClick={onClick}>
            {children}
        </div>
    )
}