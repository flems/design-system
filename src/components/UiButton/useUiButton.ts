import { useState, useEffect } from 'react'
import { TUiButton } from './ui-button.type'
import { BASE_CLASS_NAME } from './UiButton'

export type TUseUiButton = Pick<TUiButton, 'theme' | 'loading' | 'size' | 'iconPosition' | 'icon' | 'children'>

export function useUiButton ({ theme, loading, size, icon, iconPosition, children }: TUseUiButton) {
    const [computedClass, setComputedClass] = useState('')

    useEffect(() => {
        const classNames = [
            `${BASE_CLASS_NAME}--theme-${theme}`,
            `${BASE_CLASS_NAME}--size-${size}`,
            loading ? 'is-loading' : '',
            icon && children ? `${BASE_CLASS_NAME}--icon-${iconPosition}` : ``,
            icon && !children ? `${BASE_CLASS_NAME}--only-icon` : ``,
        ].filter(Boolean).join(' ')

        setComputedClass(classNames)

    }, [theme, loading, size, icon, iconPosition, children])

    return {
        computedClass
    }
}