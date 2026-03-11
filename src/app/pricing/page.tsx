"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import FaqBase from "@/components/sections/faq/FaqBase";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Zap, Sparkles } from "lucide-react";

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
          title="Simple, Transparent Investment"
          description="Monthly retainers. No long-term contracts. We earn your business every month."
          tag="Simple Pricing"
          tagAnimation="slide-up"
          plans={[
            {
              id: "foundation",              badge: "Foundation",              price: "$2,000/mo",              subtitle: "Perfect for single-location businesses",              features: [
                "GBP optimization",                "Local citation building",                "Basic SEO setup",                "Monthly progress reporting",                "Email support"
              ]
            },
            {
              id: "growth",              badge: "Growth",              badgeIcon: Sparkles,
              price: "$3,500/mo",              subtitle: "Most Popular - For businesses ready to dominate their local market",              features: [
                "Everything in Foundation",                "Full 22-point marketing system",                "Strategic content production",                "Weekly strategy calls",                "Dedicated account manager",                "Landing page optimization"
              ]
            },
            {
              id: "scale",              badge: "Scale",              price: "$5,000/mo",              subtitle: "For businesses ready to own their market across multiple locations",              features: [
                "Everything in Growth",                "Multi-location SEO",                "Advanced content flywheel",                "Bi-weekly strategy calls",                "Priority support",                "Paid ads management"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[{ text: "Book a Call", href: "/contact" }]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="pricing-details" data-section="pricing-details">
        <FeatureCardMedia
          title="What Every Plan Includes"
          description="From day one, you get access to our complete platform and dedicated support"
          features={[
            {
              id: "included-1",              title: "Lead Generation",              description: "Our proven process identifies and reaches high-intent prospects actively searching for your services. We focus on quality over quantity—every lead is pre-qualified.",              tag: "Core Feature",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/abstract-futuristic-ai-technology-visual-1772481632775-04d1d2d8.png?_wi=4",              imageAlt: "Lead generation technology"
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

      <div id="faq" data-section="faq">
        <FaqBase
          title="Frequently Asked Questions"
          description="Everything you need to know about Navo Lab and our lead generation services"
          tag="FAQ"
          tagAnimation="slide-up"
          faqs={[
            {
              id: "faq-1",              title: "What is Navo Lab?",              content: "Navo Lab is a digital marketing growth engine specializing in lead generation and SEO for local service businesses. We help HVAC, plumbing, electrical, roofing, and other service companies generate consistent, qualified leads through proven digital marketing strategies and dedicated account management."
            },
            {
              id: "faq-2",              title: "How does Navo Lab generate leads?",              content: "We use a comprehensive 22-point digital marketing system that includes local SEO optimization, strategic content creation, Google Business Profile management, local citation building, and targeted digital outreach. Our approach focuses on reaching high-intent prospects actively searching for your services in your service area."
            },
            {
              id: "faq-3",              title: "What service industries do you work with?",              content: "We specialize in lead generation for service businesses including HVAC, plumbing, electrical, roofing, construction, and similar trades. We have deep expertise in understanding the sales cycles, customer behavior, and marketing challenges specific to local service companies."
            },
            {
              id: "faq-4",              title: "Are there long-term contracts?",              content: "No. We offer flexible month-to-month retainers with no long-term contracts required. We believe in earning your business every single month through consistent results and dedicated service."
            },
            {
              id: "faq-5",              title: "How do I know what results I'm getting?",              content: "You receive detailed monthly reports showing leads delivered, conversion metrics, cost per lead, and ROI. We believe in complete transparency—you'll always know exactly what you're paying for and what results you're achieving."
            },
            {
              id: "faq-6",              title: "What makes Navo Lab different?",              content: "We combine deep industry expertise with proven marketing systems and dedicated account management. We focus on quality leads, not vanity metrics. Your success is our success, and we work daily to optimize your lead flow and results."
            },
            {
              id: "faq-7",              title: "How long before I see results?",              content: "Most clients begin seeing qualified leads within the first 30-60 days of implementation. However, our approach is designed for long-term sustainable growth. The longer you're with us, the stronger your lead flow becomes as SEO rankings improve and your digital presence compounds."
            },
            {
              id: "faq-8",              title: "What's included in each pricing tier?",              content: "All tiers include our full digital marketing platform and dedicated support. Foundation includes essential SEO setup and monthly reporting. Growth adds our complete 22-point system and weekly strategy calls. Scale provides multi-location capabilities and bi-weekly optimization sessions."
            }
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
          faqsAnimation="slide-up"
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
