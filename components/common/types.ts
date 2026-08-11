export interface NavChild {
  href: string;
  label: string;
}

export interface NavLink {
  href?: string;
  label: string;
  children?: readonly NavChild[];
}

/** 목업용 기본 메뉴. 실제 메뉴가 정해지면 props로 넘겨서 덮어쓴다. */
export const DEFAULT_NAV: NavLink[] = [...NAVIGATION_CONTENT];
import { NAVIGATION_CONTENT } from "@/content/navigation";
