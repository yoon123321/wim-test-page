export interface NavChild {
  href: string;
  label: string;
}

export interface NavLink {
  href?: string;
  label: string;
  children?: readonly NavChild[];
}
