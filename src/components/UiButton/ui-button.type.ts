import React from 'react'

export type TUiButton = React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: React.ReactNode,
    theme?: 'primary' | 'secondary' | 'bordered'
    loading?: boolean
    href?: string
    size?: 'l' | 'm' | 's'
    onlyIcon?: boolean
    icon?: string
    iconPosition?: 'left' | 'right'
}
