import s from "./Loader.module.scss"

type Props = {
  className?: string
}

export const Loader = ({ className }: Props) => {
  return <div className={`${s.loader} ${className} text-primary`} />
}
