import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Index() {
  const t = useTranslations("Home");
  return (
    <div className="w-full lg:h-screen">
      <Image
        src="/hero.jpg"
        alt="Bakery store"
        width={500}
        height={500}
        className="h-96 lg:h-full object-cover bg-blend-overlay brightness-75"
      />
      <div className="absolute top-40 lg:top-1/2 left-5 lg:left-10 lg:w-1/2">
        <h1 className="text-4xl lg:text-7xl text-white text-start text-balance">
          {t("title")}
        </h1>
        <p className="text-lg lg:text-3xl text-white text-balance backdrop-brightness-75 rounded-xl">
          {t("subtitle")}
        </p>
      </div>
    </div>
  );
}
