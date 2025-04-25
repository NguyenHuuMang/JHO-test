export type User = {
    id: number;
    email: string;
    name: string;
    password: string;
    role: string;
    token?: string | any
}

export type TableConfig = {
    key: string;
    label: string;
    classNameTableHead?: string;
    classNameTableBody?: string;
}

export type ContactListingType = {
    id: number;
    name: string;
    type: string;
    email: string;
    phone: string;
    opportunity: string;
    responsible: string;
    tags: string[];
    selected: boolean;
    assignToMe?: boolean;
}