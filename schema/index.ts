import * as z from 'zod';

export const RegisterSchema = z.object({
    username: z.string().min(1, {
        message: "Please enter your username"
    }),
    firstname: z.string().min(1, {
        message: "Please enter your firstname"
    }),
    lastname: z.string().min(1, {
        message: "Please enter your lastname"
    }),
    password1: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    }),
    password2: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    })
})

export const LoginSchema = z.object({
    username: z.string().min(1, {
        message: "Please enter your username"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
})
})

export const SearchSchema = z.object({
    author: z.string().min(0, {
        message: "Please enter your username"
    }),
    book: z.string().min(0, {
        message: "Please enter your username"
    }),
    genre: z.string().min(0, {
        message: "Please enter your username"
    }),
    lang: z.string().min(0, {
        message: "Please enter your username"
    }),
})