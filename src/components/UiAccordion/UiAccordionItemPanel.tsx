import React from 'react'

interface IUiAccordionItemPanel {
    children: React.ReactNode
}

export function UiAccordionItemPanel ({
    children
}:IUiAccordionItemPanel) {
    return (
        <div className="ui-accordion-item-panel">
            {children}
        </div>
    )
}