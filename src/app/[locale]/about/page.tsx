import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Home");
  return (
    <>
      <h1>{t("title")}</h1>
      <p>About</p>
    </>
  );
}
