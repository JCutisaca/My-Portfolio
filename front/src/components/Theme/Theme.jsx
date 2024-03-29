import React, { useEffect, useState } from "react";
import styles from './Theme.module.css'
import { useTheme } from "next-themes";

export default function Theme() {
  const [checked, setChecked] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (theme === "system") {
      if (resolvedTheme === "light") {
        setChecked(true);
      } else {
        setChecked(false);
      }
    } else {
      if (theme === "light") {
        setChecked(true);
      } else {
        setChecked(false);
      }
    }
  }, [theme, resolvedTheme]);

  const handleChange = (event) => {
    const checked = event.target.checked;
    if (checked) {
      setChecked(true);
      setTheme("light");
    } else {
      setChecked(false);
      setTheme("dark");
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#ffc219] rounded-3xl relative overflow-hidden col-span-1 aspect-square shadow-sm">
      <label className={styles.switch}>
        <input type="checkbox"
          value={checked}
          checked={checked}
          onChange={handleChange}
        />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
}
