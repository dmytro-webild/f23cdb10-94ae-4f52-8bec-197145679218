"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import TestimonialCardTwelve from "@/components/sections/testimonial/TestimonialCardTwelve";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Zap, TrendingUp, Phone, Calendar, Users, Heart, Rocket, Sparkles, Crown } from "lucide-react";

export default function HomePage() {
  const navItems = [
    { name: "How It Works", id: "how-it-works" },
    { name: "Pricing", id: "pricing" },
    { name: "Features", id: "features" },
    { name: "About Us", id: "/about-us" },
    { name: "Contact", id: "contact" }
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

      <div id="hero" data-section="hero">
        <HeroSplit
          title="We make your phone ring"
          description="Navo Lab generates qualified leads for service businesses using AI-powered targeting and dedicated strategy. See your digital opportunities free."
          tag="AI-Powered Lead Generation"
          tagIcon={Zap}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            { text: "Get Your Free Audit", href: "/contact" },
            { text: "Watch Demo", href: "https://www.youtube.com" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/a-modern-ai-powered-lead-generation-dash-1772481633855-c10db891.png"
          imageAlt="Navo Lab lead generation dashboard"
          mediaAnimation="slide-up"
          imagePosition="right"
          fixedMediaHeight={true}
        />
      </div>

      <div id="how-it-works" data-section="how-it-works">
        <FeatureCardMedia
          title="How It Works"
          description="Our proven process demystifies AI-powered lead generation into clear, actionable steps"
          tag="Process"
          tagAnimation="slide-up"
          features={[
            {
              id: "step-1",              title: "Digital Audit",              description: "We analyze your current marketing presence, identify digital opportunities, and provide transparent recommendations for lead generation improvement.",              tag: "Step 1"
            },
            {
              id: "step-2",              title: "AI Targeting Setup",              description: "Our AI-powered system identifies and targets your ideal customers with precision, focusing on high-intent prospects ready to book appointments.",              tag: "Step 2"
            },
            {
              id: "step-3",              title: "Dedicated Support",              description: "You get a dedicated strategy team providing monthly strategy calls, weekly progress reporting, and detailed metrics to ensure success.",              tag: "Step 3"
            },
            {
              id: "step-4",              title: "Qualified Leads",              description: "Receive consistent, phone-ready leads delivered through your preferred channel. Our focus: your phone ringing with decision-makers.",              tag: "Step 4"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardMedia
          title="Why Service Businesses Choose Navo Lab"
          description="Built specifically for HVAC, plumbing, electrical, roofing, construction, and more"
          features={[
            {
              id: "feature-1",              title: "Transparent Reporting",              description: "Monthly detailed metrics showing leads generated, conversion rates, cost per lead, and ROI. No vanity metrics—only what matters: phone calls and booked appointments.",              tag: "Transparency",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/digital-audit-report-or-analytics-dashbo-1772481636177-fcab0e9b.png?_wi=2",              imageAlt: "Transparent reporting dashboard"
            },
            {
              id: "feature-2",              title: "Dedicated Account Management",              description: "Your own dedicated support team handles strategy, optimization, and reporting. Monthly calls to review performance and adjust campaigns for maximum results.",              tag: "Support",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/professional-headshot-of-diverse-team-me-1772481633100-b1fe8b6c.png?_wi=1",              imageAlt: "Dedicated account manager"
            },
            {
              id: "feature-3",              title: "AI-Powered Targeting",              description: "Advanced machine learning identifies and targets your ideal customers at the exact moment they're searching for your services. Precision beats volume every time.",              tag: "Technology",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/abstract-futuristic-ai-technology-visual-1772481632775-04d1d2d8.png?_wi=2",              imageAlt: "AI targeting technology"
            },
            {
              id: "feature-4",              title: "Multi-Vertical Expertise",              description: "Deep experience across HVAC, plumbing, electrical, roofing, construction, dentistry, gyms, and architecture. We understand your business unique challenges.",              tag: "Expertise",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/confident-service-business-owner-hvac-pl-1772481633162-358c5800.png?_wi=1",              imageAlt: "Service business expertise"
            },
            {
              id: "feature-5",              title: "Predictable Lead Flow",              description: "Consistent, quality leads delivered month after month. Scale your business confidently with a reliable partner managing your digital growth.",              tag: "Growth",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/close-up-of-smartphone-showing-incoming--1772481632952-a4ba83a2.png?_wi=2",              imageAlt: "Predictable lead flow"
            },
            {
              id: "feature-6",              title: "Free Digital Audit",              description: "Start with a comprehensive, no-obligation audit of your current marketing. Discover real opportunities and get actionable recommendations with no risk.",              tag: "Offer",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/call-to-action-visual-for-free-digital-a-1772481633412-e1dd491a.png?_wi=1",              imageAlt: "Free digital audit offer"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Service Businesses Across America"
          description="Leading HVAC, plumbing, electrical, roofing, and construction companies rely on Navo Lab for predictable lead flow"
          tag="Our Partners"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          names={["BlueFlame HVAC", "ProPlumbing Solutions", "ElectriPro Services", "RoofMax Construction", "Elite Electrical", "ClimateControl HVAC", "Precision Plumbers"]}
          logos={[
            "http://img.b2bpic.net/free-vector/creative-hvac-logo-template_23-2149210119.jpg",            "http://img.b2bpic.net/free-vector/flat-design-construction-company-logo-template_23-2150005184.jpg",            "http://img.b2bpic.net/free-vector/flat-design-storm-logo-template_23-2149189464.jpg",            "http://img.b2bpic.net/free-vector/yellow-black-geometric-logos-monoline-style_23-2147697748.jpg",            "http://img.b2bpic.net/free-vector/dental-logo-template_1057-2630.jpg",            "http://img.b2bpic.net/free-vector/logo-template-design_1195-112.jpg",            "http://img.b2bpic.net/free-psd/architecture-project-landing-page_23-2150284053.jpg"
          ]}
          speed={40}
          showCard={true}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Simple, Transparent Pricing"
          description="Choose the support tier that fits your business. All plans include dedicated support and detailed monthly reporting."
          tag="Support Tiers"
          tagAnimation="slide-up"
          plans={[
            {
              id: "starter",              badge: "Best for Startups",              badgeIcon: Rocket,
              price: "$2,500",              subtitle: "Perfect for businesses just starting their digital lead generation journey",              features: [
                "50-100 qualified leads/month",                "Weekly progress reporting",                "Basic AI targeting",                "Email support",                "Monthly strategy review"
              ]
            },
            {
              id: "professional",              badge: "Most Popular",              badgeIcon: Sparkles,
              price: "$5,000",              subtitle: "Ideal for growing service businesses ready to scale",              features: [
                "100-200 qualified leads/month",                "Weekly progress reporting",                "Advanced AI targeting",                "Dedicated account manager",                "Monthly strategy calls",                "Detailed monthly metrics",                "Campaign optimization"
              ]
            },
            {
              id: "enterprise",              badge: "Premium Support",              badgeIcon: Crown,
              price: "$10,000",              subtitle: "For established businesses demanding maximum results",              features: [
                "200-400 qualified leads/month",                "Weekly progress reporting",                "Advanced AI + custom targeting",                "Dedicated account manager + specialist",                "Bi-weekly strategy calls",                "Detailed monthly metrics",                "Advanced campaign optimization",                "Priority support",                "Quarterly business reviews"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Get Your Free Audit", href: "/contact" },
            { text: "Schedule Strategy Call", href: "https://calendly.com" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          testimonials={[
            {
              id: "1",              name: "Marcus Johnson",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/professional-headshot-of-satisfied-servi-1772481632884-8d16c835.png",              imageAlt: "Marcus Johnson"
            },
            {
              id: "2",              name: "Sarah Chen",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/professional-headshot-of-smiling-service-1772481632622-3dc24efc.png",              imageAlt: "Sarah Chen"
            },
            {
              id: "3",              name: "David Rodriguez",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/professional-headshot-of-business-owner--1772481633083-4ece2c48.png",              imageAlt: "David Rodriguez"
            },
            {
              id: "4",              name: "Jennifer Blake",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/professional-headshot-of-marketing-manag-1772481632791-b154b4d6.png",              imageAlt: "Jennifer Blake"
            },
            {
              id: "5",              name: "Tom Wilson",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/professional-headshot-of-service-busines-1772481632664-b5b5ddd3.png",              imageAlt: "Tom Wilson"
            },
            {
              id: "6",              name: "Amanda Roberts",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/professional-headshot-of-business-profes-1772481632529-643b0c2e.png",              imageAlt: "Amanda Roberts"
            }
          ]}
          cardTitle="Service businesses trust Navo Lab to deliver consistent, qualified leads every month"
          cardTag="Customer Success"
          cardTagIcon={Heart}
          cardAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Ready to Grow"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Get Your Free Digital Audit Today"
          description="Discover your digital opportunities and receive personalized recommendations from our AI-powered platform. No credit card required."
          buttons={[
            { text: "Request Free Audit", href: "/contact" },
            { text: "Schedule a Call", href: "https://calendly.com" }
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