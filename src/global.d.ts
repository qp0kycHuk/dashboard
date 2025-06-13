declare type UId = string;
declare type PropsWithClassName<T = unknown> = T & {
  className?: string
}