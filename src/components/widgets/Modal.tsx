import React from 'react'
import { Icon, IconMap } from '@components/widgets/Icon'
import { Button, ButtonToggler } from '@components/widgets/Button'

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
              />
            </div>
            <div className="modal-body">{content}</div>
            <div className="modal-footer">
              <ButtonToggler
                className="btn btn-outline-secondary"
                iconmap={IconMap.Cancel}
                targetId={id}
                toggle="modal"
                label="No"
              />

              <Button
                className="btn btn-danger"
                iconmap={IconMap.TaskClear}
                onClick={() => confirm()}
                label="Confirm"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
