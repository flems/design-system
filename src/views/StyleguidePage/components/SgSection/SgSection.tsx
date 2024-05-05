import styles from '../../index.module.scss'
import React from 'react'

interface ISgSection {
    children: React.ReactNode,
    title: string
}

export function SgSection ({ title, children }: ISgSection) {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            {children}
        </section>
    )
}