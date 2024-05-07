import {
    UiAccordion,
    UiAccordionItem,
    UiAccordionItemHeader,
    UiAccordionItemPanel
} from '@/components/UiAccordion/'

export function UiAccordionExamples () {
    return (
        <div>
            <UiAccordion>
                <UiAccordionItem>
                    <UiAccordionItemHeader>
                        acc header 1
                    </UiAccordionItemHeader>
                    <UiAccordionItemPanel>
                        acc panel 1
                    </UiAccordionItemPanel>
                </UiAccordionItem>
                <UiAccordionItem>
                    <UiAccordionItemHeader>
                        acc header 2
                    </UiAccordionItemHeader>
                    <UiAccordionItemPanel>
                        acc panel 2
                    </UiAccordionItemPanel>
                </UiAccordionItem>
                <UiAccordionItem>
                <UiAccordionItemHeader>
                        acc header 3
                    </UiAccordionItemHeader>
                    <UiAccordionItemPanel>
                        acc panel 3
                    </UiAccordionItemPanel>
                </UiAccordionItem>
            </UiAccordion>
        </div>
        
    )
}