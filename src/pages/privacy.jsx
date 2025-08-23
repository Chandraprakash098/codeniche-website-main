import React from 'react';
import styled from 'styled-components';

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0d1b2a 0%, #1b263b 100%);
  color: #E0E1DD;
  padding: 2rem 0;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem 0;
  border-bottom: 2px solid rgba(65, 90, 119, 0.3);
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  background: linear-gradient(135deg, #778DA9 0%, #415A77 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #9ca3af;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const LastUpdated = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(65, 90, 119, 0.1);
  border-radius: 0.5rem;
  border: 1px solid rgba(65, 90, 119, 0.2);
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
  background: rgba(27, 38, 59, 0.3);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(65, 90, 119, 0.2);

  @media (max-width: 576px) {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #778DA9;
  margin-bottom: 1rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3rem;
    height: 0.125rem;
    background: linear-gradient(135deg, #415A77 0%, #1B263B 100%);
  }

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

const SectionContent = styled.div`
  line-height: 1.7;
  color: #E0E1DD;
  
  p {
    margin-bottom: 1rem;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    color: #778DA9;
    font-weight: 600;
  }
`;

const ContactInfo = styled.div`
  background: linear-gradient(135deg, rgba(65, 90, 119, 0.2) 0%, rgba(27, 38, 59, 0.2) 100%);
  padding: 2rem;
  border-radius: 1rem;
  border: 1px solid rgba(65, 90, 119, 0.3);
  text-align: center;
  margin-top: 3rem;

  h3 {
    color: #778DA9;
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  p {
    margin-bottom: 0.5rem;
  }

  a {
    color: #778DA9;
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: #E0E1DD;
    }
  }
`;

const PrivacyPolicy = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <Header>
          <Title>Privacy Policy</Title>
          <Subtitle>
            Your privacy is important to us. This policy explains how CodeNiche SoftStudio collects, uses, and protects your information.
          </Subtitle>
        </Header>

        <LastUpdated>
          <strong>Last Updated:</strong> August 23, 2025
        </LastUpdated>

        <Section>
          <SectionTitle>1. Information We Collect</SectionTitle>
          <SectionContent>
            <p>
              We collect information you provide directly to us, such as when you create an account, 
              contact us, or use our services. This may include:
            </p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, phone number, and company details</li>
              <li><strong>Project Information:</strong> Details about your software requirements, specifications, and preferences</li>
              <li><strong>Communication Data:</strong> Messages, feedback, and correspondence with our team</li>
              <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage patterns</li>
              <li><strong>Payment Information:</strong> Billing details and transaction history (processed securely through third-party providers)</li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>2. How We Use Your Information</SectionTitle>
          <SectionContent>
            <p>We use the collected information for the following purposes:</p>
            <ul>
              <li>Providing and improving our software development services</li>
              <li>Communicating with you about projects, updates, and support</li>
              <li>Processing payments and managing billing</li>
              <li>Customizing and personalizing your experience</li>
              <li>Analyzing usage patterns to enhance our services</li>
              <li>Complying with legal obligations and protecting our rights</li>
              <li>Sending newsletters and marketing communications (with your consent)</li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>3. Information Sharing and Disclosure</SectionTitle>
          <SectionContent>
            <p>
              We do not sell, trade, or otherwise transfer your personal information to third parties, 
              except in the following circumstances:
            </p>
            <ul>
              <li><strong>Service Providers:</strong> Trusted third-party vendors who assist in our operations</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
              <li><strong>Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
              <li><strong>Consent:</strong> When you have given explicit permission for sharing</li>
            </ul>
            <p>
              All third-party service providers are contractually obligated to maintain the confidentiality 
              of your information and use it only for specified purposes.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>4. Data Security</SectionTitle>
          <SectionContent>
            <p>
              We implement industry-standard security measures to protect your information, including:
            </p>
            <ul>
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure cloud storage with access controls</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Employee training on data protection practices</li>
              <li>Multi-factor authentication for sensitive systems</li>
            </ul>
            <p>
              While we strive to protect your information, no method of transmission over the internet 
              is 100% secure. We cannot guarantee absolute security but maintain reasonable safeguards.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>5. Your Rights and Choices</SectionTitle>
          <SectionContent>
            <p>You have the following rights regarding your personal information:</p>
            <ul>
              <li><strong>Access:</strong> Request copies of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data (subject to legal requirements)</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
              <li><strong>Opt-out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Objection:</strong> Object to certain types of data processing</li>
            </ul>
            <p>
              To exercise these rights, please contact us using the information provided at the end of this policy.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>6. Cookies and Tracking Technologies</SectionTitle>
          <SectionContent>
            <p>
              We use cookies and similar technologies to enhance your browsing experience and analyze website usage:
            </p>
            <ul>
              <li><strong>Essential Cookies:</strong> Necessary for basic website functionality</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with consent)</li>
            </ul>
            <p>
              You can control cookie preferences through your browser settings or our cookie consent banner.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>7. International Data Transfers</SectionTitle>
          <SectionContent>
            <p>
              Your information may be transferred to and processed in countries other than your residence. 
              We ensure appropriate safeguards are in place for international transfers, including:
            </p>
            <ul>
              <li>Standard contractual clauses approved by relevant authorities</li>
              <li>Adequacy decisions by regulatory bodies</li>
              <li>Certification schemes and codes of conduct</li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>8. Data Retention</SectionTitle>
          <SectionContent>
            <p>
              We retain your information for as long as necessary to fulfill the purposes outlined in this policy, 
              comply with legal obligations, resolve disputes, and enforce agreements. Specific retention periods include:
            </p>
            <ul>
              <li><strong>Project Data:</strong> Retained for the duration of the project plus 3 years</li>
              <li><strong>Communication Records:</strong> Retained for 5 years for business purposes</li>
              <li><strong>Financial Records:</strong> Retained for 7 years as required by law</li>
              <li><strong>Marketing Data:</strong> Retained until you unsubscribe or object</li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>9. Children's Privacy</SectionTitle>
          <SectionContent>
            <p>
              Our services are not intended for individuals under 18 years of age. We do not knowingly 
              collect personal information from children. If we become aware that we have collected 
              information from a child, we will take steps to delete such information promptly.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>10. Changes to This Policy</SectionTitle>
          <SectionContent>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or applicable laws. 
              We will notify you of significant changes by:
            </p>
            <ul>
              <li>Posting the updated policy on our website</li>
              <li>Sending email notifications to registered users</li>
              <li>Displaying prominent notices on our platform</li>
            </ul>
            <p>
              Your continued use of our services after such modifications constitutes acceptance of the updated policy.
            </p>
          </SectionContent>
        </Section>

        <ContactInfo>
          <h3>Contact Information</h3>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
          </p>
          <p>
            <strong>CodeNiche SoftStudio Pvt Ltd</strong><br />
            Email: <a href="mailto:codenichesoftstudio@gmail.com">codenichesoftstudio@gmail.com</a><br />
            Phone: <a href="tel:+918401901942">+91 8401901942</a><br />
            Address: Ahmedabad, Gujarat, India
          </p>
        </ContactInfo>
      </ContentWrapper>
    </PageContainer>
  );
};

export default PrivacyPolicy;