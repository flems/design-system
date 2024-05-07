import React from 'react'
import { UiAccordionItem } from './UiAccordionItem'

interface IUiAccordion {
    allowMultipleExpanded?: boolean,
    className?: string,
    onChange?: (ids: string[]) => void,
    children: React.ReactElement<typeof UiAccordionItem>[]
}

export function UiAccordion ({
    children,
    allowMultipleExpanded
}: IUiAccordion) {
    return (
        <div className="ui-accordion">
            {children}
        </div>
    )
}