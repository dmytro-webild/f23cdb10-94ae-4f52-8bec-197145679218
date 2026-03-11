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
          title="We Make Your Phone Ring"
          description="Navo Lab is the growth engine for service businesses. We drive rankings, leads, and revenue through SEO, lead funnel optimization, and strategic content that compounds over time. No vanity metrics. Just results."
          tag="Digital Marketing for Local Businesses"
          tagIcon={Zap}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            { text: "Book a Call", href: "/contact" },
            { text: "See How It Works", href: "#how-it-works" }
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
          title="Our Proven 4-Step Process"
          description="Our proven process turns our online presence into a lead-generating machine"
          tag="Process"
          tagAnimation="slide-up"
          features={[
            {
              id: "step-1",              title: "Deep Audit",              description: "We analyze your online presence and competitors to understand your market positioning, identify gaps in your current strategy, and discover untapped opportunities for lead generation growth.",              tag: "Step 1"
            },
            {
              id: "step-2",              title: "Build Your Engine",              description: "We execute our proven 22-point digital marketing system designed specifically for service businesses. This comprehensive approach covers all channels necessary to generate consistent, qualified leads.",              tag: "Step 2"
            },
            {
              id: "step-3",              title: "Launch and Optimize",              description: "Your SEO strategy goes live across all channels. We implement weekly optimization protocols to continuously improve performance, test new strategies, and refine targeting based on real-time data.",              tag: "Step 3"
            },
            {
              id: "step-4",              title: "Your Phone Rings",              description: "Your pipeline fills with qualified leads ready to book. We deliver decision-makers actively seeking your services, converting your marketing into real appointments and revenue for your business.",              tag: "Step 4"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardMedia
          title="Why Service Businesses Trust Navo Lab"
          description="Built specifically for HVAC, plumbing, electrical, roofing, construction, and service companies. We understand your business because we've worked in it."
          features={[
            {
              id: "feature-1",              title: "Transparent Monthly Reporting",              description: "See exactly where every dollar goes and what it generates. We report leads delivered, appointment bookings, and actual ROI. No vanity metrics or misleading numbers—just the truth.",              tag: "Transparency",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/digital-audit-report-or-analytics-dashbo-1772481636177-fcab0e9b.png?_wi=2",              imageAlt: "Transparent reporting dashboard"
            },
            {
              id: "feature-2",              title: "Dedicated Account Manager",              description: "Your account manager understands your business, your goals, and your challenges. They're not just processing orders—they're strategizing to maximize your ROI every single month.",              tag: "Support",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/professional-headshot-of-diverse-team-me-1772481633100-b1fe8b6c.png?_wi=1",              imageAlt: "Dedicated account manager"
            },
            {
              id: "feature-3",              title: "Precision Targeting",              description: "Advanced machine learning identifies prospects searching for your services right now. We reach them with the right message at the right time, maximizing conversion potential.",              tag: "Technology",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/abstract-futuristic-ai-technology-visual-1772481632775-04d1d2d8.png?_wi=2",              imageAlt: "Targeting technology"
            },
            {
              id: "feature-4",              title: "Multi-Vertical Industry Expertise",              description: "We've successfully generated leads for HVAC, plumbing, electrical, roofing, construction, and other service verticals. We know your industry's seasonality, pricing cycles, and booking patterns.",              tag: "Expertise",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/confident-service-business-owner-hvac-pl-1772481633162-358c5800.png?_wi=1",              imageAlt: "Service business expertise"
            },
            {
              id: "feature-5",              title: "Predictable Monthly Lead Pipeline",              description: "Stop guessing about next month's leads. With Navo Lab, you plan budgets around consistent, reliable lead flow. Scale your team with confidence knowing leads will arrive.",              tag: "Growth",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/close-up-of-smartphone-showing-incoming--1772481632952-a4ba83a2.png?_wi=2",              imageAlt: "Predictable lead flow"
            },
            {
              id: "feature-6",              title: "Free Digital Audit (No Credit Card Required)",              description: "Start risk-free. We'll conduct a comprehensive audit of your current marketing, identify opportunities you're missing, and show you exactly what's possible.",              tag: "Offer",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/call-to-action-visual-for-free-digital-a-1772481633412-e1dd491a.png?_wi=1",              imageAlt: "Free digital audit offer"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by 200+ Service Businesses Nationwide"
          description="From single-location shops to multi-state operations, service businesses across America rely on Navo Lab for consistent, predictable lead flow"
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
          title="Simple, Transparent Investment"
          description="Monthly retainers. No long-term contracts. We earn your business every month."
          tag="Pricing"
          tagAnimation="slide-up"
          plans={[
            {
              id: "foundation",              badge: "Foundation",              price: "$2,000",              subtitle: "Perfect for businesses starting their digital lead generation journey",              features: [
                "Qualified leads delivered monthly",                "Weekly progress reporting",                "Basic targeting setup",                "Email support",                "Monthly strategy review"
              ]
            },
            {
              id: "growth",              badge: "Growth",              badgeIcon: Sparkles,
              price: "$3,500",              subtitle: "Most Popular - Ideal for growing service businesses ready to scale",              features: [
                "Consistent qualified leads monthly",                "Weekly progress reporting",                "Advanced targeting",                "Dedicated account manager",                "Monthly strategy calls",                "Detailed metrics dashboard",                "Campaign optimization"
              ]
            },
            {
              id: "scale",              badge: "Scale",              price: "$5,000",              subtitle: "Maximum lead volume and priority support for established businesses",              features: [
                "Maximum qualified leads monthly",                "Weekly progress reporting",                "Advanced + custom targeting",                "Dedicated account manager + specialist",                "Bi-weekly strategy calls",                "Detailed metrics dashboard",                "Advanced campaign optimization",                "Priority support",                "Quarterly business reviews"
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[
            { text: "Get Started", href: "/contact" },
            { text: "Schedule Call", href: "https://calendly.com" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="cta" data-section="cta">
        <ContactCTA
          tag="Ready to Grow"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Ready to Ask Your Phone Ringing?"
          description="Take the next step toward predictable, qualified leads. Let's discuss how Navo Lab can transform your service business with consistent monthly lead flow."
          buttons={[
            { text: "Book a Call", href: "https://calendly.com" },
            { text: "See Our Work", href: "/portfolio" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
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
          cardTitle="Service businesses trust Navo Lab to deliver consistent, qualified leads every single month"
          cardTag="Customer Success"
          cardTagIcon={Heart}
          cardAnimation="slide-up"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Get Started Today"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Get Your Free Digital Audit Today"
          description="Discover hidden opportunities in your current marketing. Our team will analyze your business, identify what's working and what's not, and deliver actionable recommendations—all completely free with no obligations."
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
