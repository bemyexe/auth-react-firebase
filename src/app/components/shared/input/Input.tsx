import React, { ChangeEvent, useMemo, useState } from "react";
import classnames from "classnames";
import { v4 as uuidv4 } from "uuid";

import "./Input.module.scss";
import { TextMRegular } from "../typography/Typography";
import { Icons } from "../icon/enum/icon-enum";
import { Icon } from "../icon/Icon";

type InputProps = {
  title: string;
  value: string;
  type?: "password";
  disabled?: boolean;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  title,
  type,
  disabled,
  placeholder,
  value,
  onChange,
}) => {
  const [passwordHide, setPasswordHide] = useState<boolean>(true);
  const uniqueId = useMemo(() => `input_${uuidv4()}`, []);

  const getType = (): string | undefined =>
    type === "password" && !passwordHide ? undefined : type;

  return (
    <div className="input-component">
      <label htmlFor={uniqueId} className="input-title">
        <TextMRegular>{title}</TextMRegular>
      </label>
      <div className={classnames("input-field", { disabled })}>
        <input
          id={uniqueId}
          disabled={disabled}
          className="input-text"
          type={getType()}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          <Icon
            className="input-icon"
            onClick={() => setPasswordHide((prevState) => !prevState)}
            name={passwordHide ? Icons.eyeOff : Icons.eye}
          />
        )}
      </div>
    </div>
  );
};

export default Input;
