import * as React from "react";
import { useTranslation } from "react-i18next";
import "./i18n";

interface Props {
  text?: string;
  onClick?: ((event: React.MouseEvent<HTMLElement>) => void) | undefined;
  isEmpty?: boolean;
}
const Button: React.FC<Props> = ({ text, onClick, isEmpty }: Props) => {
  const { t } = useTranslation("components");
  return (
    <>
      <button onClick={onClick}>{text || t("Button.defaultText")}</button>
      {!isEmpty && <span>it is a text</span>}
    </>
  );
};

export default Button;
