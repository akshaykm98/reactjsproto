import React, { CSSProperties } from "react";
import styles from "./Container.module.scss";

type Props = {
  className?: string;
  style?: CSSProperties | undefined;
};

const Container: React.FC<Props> = (props) => {
  return (
    <div
      className={`${styles.container} ${props.className}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Container;
