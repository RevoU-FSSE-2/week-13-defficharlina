export interface GetCategoryResponse {
    categorys: Category[];
    total: number;
    skip: number;
    limit: number;
}

export interface Category {
    id: number;
    title: string;
    status: boolean;
}

export type CategoryForm = Omit<Category,'id'>

export interface LoginForm {
    username: string;
    password: string;
}

export interface LoginResponse {
    email: string;
    password: string;
    token: string;
}

export interface RegisterForm {
    username: string;
    email: string;
    password: string;
}

export interface RegisterResponse {
    username: string;
    email: string;
    password: string;
    token: string;
}

