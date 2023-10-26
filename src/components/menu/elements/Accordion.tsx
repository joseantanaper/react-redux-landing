import { ReactNode } from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
import { ButtonToggler } from '@/components/widgets/Button'
interface Props {
  id: string
  label: string
  index: number
  iconmap?: IconMap
  children: ReactNode
}

export const Accordion = ({ id, label, index, iconmap, children }: Props) => {
  const accordionId = `accordion-${id}${index}`
  const target = `accordionCollapse-${id}${index}`
  return (
    <div className="accordion" id={`${accordionId}`}>
      {/* Accordion START */}
      <div className="accordion-item border-0">
        <h2 className="accordion-header">
          <ButtonToggler
            className="accordion-button collapsed"
            iconmap={iconmap}
            label={label}
            targetId={target}
            toggle="collapse"
          />
        </h2>
        <div
          id={`${target}`}
          className="accordion-collapse collapse accordion-flush"
          data-bs-parent={`#${accordionId}`}
        >
          <div className="accordion-body">{children}</div>
        </div>
      </div>
      {/* Accordion END */}
    </div>
  )
}
