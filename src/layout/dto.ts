import { ReactNode } from "react";

export interface IMenuItem {
  key: string;
  link: string;
  icon?: ReactNode;
  name: string;
}
