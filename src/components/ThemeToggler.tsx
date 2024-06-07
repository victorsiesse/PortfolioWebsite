import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "./ui/switch";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [checked, setChecked] = useState(theme === "light");

  useEffect(() => {
    setChecked(theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    setChecked(newTheme === "dark");
  };

  return (
    <div className="inline-flex gap-3 items-center justify-center p-2">
      <SunIcon className="h-[1.2rem] w-[1.2rem]" />
      <Switch checked={checked} onCheckedChange={toggleTheme} />
      <MoonIcon className="h-[1.2rem] w-[1.2rem]" />
    </div>
  );
};
