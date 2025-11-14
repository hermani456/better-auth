"use server"

import { auth } from "@/lib/auth"

export const signInUser = async (email: string, password: string) => {
    try {
        await auth.api.signInEmail({
            body: {
                email,
                password
            },
        })

        return { success: true, message: "Inicio de sesión exitoso" }
    } catch (error) {
        const e = error as Error
        return { success: false, message: e.message }
    }
}

export const signUpUser = async (name: string, email: string, password: string) => {
    try {
        await auth.api.signUpEmail({
            body: {
                email,
                password,
                name
            },
        })

        return { success: true, message: "Registro exitoso" }
    } catch (error) {
        const e = error as Error
        return { success: false, message: e.message }
    }
}