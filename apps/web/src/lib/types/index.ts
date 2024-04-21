export interface INavLink {
  title: string;
  link?: string;
  icon?: React.JSX.Element;
  children?: INavLink[];
}
