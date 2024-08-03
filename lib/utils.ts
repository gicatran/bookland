/* eslint-disable react-hooks/rules-of-hooks */
import { facebookIcon, googleIcon } from "@/constants/asset_constants";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getOAuthIcon(icon: string) {
    switch (icon) {
        case "google":
            return googleIcon;
        case "facebook":
            return facebookIcon;
        default:
            return null;
    }
}

export function isValidEmail(email: string): boolean {
    return /.+@.+/.test(email);
}

export function isValidUsername(username: string): boolean {
    return /^[a-z0-9_-]+$/.test(username);
}

export function getUsernameByEmail(email: string) {
    return email.split("@")[0];
}
