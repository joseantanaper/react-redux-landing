import React from 'react'
import { Icon, IconMap } from './Icon'
import { ButtonToggler } from './Button'

interface Props {
  id: string
  title: string
  content: string
  confirm: Function
}

export const Modal = ({ id, title, content, confirm }: Props) => {
  return (
    <>
      <div
        id={id}
        className="modal fade"
        tabIndex={-1}
        aria-labelledby={`${id}-label`}
        aria-hidden="true"
        data-bs-backdrop="true"
      >
        <button
          type="button"
          className="invisible"
          data-bs-toggle="modal"
          data-bs-target={`#${id}`}
        />
        <div className="modal-dialog shadow">
          <div className="modal-content">
            <div className="modal-header bg-danger text-light">
              <h1 className="modal-title fs-5" id={`${id}-label`}>
                {title}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">{content}</div>
            <div className="modal-footer">
              <button
                id="modalCloser"
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                No
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => confirm()}
              >
                <Icon iconmap={IconMap.TaskClear} />
                <span>Clear All</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
