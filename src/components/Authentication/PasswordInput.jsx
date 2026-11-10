import { useState } from "react";
import { HiEye, HiEyeSlash } from "react-icons/hi2";
import Button from "../main/Button";

function PasswordInput({
  register,
  name,
  id,
  inputClassName = "",
  errors,
  errorNames = [],
  rules,
  ...props
}) {
  const [visible, setVisible] = useState(false);

  const error = errorNames.map((name) => errors?.[name]?.message).find(Boolean);

  return (
    <div>
      <div className="relative w-fit">
        <input
          className={inputClassName}
          id={id}
          type={visible ? "text" : "password"}
          {...register(name, rules)}
          {...props}
        />

        <Button
          type="button"
          onClick={() => setVisible((vis) => !vis)}
          htmlType="password"
          aria={visible ? "مخفی کردن رمز عبور" : "نمایش رمز عبور"}
        >
          {visible ? <HiEyeSlash /> : <HiEye />}
        </Button>
      </div>
      <p className="pt-1.5 pr-3 text-xs text-(--back-color)">{error}</p>
    </div>
  );
}

export default PasswordInput;
