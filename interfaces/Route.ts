export interface Route {
    name: string;
    to: string;
    permissions?: string;
    props?: any;
    children?: React.ReactNode;
    requireAuth?: boolean;
}