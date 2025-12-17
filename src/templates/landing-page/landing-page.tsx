import {
  HeroSection,
  FeatureSection,
  SupportSection,
  CustomerStorySection,
  CallToActionSection,
} from "@/templates/landing-page/sections";

export function LandingPage() {
  return (
    <article className="flex flex-col gap-10 md:gap-20 bg-gray-700">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CallToActionSection />
    </article>
  );
}
