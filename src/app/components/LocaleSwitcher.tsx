"use client";
import clsx from "clsx";
import { ChangeEvent, useTransition } from "react";
import { useRouter, usePathname } from "@/navigation";
import { useLocale, useTranslations } from "next-intl";
import { locales } from "@/config";


export default function LocaleSwitcher({}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value as "en" | "es" | "fr" | undefined;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <label
      className={clsx(
        "relative",
        isPending && "transition-opacity [&:disabled]:opacity-30"
      )}
    >
      <p className="sr-only">{t("label")}</p>
      <select
        className="inline-flex text-md bg-dark-blue py-1 pr-2 border border-gray rounded text-gray"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {locales.map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </select>
    </label>
  );
}
