type TitleProps = {
  text: string
  level: 1 | 2 | 3 | 4 | 5 | 6
}

export function Title (props: TitleProps) {
  const CustomTitleTag = `h${props.level}` as keyof JSX.IntrinsicElements;
  return <CustomTitleTag className="title">{props.text}</CustomTitleTag>
}