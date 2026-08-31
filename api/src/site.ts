// The ONLY per-site file under api/. Every other file in this tree is
// byte-identical across the site repos; see the sha256sum contract in README.
// Site facts live in source, not in env, so they roll back with the image and
// are reviewable in a diff. Env carries the four secrets and nothing else.

import type { SiteConfig } from "./catalog.ts";

export const SITE: SiteConfig = {
  id: "cadran-seo",
  origin: "https://cadran-seo.devanchor.company",
  notifyTo: "astowny+cadran-seo@gmail.com",
  fromName: "Cadran SEO",
  statementSuffix: "CADRANSEO",
  plans: {
    // Amounts in minor units. Monthly offers are sold as a one-off first
    // month: no Subscription is created anywhere in this service, so no
    // recurring obligation and no cancellation route is owed.
    overhaul: {
      amount: 149000,
      currency: "eur",
      label: { fr: "Remise à niveau", en: "Overhaul" },
    },
    retainer_first_month: {
      amount: 39000,
      currency: "eur",
      label: { fr: "Accompagnement — premier mois", en: "Retainer — first month" },
    },
  },
};
