interface IRouteElement {
  appTitle?: string;
  path: string;
  exact?: boolean;
  restricted?: boolean;
  element: React.FC;
}

export default IRouteElement;
