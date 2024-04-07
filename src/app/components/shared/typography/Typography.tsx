import styled from "styled-components";

interface TextProps {
  children: string | number;
  className?: string;
}

interface TypographyProps extends TextProps {
  weight: Weight;
  size: Size;
}

enum Weight {
  semibold = "600",
  regular = "400",
  light = "300",
}

enum Size {
  l = "18px",
  m = "16px",
}

const Text = styled.span<TypographyProps>`
  font-weight: ${({ weight }) => weight};
  font-size: ${({ size }) => size};
`;

export const TypographyComponent = (props: TypographyProps) => {
  return (
    <Text weight={props.weight} size={props.size} className={props.className}>
      {props.children}
    </Text>
  );
};

export const TextLSemibold = (props: TextProps) => (
  <TypographyComponent
    weight={Weight.semibold}
    size={Size.l}
    className={props.className}
  >
    {props.children}
  </TypographyComponent>
);

export const TextMSemibold = (props: TextProps) => (
  <TypographyComponent
    weight={Weight.semibold}
    size={Size.m}
    className={props.className}
  >
    {props.children}
  </TypographyComponent>
);

export const TextLRegular = (props: TextProps) => (
  <TypographyComponent
    weight={Weight.regular}
    size={Size.l}
    className={props.className}
  >
    {props.children}
  </TypographyComponent>
);
export const TextMRegular = (props: TextProps) => (
  <TypographyComponent
    weight={Weight.regular}
    size={Size.m}
    className={props.className}
  >
    {props.children}
  </TypographyComponent>
);

export const TextLLight = (props: TextProps) => (
  <TypographyComponent
    weight={Weight.light}
    size={Size.l}
    className={props.className}
  >
    {props.children}
  </TypographyComponent>
);

export const TextMLight = (props: TextProps) => (
  <TypographyComponent
    weight={Weight.light}
    size={Size.m}
    className={props.className}
  >
    {props.children}
  </TypographyComponent>
);
