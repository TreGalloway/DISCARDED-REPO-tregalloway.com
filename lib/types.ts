export type cmdtype = {
    id: string
    href?: string
    description: string
    icon?: any
}

export type ThumbnailProps = {
    imageSrc: string
    caption:
        | {
              discriminant: false
          }
        | {
              discriminant: true
              value: React.ReactNode
          }
}
