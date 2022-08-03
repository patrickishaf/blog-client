import { AuthorModel } from "./Author";

export interface PostModel {
    id: number;
    title?: string;
    body?: string;
    date?: string;
    author?: AuthorModel;
    tags?: string[];
}