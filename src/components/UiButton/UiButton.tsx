'use client'

import './index.scss'
import { TUiButton } from './ui-button.type'
import { useUiButton } from './useUiButton'

export const BASE_CLASS_NAME = 'ui-button'

export function UiButton({
    children,
    size='l',
    theme='primary',
    iconPosition='right',
    icon,
    ...props
}: TUiButton) {
    const { computedClass } = useUiButton({size, theme, iconPosition, children, icon, ...props})
    const ComponentName = props.href ? 'a' : 'button'

    return (
        <ComponentName
            className={`${BASE_CLASS_NAME} ${computedClass}`}
            {...props} href={props.href}
        >
            {children && (
                <span className={`${BASE_CLASS_NAME}__text`}>{children}</span>
            )}
            {icon && (
                <span className={`${BASE_CLASS_NAME}__icon ${icon}`}></span>
            )}
        </ComponentName>
    )
}