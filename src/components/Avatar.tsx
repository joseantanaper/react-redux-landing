import profile from '@assets/profile.jpg'

interface Props {
  size?: AvatarSize
  className?: string
}

export const enum AvatarSize {
  sm,
  md,
  lg,
}

const sizes: Map<AvatarSize, number> = new Map()
sizes.set(AvatarSize.sm, 36)
sizes.set(AvatarSize.md, 100)
sizes.set(AvatarSize.lg, 180)

export const Avatar = ({ size = AvatarSize.sm, className }: Props) => {
  return (
    <img
      src={profile}
      alt="Avatar"
      width={sizes.get(size)}
      height={sizes.get(size)}
      className={`rounded-circle mx-auto app-profile ${className}`}
    />
  )
}
