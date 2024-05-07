import React from 'react'
import { UiAccordionItemHeader } from './UiAccordionItemHeader'
import { UiAccordionItemPanel } from './UiAccordionItemPanel'

interface IUiAccordionItem {
    children: [
        React.ReactElement<typeof UiAccordionItemHeader>,
        React.ReactElement<typeof UiAccordionItemPanel>
    ]
}

export function UiAccordionItem ({
    children
}:IUiAccordionItem) {
    const [isOpen, setIsOpen] = React.useState(false)

    const toggleAcc = () => {
        console.log('toggle acc', isOpen);
        
        setIsOpen(!isOpen)
    }

    const accHeader = React.Children.map(children, child => {
        if (!React.isValidElement(child)) return null
        const typedChild = child as React.ReactElement;
        if (typedChild.type !== UiAccordionItemHeader) return null
        return React.cloneElement(typedChild, { onClick: toggleAcc });
    })

    const accPanel = React.Children.map(children, child => {
        if (!React.isValidElement(child)) return null
        if (child.type !== UiAccordionItemPanel) return null
        if (isOpen) return child
    })
    

    return (
        <div className="ui-accordion-item">
            {/* {children} */}

            <span>isOpen:{isOpen.toString()}</span>
            {accHeader}
            {accPanel}
        </div>
    )
}