import { UiButton } from '@/components/UiButton/UiButton'
import { SgSection } from '../components/SgSection/SgSection'

interface IExmaple {
    loading: boolean,
    icon: string,
    iconPosition?: 'left' | 'right',
    text?: string
}

export function UiButtonExamples () {
    const mapExpamples:IExmaple[] = [
            {
                loading: false,
                icon: '',
                iconPosition: undefined,
                text: 'Name button',
            },
            {
                loading: true,
                icon: '',
                iconPosition: undefined,
                text: 'Name button',
            },
            {
                loading: false,
                icon: 'iconName',
                iconPosition: 'right',
                text: 'Name button',
            },
            {
                loading: false,
                icon: 'iconName',
                iconPosition: 'left',
                text: 'Name button',
            },
            {
                loading: false,
                icon: 'iconName',
                iconPosition: 'left',
                text: undefined,
            },
            {
                loading: true,
                icon: 'iconName',
                iconPosition: 'left',
                text: undefined,
            }
    ]
    return (
        <SgSection title='UiButton'>
            <div className='d-flex gap-32 flex-dir-column'>
                <div className='d-flex gap-24 flex-dir-column'>
                    <h3 style={{marginBottom: 0, marginTop: '32px'}}>Primary</h3>
                    <div className='d-flex gap-16 align-items-start flex-wrap'>
                        {mapExpamples.map((itemA, indexA) => (
                            <UiButton
                                key={indexA}
                                loading={itemA.loading}
                                theme='primary'
                                icon={itemA.icon}
                                size='l'
                                iconPosition={itemA.iconPosition}
                            >
                                {itemA.text}
                            </UiButton>
                        ))}
                    </div>
                    <div className='d-flex gap-16 align-items-start flex-wrap'>
                        {mapExpamples.map((itemA, indexA) => (
                            <UiButton
                                key={indexA}
                                loading={itemA.loading}
                                theme='primary'
                                icon={itemA.icon}
                                size='m'
                                iconPosition={itemA.iconPosition}
                            >
                                {itemA.text}
                            </UiButton>
                        ))}
                    </div>
                    <div className='d-flex gap-16 align-items-start flex-wrap'>
                        {mapExpamples.map((itemA, indexA) => (
                            <UiButton
                                key={indexA}
                                loading={itemA.loading}
                                theme='primary'
                                icon={itemA.icon}
                                size='s'
                                iconPosition={itemA.iconPosition}
                            >
                                {itemA.text}
                            </UiButton>
                        ))}
                    </div>
                </div>
                <div className='d-flex gap-32 flex-dir-column'>
                    <h3 style={{marginBottom: 0, marginTop: '32px'}}>Secondary</h3>
                    <div className='d-flex gap-16 align-items-start flex-wrap'>
                        {mapExpamples.map((itemA, indexA) => (
                            <UiButton
                                key={indexA}
                                loading={itemA.loading}
                                theme='secondary'
                                icon={itemA.icon}
                                size='l'
                                iconPosition={itemA.iconPosition}
                            >
                                {itemA.text}
                            </UiButton>
                        ))}
                    </div>
                    <div className='d-flex gap-16 align-items-start flex-wrap'>
                        {mapExpamples.map((itemA, indexA) => (
                            <UiButton
                                key={indexA}
                                loading={itemA.loading}
                                theme='secondary'
                                icon={itemA.icon}
                                size='m'
                                iconPosition={itemA.iconPosition}
                            >
                                {itemA.text}
                            </UiButton>
                        ))}
                    </div>
                    <div className='d-flex gap-16 align-items-start flex-wrap'>
                        {mapExpamples.map((itemA, indexA) => (
                            <UiButton
                                key={indexA}
                                loading={itemA.loading}
                                theme='secondary'
                                icon={itemA.icon}
                                size='s'
                                iconPosition={itemA.iconPosition}
                            >
                                {itemA.text}
                            </UiButton>
                        ))}
                    </div>
                    
                </div>
                <div className='d-flex gap-32 flex-dir-column'>
                    <h3 style={{marginBottom: 0, marginTop: '32px'}}>Bordered</h3>
                    <div className='d-flex gap-16 align-items-start flex-wrap'>
                        {mapExpamples.map((itemA, indexA) => (
                            <UiButton
                                key={indexA}
                                loading={itemA.loading}
                                theme='bordered'
                                icon={itemA.icon}
                                size='l'
                                iconPosition={itemA.iconPosition}
                            >
                                {itemA.text}
                            </UiButton>
                        ))}
                    </div>
                    <div className='d-flex gap-16 align-items-start flex-wrap'>
                        {mapExpamples.map((itemA, indexA) => (
                            <UiButton
                                key={indexA}
                                loading={itemA.loading}
                                theme='bordered'
                                icon={itemA.icon}
                                size='m'
                                iconPosition={itemA.iconPosition}
                            >
                                {itemA.text}
                            </UiButton>
                        ))}
                    </div>
                    <div className='d-flex gap-16 align-items-start flex-wrap'>
                        {mapExpamples.map((itemA, indexA) => (
                            <UiButton
                                key={indexA}
                                loading={itemA.loading}
                                theme='bordered'
                                icon={itemA.icon}
                                size='s'
                                iconPosition={itemA.iconPosition}
                            >
                                {itemA.text}
                            </UiButton>
                        ))}
                    </div>
                    
                </div>
            </div>
            
        </SgSection>
    )
}