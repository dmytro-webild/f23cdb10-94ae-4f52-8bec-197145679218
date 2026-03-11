"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import TextSplitAbout from "@/components/sections/about/TextSplitAbout";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Zap, Lightbulb, Users, Target, TrendingUp, Rocket } from "lucide-react";

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
          description="Founded by Karu Thompson, Navo Lab emerged from real-world experience testing and optimizing lead generation systems for service businesses. We built this company to solve the exact problems we faced: inconsistent lead quality, unclear ROI, and marketing agencies that didn't understand the service industry."
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
          title="From Testing to Results"
          description={[
            "Karu Thompson started experimenting with lead generation systems while running service business operations. Over years of direct testing and optimization, patterns emerged: certain strategies consistently generated qualified leads, while most industry approaches relied on vanity metrics and false promises.",            "Rather than join an agency pushing outdated tactics, Karu built Navo Lab to implement what actually worked. Every system we use today comes from real testing in real service businesses. We learned what questions matter, which channels deliver qualified prospects, and how to measure results that actually impact revenue.",            "Today, Navo Lab applies these tested methodologies to help service businesses generate consistent, predictable leads without wasting money on ineffective marketing."
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
          description="Every strategy we recommend comes from direct business testing and proven results, not industry assumptions"
          features={[
            {
              id: "approach-1",              title: "Real Business Testing",              description: "We tested lead generation strategies directly in service businesses for years. Every tactic we implement has been validated through real-world results, not marketing theory. We know what works because we've seen it work repeatedly.",              tag: "Foundation"
            },
            {
              id: "approach-2",              title: "Service Industry Focus",              description: "HVAC, plumbing, electrical, roofing, construction—we understand your specific challenges. Sales cycles, customer behavior, competitive landscape, seasonal patterns. This isn't generic marketing. It's built for your industry.",              tag: "Expertise"
            },
            {
              id: "approach-3",              title: "Transparent, Measurable Results",              description: "No vanity metrics. We track leads delivered, conversion rates, cost per lead, and direct ROI. You'll know exactly what you're paying for and what results you're getting. Monthly reporting shows real numbers that impact your business.",              tag: "Accountability"
            },
            {
              id: "approach-4",              title: "Continuous Optimization",              description: "We don't set and forget. Based on testing and real-time data, we continuously refine targeting, messaging, and channel strategy. Your lead quality improves month after month as we learn what works best for your specific business.",              tag: "Growth"
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
              id: "mission-1",              title: "Transparency First",              description: "Every metric, every lead, every dollar spent is tracked and reported. Our clients know exactly where their investment goes and what it generates.",              tag: "Commitment"
            },
            {
              id: "mission-2",              title: "Results-Driven Innovation",              description: "We continuously test and optimize our strategies based on real performance data. Your success drives our innovation. Better leads mean better results.",              tag: "Innovation"
            },
            {
              id: "mission-3",              title: "Deep Industry Understanding",              description: "Our team has worked in and with HVAC, plumbing, electrical, and service businesses. We understand your challenges, timelines, and what quality leads look like in your market.",              tag: "Expertise"
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
