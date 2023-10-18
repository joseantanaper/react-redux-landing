import { Icon, IconMap } from '@components/widgets/Icon'
import { Menu, MenuProps, MenuPosition } from '@components/menu/elements/Menu'
import {
  ListItemNav,
  MenuNavHeaderLink,
} from '@components/menu/elements/ListItemNav'
import { navlinks, routeLinks, RouteLink } from '@config/nav.config'

export const MenuStart = ({ id, title }: MenuProps) => {
  return (
    <Menu id={id} title={title} position={MenuPosition.Start}>
      {navlinks.map((navlink, index) => {
        return <ListItemNav key={index} navlink={navlink} parentIndex={index} />
      })}
    </Menu>
  )
}
