import { Pathnames } from "next-intl/navigation";

export const locales = ["en", "es", "fr"] as const;

export const pathnames = {
  "/": "/",
  "/pathnames": {
    en: "/pathnames",
    es: "/nombres-de-ruta",
    fr: "/noms-de-chemin",
  },
} satisfies Pathnames<typeof locales>;

export const localePrefix = undefined;

export type AppPathnames = keyof typeof pathnames;