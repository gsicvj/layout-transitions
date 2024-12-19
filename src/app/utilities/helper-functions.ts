export function getActiveClassName(pathname: string, href: string) {
  return pathname === href ? "p-2 bg-slate-100 rounded-lg text-black" : "p-2";
}
