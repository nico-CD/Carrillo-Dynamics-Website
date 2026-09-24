export type TradeId =
  | "hvac"
  | "plumbing"
  | "electrical"
  | "waste"
  | "roofing"
  | "towing"
  | "landscaping"
  | "custom";

export type TradeChip = {
  id: TradeId;
  labelEn: string;
  labelEs: string;
};

export const DEMO_HUB_URL = "https://demo.carrillodynamics.com";

export const CONTACT = {
  phoneE164: "+13124560987",
  phoneDisplay: "(312) 456-0987",
  email: "nico@carrillodynamics.com",
  smsHref: "sms:+13124560987",
  telHref: "tel:+13124560987",
  mailHref: "mailto:nico@carrillodynamics.com",
} as const;

/** Chip order for /start QR funnel — mirrors demo hub registry. */
export const START_TRADES: TradeChip[] = [
  { id: "hvac", labelEn: "HVAC", labelEs: "HVAC" },
  { id: "plumbing", labelEn: "Plumbing", labelEs: "Plomería" },
  { id: "electrical", labelEn: "Electrical", labelEs: "Eléctrico" },
  { id: "waste", labelEn: "Waste", labelEs: "Residuos" },
  { id: "roofing", labelEn: "Roofing", labelEs: "Techado" },
  { id: "towing", labelEn: "Towing", labelEs: "Grúas" },
  { id: "landscaping", labelEn: "Landscaping", labelEs: "Paisajismo" },
  { id: "custom", labelEn: "Custom", labelEs: "A medida" },
];

export function hubTradeUrl(tradeId: TradeId, searchParams?: URLSearchParams): string {
  const url = new URL(DEMO_HUB_URL);
  if (tradeId !== "hvac") {
    url.searchParams.set("trade", tradeId);
  }
  // Pass through UTM / card scan attribution when present
  if (searchParams) {
    ["utm_source", "utm_medium", "utm_campaign", "src", "v"].forEach((key) => {
      const val = searchParams.get(key);
      if (val) url.searchParams.set(key, val);
    });
  }
  return url.toString();
}
