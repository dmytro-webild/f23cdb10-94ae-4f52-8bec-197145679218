"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Zap, Rocket, Sparkles, Crown } from "lucide-react";

export default function PricingPage() {
  const navItems = [
    { name: "How It Works", id: "how-it-works" },
    { name: "Pricing", id: "pricing" },
    { name: "Features", id: "features" },
    { name: "About Us", id: "/about-us" },
    { name: "Contact", id: "/contact" }
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
          title="Choose the Plan That Fits Your Business"
          description="Flexible, transparent pricing with zero hidden fees. Scale up as you grow. Every plan includes dedicated support, detailed reporting, and our proven lead generation process."
          tag="Investment Tiers"
          tagAnimation="slide-up"
          plans={[
            {
              id: "starter",              badge: "Best for Startups",              badgeIcon: Rocket,
              price: "$2,500",              subtitle: "Perfect for businesses just starting their digital lead generation journey",              features: [
                "50-100 qualified leads per month",                "Weekly progress reporting",                "Basic AI targeting setup",                "Email support",                "Monthly strategy review call"
              ]
            },
            {
              id: "professional",              badge: "Most Popular",              badgeIcon: Sparkles,
              price: "$5,000",              subtitle: "Ideal for growing service businesses ready to scale predictably",              features: [
                "100-200 qualified leads per month",                "Weekly progress reporting",                "Advanced AI targeting",                "Dedicated account manager",                "Monthly strategy calls",                "Detailed monthly metrics dashboard",                "Campaign optimization"
              ]
            },
            {
              id: "enterprise",              badge: "Premium Support",              badgeIcon: Crown,
              price: "$10,000",              subtitle: "For established businesses demanding maximum results and priority support",              features: [
                "200-400 qualified leads per month",                "Weekly progress reporting",                "Advanced AI + custom targeting",                "Dedicated account manager + specialist",                "Bi-weekly strategy calls",                "Detailed monthly metrics dashboard",                "Advanced campaign optimization",                "Priority support (24-48 hour response)",                "Quarterly business reviews"
              ]
            }
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
          title="What Every Plan Includes"
          description="From day one, you get access to our complete platform and dedicated support"
          features={[
            {
              id: "included-1",              title: "AI-Powered Lead Targeting",              description: "Our proprietary machine learning identifies and reaches high-intent prospects actively searching for your services. We focus on quality over quantity—every lead is pre-qualified.",              tag: "Core Feature",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/abstract-futuristic-ai-technology-visual-1772481632775-04d1d2d8.png?_wi=4",              imageAlt: "AI targeting technology"
            },
            {
              id: "included-2",              title: "Dedicated Account Management",              description: "You get a real person managing your campaigns, not an algorithm. Your account manager understands your business, your goals, and works daily to maximize your results.",              tag: "Core Feature",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/professional-headshot-of-team-member-in--1772481632698-b8cddcbc.png?_wi=2",              imageAlt: "Account management"
            },
            {
              id: "included-3",              title: "Transparent Monthly Reporting",              description: "Detailed reports showing leads delivered, conversion rates, cost per lead, and ROI. You'll always know exactly what you're paying for and what results you're getting.",              tag: "Core Feature",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/digital-audit-report-or-analytics-dashbo-1772481636177-fcab0e9b.png?_wi=4",              imageAlt: "Transparent reporting"
            }
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
          description="Start with a free digital audit to understand your opportunities. We'll analyze your current marketing, identify what's working, and show you the real potential for your business. No credit card required."
          buttons={[
            { text: "Get Free Audit", href: "/contact" },
            { text: "Schedule Demo", href: "https://calendly.com" }
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