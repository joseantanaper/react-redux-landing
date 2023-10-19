import { Icon, IconMap } from '@components/widgets/Icon'
import { Menu, MenuProps, MenuPosition } from '@components/menu/elements/Menu'
import { NavRouteLinkList } from './elements/NavRouteLinkList'
import { routeLinks, RouteLink } from '@config/nav.config'

interface Props extends MenuProps {
  routeLinks: RouteLink[]
}

export const MenuStart = ({ id, title, routeLinks }: Props) => {
  return (
    <Menu id={id} title={title} position={MenuPosition.Start}>
      <div className="m-5"></div>
      <NavRouteLinkList routeLinks={routeLinks} parentIndex={0} />
    </Menu>
  )
}
