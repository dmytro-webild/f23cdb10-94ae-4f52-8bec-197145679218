"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";
import { Zap, Rocket, Sparkles, Crown, Check } from "lucide-react";

export default function PricingPage() {
  const navItems = [
    { name: "How It Works", id: "how-it-works" },
    { name: "Pricing", id: "pricing" },
    { name: "Features", id: "features" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="largeSmallSizeLargeTitles"
      background="noiseDiagonalGradient"
      cardStyle="solid"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="layered"
      headingFontWeight="medium"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Navo Lab"
          navItems={navItems}
        />
      </div>

      <div id="pricing-plans" data-section="pricing-plans">
        <PricingCardOne
          title="Flexible Plans for Every Service Business"
          description="Transparent pricing with no hidden fees. Scale as you grow. All plans include dedicated support and detailed monthly reporting."
          tag="Investment Tiers"
          tagAnimation="slide-up"
          plans={[
            {
              id: "starter",              badge: "Best for Startups",              badgeIcon: Rocket,
              price: "$2,500",              subtitle: "Perfect for businesses just starting their digital lead generation journey",              features: [
                "50-100 qualified leads/month",                "Weekly progress reporting",                "Basic AI targeting",                "Email support",                "Monthly strategy review"],
            },
            {
              id: "professional",              badge: "Most Popular",              badgeIcon: Sparkles,
              price: "$5,000",              subtitle: "Ideal for growing service businesses ready to scale",              features: [
                "100-200 qualified leads/month",                "Weekly progress reporting",                "Advanced AI targeting",                "Dedicated account manager",                "Monthly strategy calls",                "Detailed monthly metrics",                "Campaign optimization"],
            },
            {
              id: "enterprise",              badge: "Premium Support",              badgeIcon: Crown,
              price: "$10,000",              subtitle: "For established businesses demanding maximum results",              features: [
                "200-400 qualified leads/month",                "Weekly progress reporting",                "Advanced AI + custom targeting",                "Dedicated account manager + specialist",                "Bi-weekly strategy calls",                "Detailed monthly metrics",                "Advanced campaign optimization",                "Priority support",                "Quarterly business reviews"],
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Get Started", href: "/contact" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="pricing-details" data-section="pricing-details">
        <FeatureCardMedia
          title="What's Included in Every Plan"
          description="All tiers include comprehensive support and transparent reporting"
          features={[
            {
              id: "included-1",              title: "AI-Powered Targeting",              description: "Our machine learning algorithms identify and target your ideal customers across multiple channels for maximum precision.",              tag: "Core Feature",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/abstract-futuristic-ai-technology-visual-1772481632775-04d1d2d8.png",              imageAlt: "AI targeting technology"},
            {
              id: "included-2",              title: "Dedicated Account Management",              description: "Get a dedicated point of contact who understands your business goals and manages your campaigns daily for optimal performance.",              tag: "Core Feature",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/professional-headshot-of-team-member-in--1772481632698-b8cddcbc.png",              imageAlt: "Account management"},
            {
              id: "included-3",              title: "Transparent Reporting",              description: "Receive detailed monthly reports showing exactly what you paid for, what leads you received, and your ROI. No vanity metrics.",              tag: "Core Feature",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/digital-audit-report-or-analytics-dashbo-1772481636177-fcab0e9b.png",              imageAlt: "Transparent reporting"},
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="pricing-cta" data-section="pricing-cta">
        <ContactCTA
          tag="Choose Your Plan"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Ready to Scale Your Service Business?"
          description="Start with a free digital audit to understand your opportunities. No credit card required. Our team will contact you within 24 hours."
          buttons={[
            { text: "Get Free Audit", href: "/contact" },
            { text: "Schedule Demo", href: "https://calendly.com" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Navo Lab"
          leftLink={{ text: "Privacy Policy", href: "/privacy" }}
          rightLink={{ text: "Terms of Service", href: "/terms" }}
        />
      </div>
    </ThemeProvider>
  );
}