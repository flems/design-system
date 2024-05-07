import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

export type TIconName  = keyof typeof dynamicIconImports;

export interface IUiIcon extends LucideProps {
  name: TIconName
}

const Icon = ({ name, ...props }: IUiIcon) => {
  const LucideIcon = dynamic(dynamicIconImports[name])

  return <LucideIcon {...props} />
};

export default Icon