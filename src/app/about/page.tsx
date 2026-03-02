"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import AboutMetric from "@/components/sections/about/AboutMetric";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import Link from "next/link";
import { Zap, TrendingUp, Phone, Calendar, Users, Award, Lightbulb, Target } from "lucide-react";

export default function AboutPage() {
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

      <div id="about-company" data-section="about-company">
        <AboutMetric
          title="About Navo Lab: Revolutionizing Lead Generation for Service Businesses"
          metrics={[
            { icon: Award, label: "Years of Industry Experience", value: "10+" },
            { icon: Lightbulb, label: "AI Innovations Deployed", value: "50+" },
            { icon: Target, label: "Service Verticals Served", value: "12+" },
            { icon: TrendingUp, label: "Average ROI Improvement", value: "315%" },
          ]}
          metricsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="our-mission" data-section="our-mission">
        <FeatureCardMedia
          title="Our Mission & Values"
          description="We're committed to transparent, results-driven lead generation that transforms service businesses"
          features={[
            {
              id: "mission-1",
              title: "Transparency First",
              description: "Every metric, every lead, every dollar spent is tracked and reported. Our clients know exactly where their investment goes and what it generates.",
              tag: "Commitment",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/digital-audit-report-or-analytics-dashbo-1772481636177-fcab0e9b.png",
              imageAlt: "Transparent reporting",
            },
            {
              id: "mission-2",
              title: "Results-Driven Innovation",
              description: "We continuously optimize our AI algorithms and targeting strategies. Your success drives our innovation. Better leads mean better results.",
              tag: "Innovation",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/abstract-futuristic-ai-technology-visual-1772481632775-04d1d2d8.png",
              imageAlt: "AI innovation",
            },
            {
              id: "mission-3",
              title: "Deep Industry Understanding",
              description: "Our team has worked in and with HVAC, plumbing, electrical, and service businesses. We understand your challenges, timelines, and what quality leads look like.",
              tag: "Expertise",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/professional-headshot-of-team-member-wit-1772481632583-cb1f6acd.png",
              imageAlt: "Industry expertise",
            },
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="about-cta" data-section="about-cta">
        <ContactCTA
          tag="Join Our Community"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Ready to Learn More About Navo Lab?"
          description="Schedule a consultation with our team to discuss your lead generation goals and discover how we can transform your service business."
          buttons={[
            { text: "Schedule Consultation", href: "/contact" },
            { text: "Get Free Audit", href: "/contact" },
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
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