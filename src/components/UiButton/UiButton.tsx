'use client'

import UiIcon from '@/components/UiIcon/UiIcon'
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
    loading,
    ...props
}: TUiButton) {
    const { computedClass } = useUiButton({size, theme, iconPosition, children, icon, loading, ...props})
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
                <UiIcon className={`${BASE_CLASS_NAME}__icon`} name={icon}></UiIcon>
            )}
        </ComponentName>
    )
}