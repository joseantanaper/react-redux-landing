import { ReactNode } from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'

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
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#${target}`}
            aria-expanded="false"
            aria-controls={`${target}`}
          >
            <Icon iconmap={iconmap} />
            <span>{label}</span>
          </button>
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
