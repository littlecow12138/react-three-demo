import { ReactNode } from "react";

export interface IMenuItem {
  children?: IMenuItem[];
  key: string;
  link: string;
  icon?: ReactNode;
  name: string;
}
