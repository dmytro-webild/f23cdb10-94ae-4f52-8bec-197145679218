"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import PricingCardOne from "@/components/sections/pricing/PricingCardOne";
import FeatureCardTwentyFive from "@/components/sections/feature/FeatureCardTwentyFive";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Zap, TrendingUp, Phone, Calendar, Users, Heart, Rocket, Sparkles, Crown, Briefcase, BarChart3, Target } from "lucide-react";

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
          title="Our Service Delivery Framework"
          description="The complete systems and strategies we implement for every service business client"
          features={[
            {
              id: "feature-1",              title: "22-Point Marketing System",              description: "Our comprehensive digital infrastructure covering SEO optimization, local citation management, content distribution, lead funnel setup, and performance tracking. Every element works together to generate consistent, qualified leads for your service business.",              tag: "Core System"
            },
            {
              id: "feature-2",              title: "Strategic Content Package",              description: "Proven educational and promotional content developed for your specific service vertical. We create blog posts, video scripts, service guides, and case studies that position you as the expert and drive organic traffic to your business.",              tag: "Content Strategy"
            },
            {
              id: "feature-3",              title: "Local SEO Domination",              description: "Complete local search optimization including Google Business Profile management, local citation building, review generation, and location-specific keyword targeting. We get you found when prospects search for your services in your service area.",              tag: "Local Visibility"
            },
            {
              id: "feature-4",              title: "Content Flywheel",              description: "Our system that compounds results over time. Strategic content attracts prospects, builds authority, improves SEO rankings, and generates continuous qualified leads month after month. The longer you're with us, the stronger your lead flow becomes.",              tag: "Growth Engine"
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
          buttons={[
            { text: "Get Started", href: "/contact" },
            { text: "Schedule Call", href: "https://calendly.com" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <FeatureCardTwentyFive
          title="Real Businesses. Real Results."
          description="See how service businesses are generating qualified leads and growing their revenue with Navo Lab's proven approach"
          tag="Case Studies"
          tagAnimation="slide-up"
          features={[
            {
              title: "HB Design & Engineering",              description: "Structural engineering firm centralized their marketing through Navo Lab, generating a high six-figure project opportunity through improved Google visibility. The strategic optimization resulted in over 40x return on their monthly investment in the first quarter alone.",              icon: Briefcase,
              mediaItems: [
                {
                  imageSrc: "data:image/svg+xml,%3Csvg xmlns=?_wi=1'http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3Ctext x='200' y='150' font-size='24' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EEngineering Success%3C/text%3E%3C/svg%3E",                  imageAlt: "Engineering project success"
                },
                {
                  imageSrc: "data:image/svg+xml,%3Csvg xmlns=?_wi=2'http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3Ctext x='200' y='150' font-size='24' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3E40x ROI Growth%3C/text%3E%3C/svg%3E",                  imageAlt: "40x return on investment"
                }
              ]
            },
            {
              title: "The Service Pros",              description: "Through strategic educational video content and targeted distribution, The Service Pros achieved 50,000 social media views in their first month—all with zero ad spend. Their organic reach strategy proved that quality content combined with smart positioning drives real engagement and qualified leads.",              icon: BarChart3,
              mediaItems: [
                {
                  imageSrc: "data:image/svg+xml,%3Csvg xmlns=?_wi=3'http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3Ctext x='200' y='150' font-size='24' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3E50K Social Views%3C/text%3E%3C/svg%3E",                  imageAlt: "50000 social media views"
                },
                {
                  imageSrc: "data:image/svg+xml,%3Csvg xmlns=?_wi=4'http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23f0f0f0' width='400' height='300'/%3E%3Ctext x='200' y='150' font-size='24' fill='%23999' text-anchor='middle' dominant-baseline='middle'%3EZero Ad Spend%3C/text%3E%3C/svg%3E",                  imageAlt: "Zero advertising cost"
                }
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="cta" data-section="cta">
        <ContactCTA
          tag="Ready to Grow"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Ready to Make Your Phone Ring?"
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