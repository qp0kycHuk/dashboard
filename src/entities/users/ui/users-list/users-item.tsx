import { User } from "../../types"

type Props = {
  item: User
}

export function UsersItem({ item }: Props) {

  return (
    <div className="flex gap-3 items-center">
      <img
        className="size-10 object-cover rounded-full"
        src={item.profile.avatar.thumbnail}
        alt={item.profile.name + " avatar"}
      />
      {item.profile.name}
      {item.email}
      {item.state}
      {item.profile.company}
    </div>
  )
}