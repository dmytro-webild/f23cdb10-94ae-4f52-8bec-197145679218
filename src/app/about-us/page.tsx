"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import HeroSplit from "@/components/sections/hero/HeroSplit";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Zap, Award, Lightbulb, Target, TrendingUp } from "lucide-react";

export default function AboutUsPage() {
  const navItems = [
    { name: "How It Works", id: "how-it-works" },
    { name: "Pricing", id: "/pricing" },
    { name: "Features", id: "features" },
    { name: "About Us", id: "about-us" },
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
          title="About Us"
          description="Navo Lab is revolutionizing how service businesses generate qualified leads. We combine AI-powered technology with deep industry expertise to deliver consistent, predictable results."
          tag="Our Story"
          tagIcon={Zap}
          tagAnimation="slide-up"
          background={{ variant: "glowing-orb" }}
          buttons={[
            { text: "Get Started", href: "/contact" },
            { text: "Learn More", href: "#our-mission" }
          ]}
          buttonAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/uploaded-1772555286722-vkbiawuk.png"
          imageAlt="Navo Lab team"
          mediaAnimation="slide-up"
          imagePosition="right"
          fixedMediaHeight={true}
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
              id: "mission-2",              title: "Results-Driven Innovation",              description: "We continuously optimize our AI algorithms and targeting strategies. Your success drives our innovation. Better leads mean better results.",              tag: "Innovation"
            },
            {
              id: "mission-3",              title: "Deep Industry Understanding",              description: "Our team has worked in and with HVAC, plumbing, electrical, and service businesses. We understand your challenges, timelines, and what quality leads look like.",              tag: "Expertise"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="why-choose" data-section="why-choose">
        <FeatureCardMedia
          title="Why Choose Navo Lab"
          description="Built on years of industry experience and proven results"
          features={[
            {
              id: "why-1",              title: "Industry Expertise",              description: "10+ years of experience in lead generation and digital marketing specifically for service industries.",              tag: "Experience",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/professional-headshot-of-team-member-wit-1772481632583-cb1f6acd.png?_wi=1",              imageAlt: "Industry expertise"
            },
            {
              id: "why-2",              title: "AI-Powered Technology",              description: "Cutting-edge machine learning algorithms that continuously improve targeting and lead quality.",              tag: "Technology",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/abstract-futuristic-ai-technology-visual-1772481632775-04d1d2d8.png?_wi=3",              imageAlt: "AI technology"
            },
            {
              id: "why-3",              title: "Dedicated Support",              description: "Your own team of specialists committed to your success. Monthly strategy calls, weekly reporting, and continuous optimization.",              tag: "Support",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/professional-headshot-of-diverse-team-me-1772481633100-b1fe8b6c.png?_wi=2",              imageAlt: "Dedicated support team"
            },
            {
              id: "why-4",              title: "Transparent Reporting",              description: "No vanity metrics. Only real numbers that matter: qualified leads, booked appointments, and measurable ROI.",              tag: "Reporting",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/digital-audit-report-or-analytics-dashbo-1772481636177-fcab0e9b.png?_wi=3",              imageAlt: "Transparent reporting"
            },
            {
              id: "why-5",              title: "Multi-Vertical Experience",              description: "Proven expertise across HVAC, plumbing, electrical, roofing, construction, and more service verticals.",              tag: "Verticals",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/confident-service-business-owner-hvac-pl-1772481633162-358c5800.png?_wi=2",              imageAlt: "Service business expertise"
            },
            {
              id: "why-6",              title: "Proven Results",              description: "Average 73% increase in lead quality, thousands of qualified leads generated, and consistent appointment bookings.",              tag: "Results",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/close-up-of-smartphone-showing-incoming--1772481632952-a4ba83a2.png?_wi=2",              imageAlt: "Proven results"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="about-cta" data-section="about-cta">
        <ContactCTA
          tag="Join Our Community"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Ready to Transform Your Lead Generation?"
          description="Schedule a consultation with our team to discuss your lead generation goals and discover how Navo Lab can transform your service business."
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
