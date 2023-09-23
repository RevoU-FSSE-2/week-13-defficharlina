export interface GetCategoryResponse {
    categorys: Category[];
    current_page: number;
    total_item: number;
    total_page: number;
}

export interface Category {
    //id: number;
    //title: string;
    //status: boolean;
    id: string;
    name: string;
    is_active: boolean;
}

export type CategoryForm = Omit<Category,'id'>

export interface LoginForm {
    email: string;
    password: string;
}

export interface LoginResponse {
    email: string;
    password: string;
    token: string;
}

export interface RegisterForm {
    name: string;
    email: string;
    password: string;
}

export interface RegisterResponse {
    name: string;
    email: string;
    password: string;
    token: string;
}

