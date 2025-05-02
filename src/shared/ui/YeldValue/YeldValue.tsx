type Props = {
  value?: number
}

export const YeldValue = ({ value }: Props) => {
  if (value === undefined) {
    return null
  }
  return <span className={value >= 0 ? "text-green" : "text-red"}>{value}</span>
}
