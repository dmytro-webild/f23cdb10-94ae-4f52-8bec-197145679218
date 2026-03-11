"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Zap } from "lucide-react";

export default function AboutPage() {
  const navItems = [
    { name: "How It Works", id: "how-it-works" },
    { name: "Pricing", id: "/pricing" },
    { name: "Features", id: "features" },
    { name: "About", id: "about" },
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

      <div id="hero" data-section="hero">
        <HeroSplit
          title="About Navo Lab"
          description="Founded by Karu Thompson in late 2024 in St. Petersburg, Florida, Navo Lab was built on a simple principle: testing and proving systems work in real service businesses before claiming they do. We don't use vanity metrics or theoretical frameworks. Every strategy we recommend comes from real-world application and measurable results."
          tag="Our Story"
          tagIcon={Zap}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            { text: "Get Started", href: "/contact" },
            { text: "Schedule Consultation", href: "/contact" }
          ]}
          buttonAnimation="slide-up"
          mediaAnimation="slide-up"
          imagePosition="right"
          fixedMediaHeight={true}
        />
      </div>

      <div id="founder-story" data-section="founder-story">
        <TextSplitAbout
          title="Built by Testing in Real Businesses"
          description={[
            "Karu Thompson founded Navo Lab after years of direct testing and optimization in actual service businesses. Rather than relying on industry assumptions or marketing theories, every system Navo Lab uses today has been validated through real business implementation. We saw what worked consistently and what failed. We measured results directly—not vanity metrics, but actual lead quality and business impact.",            "This hands-on approach revealed clear patterns: most agencies sell generic solutions and rely on inflated numbers. Service business owners deserve better. They need partners who understand their specific challenges, test strategies in their real market conditions, and report honest results.",            "Navo Lab was founded to deliver exactly that. We build and test systems on real businesses first. We prove they work. Then we scale them for other service companies facing the same lead generation challenges. Everything we do is grounded in direct business testing and measurable outcomes."
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Learn Our Approach", href: "#our-approach" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="our-approach" data-section="our-approach">
        <FeatureCardMedia
          title="Our Approach: Built on Testing, Not Theory"
          description="Every strategy we recommend comes from direct business testing and proven results"
          features={[
            {
              id: "approach-1",              title: "Real Business Testing",              description: "We tested lead generation strategies directly in service businesses. Every tactic we implement has been validated through real-world results. We know what works because we've seen it work repeatedly in actual business environments.",              tag: "Foundation"
            },
            {
              id: "approach-2",              title: "Service Industry Focus",              description: "We understand the service business landscape—sales cycles, customer behavior, competitive pressures, seasonal patterns. This knowledge comes from testing in real HVAC, plumbing, electrical, roofing, and construction businesses.",              tag: "Expertise"
            },
            {
              id: "approach-3",              title: "Transparent, Measurable Results",              description: "We track leads delivered, conversion rates, cost per lead, and direct ROI. No inflated numbers. No vanity metrics. You'll see exactly what you're paying for and what results you're getting each month.",              tag: "Accountability"
            },
            {
              id: "approach-4",              title: "Continuous Optimization",              description: "We apply what we learned through testing to continuously refine your strategy. Based on real data and real performance, we improve targeting, messaging, and channel strategy. Your lead quality improves as we learn what works best for your specific business.",              tag: "Growth"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="our-mission" data-section="our-mission">
        <FeatureCardMedia
          title="Our Mission & Values"
          description="We're committed to transparent, results-driven lead generation that transforms service businesses"
          features={[
            {
              id: "mission-1",              title: "Transparency First",              description: "Every metric, every lead, every dollar spent is tracked and reported. Our clients know exactly where their investment goes and what results it generates. We've seen what happens when agencies hide behind jargon and vanity metrics—we don't operate that way.",              tag: "Commitment"
            },
            {
              id: "mission-2",              title: "Results-Driven Innovation",              description: "We continuously test and optimize based on real performance data. Your success drives our innovation. Better leads mean better results. When something isn't working, we change it. When something works, we scale it.",              tag: "Innovation"
            },
            {
              id: "mission-3",              title: "Deep Industry Understanding",              description: "We've built and tested systems in service businesses. We understand your challenges, your sales timelines, what quality leads look like in your market, and how to measure actual business impact.",              tag: "Expertise"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="about-cta" data-section="about-cta">
        <ContactCTA
          tag="Ready to Grow"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Ready to Transform Your Lead Generation?"
          description="Schedule a consultation with our team to discuss your lead generation goals. We'll share what we've learned from years of testing and show you exactly how Navo Lab can deliver consistent, qualified leads for your service business."
          buttons={[
            { text: "Schedule Consultation", href: "/contact" },
            { text: "Get Free Audit", href: "/contact" }
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
