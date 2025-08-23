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

  ul, ol {
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

const HighlightBox = styled.div`
  background: rgba(65, 90, 119, 0.2);
  border: 1px solid rgba(65, 90, 119, 0.4);
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-left: 4px solid #778DA9;
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

const TermsOfService = () => {
  return (
    <PageContainer>
      <ContentWrapper>
        <Header>
          <Title>Terms of Service</Title>
          <Subtitle>
            Please read these terms carefully before using CodeNiche SoftStudio's services. 
            By accessing our services, you agree to these terms.
          </Subtitle>
        </Header>

        <LastUpdated>
          <strong>Last Updated:</strong> August 23, 2025
        </LastUpdated>

        <Section>
          <SectionTitle>1. Agreement to Terms</SectionTitle>
          <SectionContent>
            <p>
              By accessing or using CodeNiche SoftStudio Pvt Ltd's ("Company," "we," "us," or "our") services, 
              you ("Client," "you," or "your") agree to be bound by these Terms of Service ("Terms"). 
              If you do not agree to these Terms, please do not use our services.
            </p>
            <HighlightBox>
              <strong>Important:</strong> These terms constitute a legally binding agreement between you and CodeNiche SoftStudio. 
              Please read them carefully and contact us if you have any questions.
            </HighlightBox>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>2. Services Offered</SectionTitle>
          <SectionContent>
            <p>CodeNiche SoftStudio provides the following services:</p>
            <ul>
              <li><strong>Web Development:</strong> Custom website design and development</li>
              <li><strong>Mobile App Development:</strong> iOS and Android application development</li>
              <li><strong>Custom Software Development:</strong> Tailored software solutions</li>
              <li><strong>UI/UX Design:</strong> User interface and user experience design services</li>
              <li><strong>E-commerce Solutions:</strong> Online store development and management</li>
              <li><strong>Digital Marketing:</strong> SEO, social media, and online marketing services</li>
              <li><strong>Consultation Services:</strong> Technology consulting and strategic planning</li>
            </ul>
            <p>
              All services are provided subject to the terms outlined in individual project agreements 
              and these general Terms of Service.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>3. Project Engagement Process</SectionTitle>
          <SectionContent>
            <p>Our project engagement follows these steps:</p>
            <ol>
              <li><strong>Initial Consultation:</strong> Discussion of project requirements and scope</li>
              <li><strong>Proposal and Quote:</strong> Detailed project proposal with timeline and costs</li>
              <li><strong>Contract Signing:</strong> Execution of project-specific agreement</li>
              <li><strong>Development Phase:</strong> Project execution with regular updates</li>
              <li><strong>Testing and Review:</strong> Quality assurance and client review</li>
              <li><strong>Delivery and Support:</strong> Project delivery and ongoing support</li>
            </ol>
            <p>
              Each project will have a specific Statement of Work (SOW) that details the scope, 
              deliverables, timeline, and payment terms.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>4. Payment Terms</SectionTitle>
          <SectionContent>
            <p><strong>Payment Structure:</strong></p>
            <ul>
              <li>Projects typically require a 30-50% advance payment to commence work</li>
              <li>Remaining payments are made according to project milestones</li>
              <li>Final payment is due upon project completion and delivery</li>
              <li>Monthly retainer fees apply for ongoing support and maintenance</li>
            </ul>
            <p><strong>Payment Methods:</strong></p>
            <ul>
              <li>Bank transfer (preferred)</li>
              <li>Online payment gateways</li>
              <li>Digital wallets</li>
              <li>Cheque (for local clients)</li>
            </ul>
            <HighlightBox>
              <strong>Late Payment:</strong> Payments not received within 15 days of the due date may incur 
              a late fee of 2% per month. Work may be suspended for overdue accounts exceeding 30 days.
            </HighlightBox>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>5. Intellectual Property Rights</SectionTitle>
          <SectionContent>
            <p><strong>Client-Owned IP:</strong></p>
            <ul>
              <li>You retain ownership of your business concepts, content, and data</li>
              <li>Upon full payment, you own the custom code developed specifically for your project</li>
              <li>You receive source code and documentation for your project</li>
            </ul>
            <p><strong>Company-Owned IP:</strong></p>
            <ul>
              <li>We retain rights to our proprietary frameworks, tools, and methodologies</li>
              <li>Pre-existing code, libraries, and third-party components remain with their respective owners</li>
              <li>We may use general knowledge and experience gained from projects for future work</li>
            </ul>
            <p><strong>Third-Party Licenses:</strong></p>
            <p>
              Projects may include third-party components subject to their respective licenses. 
              You are responsible for complying with all applicable third-party license terms.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>6. Client Responsibilities</SectionTitle>
          <SectionContent>
            <p>To ensure project success, you agree to:</p>
            <ul>
              <li><strong>Provide Clear Requirements:</strong> Supply detailed project specifications and requirements</li>
              <li><strong>Timely Communication:</strong> Respond to queries and requests within agreed timeframes</li>
              <li><strong>Content and Assets:</strong> Provide necessary content, images, and materials promptly</li>
              <li><strong>Feedback and Approvals:</strong> Review deliverables and provide feedback within specified periods</li>
              <li><strong>Domain and Hosting:</strong> Arrange domain registration and hosting services as needed</li>
              <li><strong>Legal Compliance:</strong> Ensure all provided content complies with applicable laws</li>
              <li><strong>Payment Obligations:</strong> Make payments according to agreed schedules</li>
            </ul>
            <HighlightBox>
              <strong>Project Delays:</strong> Delays caused by late client responses or approvals may result 
              in revised timelines and potential additional costs.
            </HighlightBox>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>7. Warranties and Disclaimers</SectionTitle>
          <SectionContent>
            <p><strong>Our Warranties:</strong></p>
            <ul>
              <li>We warrant that our work will be performed with professional skill and care</li>
              <li>We provide a 30-day warranty for bug fixes on delivered projects</li>
              <li>We warrant that we have the right to provide the services offered</li>
            </ul>
            <p><strong>Disclaimers:</strong></p>
            <ul>
              <li>Services are provided "as is" without warranties beyond those explicitly stated</li>
              <li>We do not guarantee specific business results or performance metrics</li>
              <li>Third-party service integrations are subject to their terms and availability</li>
              <li>We are not responsible for content provided by clients</li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>8. Limitation of Liability</SectionTitle>
          <SectionContent>
            <p>
              To the maximum extent permitted by law, our total liability for any claims arising from 
              these Terms or our services shall not exceed the total amount paid by you for the specific 
              project giving rise to the claim.
            </p>
            <p><strong>We are not liable for:</strong></p>
            <ul>
              <li>Indirect, incidental, or consequential damages</li>
              <li>Loss of profits, revenue, or business opportunities</li>
              <li>Data loss not caused by our gross negligence</li>
              <li>Third-party service failures or interruptions</li>
              <li>Damages resulting from client's failure to follow recommendations</li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>9. Confidentiality</SectionTitle>
          <SectionContent>
            <p>
              Both parties agree to maintain confidentiality of proprietary information shared during 
              the course of the project engagement:
            </p>
            <ul>
              <li>We will not disclose your confidential business information to third parties</li>
              <li>You agree not to disclose our proprietary methods and pricing to competitors</li>
              <li>Confidentiality obligations survive termination of the agreement</li>
              <li>Standard exceptions apply for publicly available information and legal requirements</li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>10. Termination</SectionTitle>
          <SectionContent>
            <p><strong>Termination by Client:</strong></p>
            <ul>
              <li>You may terminate projects with 15 days written notice</li>
              <li>Payment is due for all work completed up to the termination date</li>
              <li>You receive deliverables completed up to the termination point</li>
            </ul>
            <p><strong>Termination by Company:</strong></p>
            <ul>
              <li>We may terminate for non-payment after 30 days past due</li>
              <li>We may terminate for material breach after 15 days notice</li>
              <li>We may terminate for scope changes exceeding 50% of original project</li>
            </ul>
            <p><strong>Effect of Termination:</strong></p>
            <ul>
              <li>All unpaid invoices become immediately due</li>
              <li>Confidentiality obligations remain in effect</li>
              <li>IP rights transfer according to payment status</li>
            </ul>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>11. Dispute Resolution</SectionTitle>
          <SectionContent>
            <p>
              In case of disputes, we encourage resolution through direct communication. 
              If direct resolution fails:
            </p>
            <ol>
              <li><strong>Mediation:</strong> Attempt resolution through professional mediation</li>
              <li><strong>Arbitration:</strong> Binding arbitration under Indian Arbitration laws</li>
              <li><strong>Jurisdiction:</strong> Courts of Ahmedabad, Gujarat shall have exclusive jurisdiction</li>
            </ol>
            <p>
              These Terms are governed by the laws of India, and any disputes will be resolved 
              in accordance with Indian legal procedures.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>12. Force Majeure</SectionTitle>
          <SectionContent>
            <p>
              Neither party shall be liable for delays or failures due to circumstances beyond 
              reasonable control, including but not limited to:
            </p>
            <ul>
              <li>Natural disasters, pandemics, or government actions</li>
              <li>Internet service provider failures or cyber attacks</li>
              <li>Third-party service outages affecting project delivery</li>
              <li>Labor strikes or supply chain disruptions</li>
            </ul>
            <p>
              The affected party must notify the other party promptly and make reasonable efforts 
              to mitigate the impact.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>13. Modifications to Terms</SectionTitle>
          <SectionContent>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be communicated through:
            </p>
            <ul>
              <li>Email notifications to active clients</li>
              <li>Updates posted on our website</li>
              <li>Notice provided with new project agreements</li>
            </ul>
            <p>
              Continued use of our services after notification constitutes acceptance of modified Terms. 
              For ongoing projects, existing terms remain in effect until project completion.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>14. Miscellaneous Provisions</SectionTitle>
          <SectionContent>
            <p><strong>Entire Agreement:</strong></p>
            <p>
              These Terms, together with project-specific agreements, constitute the entire agreement 
              between the parties and supersede all prior understandings.
            </p>
            
            <p><strong>Severability:</strong></p>
            <p>
              If any provision of these Terms is found invalid, the remaining provisions shall continue 
              in full force and effect.
            </p>
            
            <p><strong>Assignment:</strong></p>
            <p>
              You may not assign your rights under these Terms without our written consent. We may 
              assign our rights to affiliated companies or successors.
            </p>
            
            <p><strong>Waiver:</strong></p>
            <p>
              No waiver of any term or condition shall be deemed a waiver of any other term, nor shall 
              any waiver constitute a continuing waiver.
            </p>

            <p><strong>Independent Contractors:</strong></p>
            <p>
              The parties are independent contractors. These Terms do not create a partnership, 
              joint venture, or employment relationship.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>15. Contact and Support</SectionTitle>
          <SectionContent>
            <p>
              For questions about these Terms, project inquiries, or support, please contact us using 
              the information provided below. We strive to respond to all inquiries within 24-48 hours 
              during business days.
            </p>
            
            <p><strong>Business Hours:</strong></p>
            <ul>
              <li>Monday to Friday: 9:00 AM - 6:00 PM (IST)</li>
              <li>Saturday: 10:00 AM - 4:00 PM (IST)</li>
              <li>Sunday: Closed (Emergency support available)</li>
            </ul>

            <p><strong>Support Channels:</strong></p>
            <ul>
              <li>Email support for general inquiries</li>
              <li>Phone support for urgent matters</li>
              <li>Video calls for project discussions</li>
              <li>Project management portal access</li>
            </ul>
          </SectionContent>
        </Section>

        <ContactInfo>
          <h3>Contact Information</h3>
          <p>
            For questions about these Terms of Service or to discuss your project requirements:
          </p>
          <p>
            <strong>CodeNiche SoftStudio Pvt Ltd</strong><br />
            Email: <a href="mailto:codenichesoftstudio@gmail.com">codenichesoftstudio@gmail.com</a><br />
            Phone: <a href="tel:+918401901942">+91 8401901942</a><br />
            Address: Ahmedabad, Gujarat, India<br />
            LinkedIn: <a href="https://www.linkedin.com/company/codeniche-softstudio/" target="_blank" rel="noopener noreferrer">CodeNiche SoftStudio</a>
          </p>
          <p style={{ marginTop: '1.5rem', fontSize: '0.9rem', color: '#9ca3af' }}>
            Thank you for choosing CodeNiche SoftStudio for your software development needs. 
            We look forward to building innovative solutions together.
          </p>
        </ContactInfo>
      </ContentWrapper>
    </PageContainer>
  );
};

export default TermsOfService;