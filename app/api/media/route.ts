import { NextRequest, NextResponse } from "next/server";
import { getMediaItems } from "@/lib/local-content";
import type { Locale } from "@/lib/i18n";

function getLocale(queryValue: string | null): Locale | undefined {
  if (queryValue === "ar") {
    return "ar";
  }

  if (queryValue === "en" || queryValue === null) {
    return "en";
  }

  return undefined;
}

export async function GET(request: NextRequest) {
  const locale = getLocale(request.nextUrl.searchParams.get("locale"));

  if (!locale) {
    return NextResponse.json(
      { error: "Locale must be 'en' or 'ar'." },
      { status: 400 }
    );
  }

  try {
    const media = await getMediaItems(locale);
    return NextResponse.json({ media });
  } catch (error) {
    console.error("Media API error:", error);
    return NextResponse.json(
      { error: "Unable to load media items at this time." },
      { status: 500 }
    );
  }
}
