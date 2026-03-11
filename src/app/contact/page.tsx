"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from "@/components/navbar/NavbarStyleApple/NavbarStyleApple";
import ContactCTA from "@/components/sections/contact/ContactCTA";
import FeatureCardMedia from "@/components/sections/feature/FeatureCardMedia";
import SocialProofOne from "@/components/sections/socialProof/SocialProofOne";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Zap } from "lucide-react";

export default function ContactPage() {
  const navItems = [
    { name: "How It Works", id: "how-it-works" },
    { name: "Pricing", id: "/pricing" },
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

      <div id="contact-form" data-section="contact-form">
        <ContactCTA
          tag="Get in Touch"
          tagIcon={Zap}
          tagAnimation="slide-up"
          title="Request Your Free Digital Audit"
          description="Let's discover what's possible for your business. We'll analyze your current marketing, identify the opportunities you're missing, and show you exactly how Navo Lab can transform your lead flow. Our team will contact you within 24 hours to schedule your personalized consultation."
          buttons={[
            { text: "Schedule Consultation", href: "https://calendly.com" },
            { text: "Send Message", href: "mailto:hello@navo-lab.com" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "plain" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="contact-options" data-section="contact-options">
        <FeatureCardMedia
          title="Connect With Us Today"
          description="Choose the contact method that works best for you. We respond quickly because your time matters."
          features={[
            {
              id: "contact-1",              title: "Schedule a Strategy Call",              description: "Book a time that fits your schedule. Our team will walk you through your digital audit, discuss your lead generation goals, and answer all your questions about how Navo Lab can transform your business.",              tag: "Calendar",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/professional-headshot-of-team-member-wit-1772481632583-cb1f6acd.png?_wi=2",              imageAlt: "Schedule a call"
            },
            {
              id: "contact-2",              title: "Email Us Your Questions",              description: "Send us a detailed message about your service business and lead generation goals. We'll respond with specific insights, recommendations, and next steps tailored directly to your situation.",              tag: "Email",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/professional-headshot-of-diverse-team-me-1772481633100-b1fe8b6c.png?_wi=2",              imageAlt: "Email support"
            },
            {
              id: "contact-3",              title: "Request Your Free Audit",              description: "Start with our comprehensive free digital audit. We'll analyze your current marketing presence, identify opportunities you're missing, provide actionable recommendations, and show you what's possible—no obligations, no credit card required.",              tag: "Audit",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AP5BwcOCEdbUvGXGzmfDl4faxC/call-to-action-visual-for-free-digital-a-1772481633412-e1dd491a.png?_wi=2",              imageAlt: "Free audit request"
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="contact-social-proof" data-section="contact-social-proof">
        <SocialProofOne
          title="Join Hundreds of Service Businesses Getting Results"
          description="Leading HVAC, plumbing, electrical, roofing, and construction companies trust Navo Lab to deliver predictable, qualified leads every month"
          tag="Partners"
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          names={["BlueFlame HVAC", "ProPlumbing Solutions", "ElectriPro Services", "RoofMax Construction", "Elite Electrical"]}
          logos={[
            "http://img.b2bpic.net/free-vector/creative-hvac-logo-template_23-2149210119.jpg",            "http://img.b2bpic.net/free-vector/flat-design-construction-company-logo-template_23-2150005184.jpg",            "http://img.b2bpic.net/free-vector/flat-design-storm-logo-template_23-2149189464.jpg",            "http://img.b2bpic.net/free-vector/yellow-black-geometric-logos-monoline-style_23-2147697748.jpg",            "http://img.b2bpic.net/free-vector/dental-logo-template_1057-2630.jpg"
          ]}
          speed={40}
          showCard={true}
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