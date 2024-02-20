import { StyledButton } from "./Button_Styles";

export type ButtonProps = {
  text: string,
  link?: string,
  $maxWidth?: boolean,
  className?: string,
  onClick?: () => void,
};

export function Button(props: ButtonProps) {
  const { text, link, $maxWidth, className, onClick } = props;
  return (
    <StyledButton
      $maxWidth={$maxWidth}
      {...(link ? { to: link } : { as: "button", onClick, type: "button" })}
      className={className}
    >
      {text}
    </StyledButton>
  );
}
