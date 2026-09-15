import { ui, defaultLang, showDefaultLang, languages, type SupportedLanguage } from "./ui";

const SITE_ORIGIN = "https://freebulkimagedownloader.com";

export function getLangFromUrl(url: URL | string): SupportedLanguage {
  const pathname = typeof url === "string" ? url : url.pathname;
  const segments = pathname.split("/").filter(Boolean);
  const firstSegment = segments[0];

  if (firstSegment && firstSegment in ui) {
    return firstSegment as SupportedLanguage;
  }
  return defaultLang;
}

export function stripLangPrefix(pathname: string): string {
  const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const segments = cleanPath.split("/").filter(Boolean);
  if (segments.length > 0 && segments[0] in ui) {
    segments.shift();
  }
  const result = `/${segments.join("/")}`;
  return result === "" ? "/" : result;
}

export function useTranslations(lang: SupportedLanguage) {
  const localizedUI = ui[lang] || ui[defaultLang];
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return (localizedUI as Record<string, string>)[key] || (ui[defaultLang] as Record<string, string>)[key] || key;
  };
}

export function useTranslatedPath(lang: SupportedLanguage) {
  return function translatePath(path: string, targetLang: SupportedLanguage = lang): string {
    const rawPath = stripLangPrefix(path);
    if (!showDefaultLang && targetLang === defaultLang) {
      return rawPath;
    }
    const cleanPath = rawPath === "/" ? "" : rawPath;
    return `/${targetLang}${cleanPath}`;
  };
}

export function getLocalizedUrl(pathname: string, targetLang: SupportedLanguage): string {
  const rawPath = stripLangPrefix(pathname);
  if (!showDefaultLang && targetLang === defaultLang) {
    return `${SITE_ORIGIN}${rawPath}`;
  }
  const cleanPath = rawPath === "/" ? "" : rawPath;
  return `${SITE_ORIGIN}/${targetLang}${cleanPath}`;
}

export interface HreflangItem {
  lang: string;
  href: string;
}

export function getHreflangList(pathname: string): HreflangItem[] {
  const rawPath = stripLangPrefix(pathname);
  const cleanSuffix = rawPath === "/" ? "" : rawPath;
  const list: HreflangItem[] = [];

  // x-default points to default language (English root)
  list.push({
    lang: "x-default",
    href: `${SITE_ORIGIN}${rawPath}`,
  });

  // Default English route
  list.push({
    lang: "en",
    href: `${SITE_ORIGIN}${rawPath}`,
  });

  // Other supported languages
  const otherLangs: SupportedLanguage[] = ["es", "ja", "fr", "de", "pt", "ko", "it"];
  for (const l of otherLangs) {
    list.push({
      lang: l,
      href: `${SITE_ORIGIN}/${l}${cleanSuffix}`,
    });
  }

  return list;
}
