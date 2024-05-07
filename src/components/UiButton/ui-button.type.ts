import React from 'react'
import { TIconName } from '@/components/UiIcon/UiIcon'

export type TUiButton = React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode,
    theme?: 'primary' | 'secondary' | 'bordered'
    loading?: boolean
    href?: string
    size?: 'l' | 'm' | 's'
    onlyIcon?: boolean
    icon?: TIconName
    iconPosition?: 'left' | 'right'
}
