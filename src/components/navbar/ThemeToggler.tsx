import { Icon } from '../widgets/Icon'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { Theme, setTheme, selectTheme } from '../../app/reducer/appSlice'
import { RootState } from '../../app/store'

export const enum TogglerType {
  Button = 0,
  ButtonSelector = 1,
  Selector = 2,
}

export const enum Label {
  No = 0,
  Yes = 1,
}

interface Props {
  currentTheme?: Theme
  togglerType?: TogglerType
  label?: Label
}

export const ThemeToggler = ({
  currentTheme,
  togglerType = TogglerType.Button,
  label = Label.No,
}: Props) => {
  const dispatch = useAppDispatch()
  const { theme } = useAppSelector((state: RootState) => state.app)
  document.documentElement.setAttribute('data-bs-theme', currentTheme as Theme)

  const handleClick = (theme?: Theme) => {
    const newTheme: Theme =
      theme !== undefined
        ? theme
        : document.documentElement.getAttribute('data-bs-theme') !== Theme.Dark
        ? Theme.Dark
        : Theme.Light
    console.log(newTheme)
    dispatch(setTheme(newTheme))
  }

  return (
    <>
      {togglerType === TogglerType.Button && (
        <button
          name="app-theme-toggler"
          className="btn"
          type="button"
          onClick={() => handleClick()}
        >
          <Icon
            id="bi-sun"
            extra="app-rotate"
            style={{ display: theme !== Theme.Dark ? 'none' : 'inline' }}
          />
          <Icon
            id="bi-moon"
            extra="app-rotate"
            style={{ display: theme !== Theme.Dark ? 'inline' : 'none' }}
          />
          {label === Label.Yes && (
            <span className="text-capitalize ms-1">{theme}</span>
          )}
        </button>
      )}

      {togglerType === TogglerType.ButtonSelector && (
        <div className="btn-group float-end">
          <button
            type="button"
            className={`btn ${
              currentTheme === Theme.Light ? 'disabled active' : ''
            }`}
            onClick={() => handleClick(Theme.Light)}
          >
            <Icon id="bi-sun" extra="app-rotate" />
            {label === Label.Yes && (
              <span className="text-capitalize ms-1">Light</span>
            )}
          </button>
          <button
            type="button"
            className={`btn ${
              currentTheme === Theme.Dark ? 'disabled active' : ''
            }`}
            onClick={() => handleClick(Theme.Dark)}
          >
            <Icon id="bi-moon" extra="app-rotate" />
            {label === Label.Yes && (
              <span className="text-capitalize ms-1">Dark</span>
            )}
          </button>
        </div>
      )}
    </>
  )
}
