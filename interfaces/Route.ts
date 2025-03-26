export interface Route {
    name: string;
    to: string;
    permissions?: string;
    props?: any;
    children?: Route[];
    requireAuth?: boolean;
}