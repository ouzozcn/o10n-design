'use client';

import React from 'react';
import MenuItem from '@/components/MenuItem';
import { Footer } from '@/components/Footer';
import MailIcon from '@mui/icons-material/Mail';
export default function PrivacyPolicy() {
  return (
    <div className="w-[calc(100%-1rem)] md:w-[calc(100%-4rem)] mx-2 md:mx-8 border-collapse border border-stone-900 min-h-screen bg-theme-primary">
      <div className="md:sticky md:top-0 md:z-10 flex flex-col md:flex-row w-auto border-b border-stone-900 bg-theme-primary">
        <MenuItem
          to="/"
          className="flex-1 md:border-b-0 border-r-0 md:border-r border-stone-900 text-center"
          title="Home"
        />
        <MenuItem
          to="/about-me"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900"
          title="About Me"
        />
        <MenuItem
          to="/tech-stack"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900"
          title="Tech Stack"
        />
        <MenuItem
          to="/contact"
          className="flex-1 text-center md:border-b-0 border-r-0 md:border-r border-stone-900"
          title="Contact"
        />
        <MenuItem
          to="/docs"
          className="flex-1 text-center md:border-b-0 border-b-0 border-r-0 md:border-r border-stone-900"
          title="</docs>"
        />
      </div>

      <div className="PageHero flex flex-col p-8 md:p-32 w-full md:h-[400px] border-b border-stone-900 justify-center items-center gap-4">
        <h1 className="text-4xl text-center font-sans text-stone-900 flex items-center justify-center">
          Privacy Policy
        </h1>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          Last updated: June 06, 2025
        </h2>
      </div>

      <div className="PageContent flex flex-col p-8 md:p-16 w-full text-stone-900 ">
        <div className="prose prose-stone max-w-none p-4 md:p-8">
          <p className="mb-4">
            This Privacy Policy describes how o10n.design (&quot;we&quot;, &quot;us&quot;, or
            &quot;our&quot;) collects, uses, and shares your personal information when you visit our
            website.
          </p>
          <ul className="list-disc pl-4 list-inside">
            <li>
              Visit our website at https://o10n.design, or any website of ours that links to this
              Privacy Notice
            </li>
            <li>
              Use Digital Product Design Services. As a product designer and design engineer, I
              provide both individuals and businesses with digital product design services.
            </li>
            <li>Engage with us in other related ways, including any sales, marketing, or events</li>
          </ul>
          <br />
          <h3 className="text-2xl font-semibold mb-2">Questions or concerns?</h3>
          <p className="mb-4">
            Reading this Privacy Notice will help you understand your privacy rights and choices. We
            are responsible for making decisions about how your personal information is processed.
            If you do not agree with our policies and practices, please do not use our Services. If
            you still have any questions or concerns, please contact us at oguz@o10n.design.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Summary of Key Points</h2>
          <p className="mb-4">
            This summary provides key points from our Privacy Notice, but you can find out more
            details about any of these topics by clicking the link following each key point or by
            using our table of contents below to find the section you are looking for.
          </p>
          <h3 className="text-xl font-semibold mb-2">What personal information do we process? </h3>
          <p className="mb-6">
            When you visit, use, or navigate our Services, we may process personal information
            depending on how you interact with us and the Services, the choices you make, and the
            products and features you use. Learn more about personal information you disclose to us.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Do we process any sensitive personal information?
          </h3>
          <p className="mb-6">
            Some of the information may be considered &quot;special&quot; or &quot;sensitive&quot;
            in certain jurisdictions, for example your racial or ethnic origins, sexual orientation,
            and religious beliefs. We do not process sensitive personal information.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Do we collect any information from third parties?
          </h3>
          <p className="mb-6">We do not collect any information from third parties.</p>
          <h3 className="text-xl font-semibold mb-2">How do we process your information?</h3>
          <p className="mb-6">
            We process your information to provide, improve, and administer our Services,
            communicate with you, for security and fraud prevention, and to comply with law. We may
            also process your information for other purposes with your consent. We process your
            information only when we have a valid legal reason to do so. Learn more about how we
            process your information.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            In what situations and with which parties do we share personal information?
          </h3>
          <p className="mb-6">
            We may share information in specific situations and with specific third parties. Learn
            more about when and with whom we share your personal information.
          </p>
          <h3 className="text-xl font-semibold mb-2">How do we keep your information safe?</h3>
          <p className="mb-6">
            We have adequate organizational and technical processes and procedures in place to
            protect your personal information. However, no electronic transmission over the internet
            or information storage technology can be guaranteed to be 100% secure, so we cannot
            promise or guarantee that hackers, cybercriminals, or other unauthorized third parties
            will not be able to defeat our security and improperly collect, access, steal, or modify
            your information. Learn more about how we keep your information safe.
          </p>
          <h3 className="text-xl font-semibold mb-2">What are your rights?</h3>
          <p className="mb-6">
            Depending on where you are located geographically, the applicable privacy law may mean
            you have certain rights regarding your personal information. Learn more about your
            privacy rights.
          </p>
          <h3 className="text-xl font-semibold mb-2">How do you exercise your rights?</h3>
          <p className="mb-6">
            The easiest way to exercise your rights is by visiting
            https://o10n.design/data-protection, or by contacting us. We will consider and act upon
            any request in accordance with applicable data protection laws.
          </p>
        </div>
        <div className="PolicyContainer flex flex-col p-4 md:p-8 w-full  justify-start items-start gap-4">
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h2 className="text-2xl font-semibold mb-2">1. WHAT INFORMATION DO WE COLLECT?</h2>
            <h3 className="text-xl font-semibold mb-2">Personal information you disclose to us</h3>
            <p className="mb-6">
              In Short: We collect personal information that you provide to us.
            </p>
            <p className="mb-6">
              We collect personal information that you voluntarily provide to us when you express an
              interest in obtaining information about us or our products and Services, when you
              participate in activities on the Services, or otherwise when you contact us.
            </p>
            <p className="mb-6">
              <b>Personal Information Provided by You. </b>The personal information that we collect
              depends on the context of your interactions with us and the Services, the choices you
              make, and the products and features you use. The personal information we collect may
              include the following:
            </p>
            <ul className="list-disc pl-4 list-inside">
              <li>email addresses</li>
              <li>names</li>
              <li>mailing addresses</li>
              <li>phone numbers</li>
              <li>social media profile URLs</li>
              <li>contact preferences</li>
              <li>contact or authentication data</li>
              <li>user visit session</li>
              <li>user action analytics</li>
              <li>job titles</li>
            </ul>
            <p className="mb-6 mt-4">
              <b>Sensitive Information. </b>We do not process sensitive information.
            </p>
            <p className="mb-6">
              All personal information that you provide to us must be true, complete, and accurate,
              and you must notify us of any changes to such personal information.
            </p>
          </div>
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h3 className="text-xl font-semibold mb-2">Information automatically collected</h3>
            <p className="mb-6">
              <b>In Short:</b> Some information — such as your Internet Protocol (IP) address and/or
              browser and device characteristics — is collected automatically when you visit our
              Services.
            </p>
            <p className="mb-6">
              We automatically collect certain information when you visit, use, or navigate the
              Services. This information does not reveal your specific identity (like your name or
              contact information) but may include device and usage information, such as your IP
              address, browser and device characteristics, operating system, language preferences,
              referring URLs, device name, country, location, information about how and when you use
              our Services, and other technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our internal analytics
              and reporting purposes.
            </p>
            <p className="mb-6">
              Like many businesses, we also collect information through cookies and similar
              technologies. You can find out more about this in our Cookie Notice:
              https://o10n.design/cookie-policy.
            </p>
            <p className="mb-6">The information we collect includes:</p>
            <ul className="list-disc pl-4 list-inside space-y-2">
              <li>
                <i>Log and Usage Data. </i>Log and usage data is service-related, diagnostic, usage,
                and performance information our servers automatically collect when you access or use
                our Services and which we record in log files. Depending on how you interact with
                us, this log data may include your IP address, device information, browser type, and
                settings and information about your activity in the Services (such as the date/time
                stamps associated with your usage, pages and files viewed, searches, and other
                actions you take such as which features you use), device event information (such as
                system activity, error reports (sometimes called &quot;crash dumps&quot;), and
                hardware settings).
              </li>
              <li>
                <i>Device Data. </i>We collect device data such as information about your computer,
                phone, tablet, or other device you use to access the Services. Depending on the
                device used, this device data may include information such as your IP address (or
                proxy server), device and application identification numbers, location, browser
                type, hardware model, Internet service provider and/or mobile carrier, operating
                system, and system configuration information.
              </li>

              <li>
                <i>Location Data. </i>We collect location data such as information about your
                device&apos;s location, which can be either precise or imprecise. How much
                information we collect depends on the type and settings of the device you use to
                access the Services. For example, we may use GPS and other technologies to collect
                geolocation data that tells us your current location (based on your IP address). You
                can opt out of allowing us to collect this information either by refusing access to
                the information or by disabling your Location setting on your device. However, if
                you choose to opt out, you may not be able to use certain aspects of the
                Services.{' '}
              </li>
              <li>
                <i>User Session. </i>Tracking user session for improving user experience and
                security.{' '}
              </li>
              <li>
                <i>User Action Analytics. </i>We collect information about your actions in the
                Services. For example, we collect data about the actions you take, such as the
                content you view, the features you use, the actions you take, and the features you
                access. We also collect data about your interactions with our Services, such as the
                content you view, the features you use, the actions you take, and the features you
                access.{' '}
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">Google API</h3>
            <p className="mb-6">
              Our use of information received from Google APIs will adhere to Google API Services
              User Data Policy, including the Limited Use requirements.
            </p>
          </div>
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h2 className="text-2xl font-semibold mb-2">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
            <p className="mb-6">
              <b>In Short:</b> We process your information to provide, improve, and administer our
              Services, communicate with you, for security and fraud prevention, and to comply with
              law. We may also process your information for other purposes with your consent.
            </p>
            <p className="mb-6">
              We process your personal information for a variety of reasons, depending on how you
              interact with our Services, including:
            </p>
            <ul className="list-disc pl-4 list-inside space-y-2">
              <li>
                To deliver and facilitate delivery of services to the user. We may process your
                information to provide you with the requested service.
              </li>
              <li>
                To respond to user inquiries/offer support to users. We may process your information
                to respond to your inquiries and solve any potential issues you might have with the
                requested service.
              </li>
              <li>
                To send administrative information to you. We may process your information to send
                you details about our products and services, changes to our terms and policies, and
                other similar information.
              </li>
              <li>
                To enable user-to-user communications. We may process your information if you choose
                to use any of our offerings that allow for communication with another user.
              </li>
              <li>
                To request feedback. We may process your information when necessary to request
                feedback and to contact you about your use of our Services.
              </li>
              <li>
                To send you marketing and promotional communications. We may process the personal
                information you send to us for our marketing purposes, if this is in accordance with
                your marketing preferences. You can opt out of our marketing emails at any time.
              </li>
              <li>
                To deliver targeted advertising to you. We may process your information to develop
                and display personalized content and advertising tailored to your interests,
                location, and more.{' '}
              </li>
              <li>
                To protect our Services. We may process your information as part of our efforts to
                keep our Services safe and secure, including fraud monitoring and prevention
              </li>
              <li>
                To evaluate and improve our Services, products, marketing, and your experience. We
                may process your information when we believe it is necessary to identify usage
                trends, determine the effectiveness of our promotional campaigns, and to evaluate
                and improve our Services, products, marketing, and your experience.
              </li>
              <li>
                To identify usage trends. We may process information about how you use our Services
                to better understand how they are being used so we can improve them.
              </li>
              <li>
                To determine the effectiveness of our marketing and promotional campaigns. We may
                process your information to better understand how to provide marketing and
                promotional campaigns that are most relevant to you.
              </li>
            </ul>
          </div>
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h3 className="text-2xl font-semibold mb-2">
              3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </h3>
            <p className="mb-6">
              <b>In Short:</b> We may share information in specific situations described in this
              section and/or with the following third parties.
            </p>
            <p className="mb-6">
              Vendors, Consultants, and Other Third-Party Service Providers. We may share your data
              with third-party vendors, service providers, contractors, or agents ("third parties")
              who perform services for us or on our behalf and require access to such information to
              do that work. We have contracts in place with our third parties, which are designed to
              help safeguard your personal information. This means that they cannot do anything with
              your personal information unless we have instructed them to do it. They will also not
              share your personal information with any organization apart from us. They also commit
              to protect the data they hold on our behalf and to retain it for the period we
              instruct.
            </p>
            <p className="mb-6">
              The third parties we may share personal information with are as follows:
            </p>
            <ul className="list-disc pl-4 list-inside space-y-2">
              <li>Advertising, Direct Marketing, and Lead Generation: Google AdSense</li>
              <li>AI Service Providers: OpenAI</li>
              <li>Content Optimization: Google Site Search and Google Fonts</li>
              <li>Web and Mobile Analytics: Hotjar</li>
              <li>Website Hosting: Vercel</li>
              <li>
                Website Performance Monitoring: Vercel Analytics, Google Analytics, and Datadog
              </li>
              <li>Website Testing:Google Website Optimizer </li>
            </ul>
            <p className="mb-6 mt-4">
              We also may need to share your personal information in the following situations:
            </p>
            <ul className="list-disc pl-4 list-inside space-y-2">
              <li>
                Business Transfers. We may share or transfer your information in connection with, or
                during negotiations of, any merger, sale of company assets, financing, or
                acquisition of all or a portion of our business by another company.
              </li>
            </ul>
          </div>
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h3 className="text-2xl font-semibold mb-2">
              4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </h3>
            <p className="mb-6">
              <b>In Short:</b> We may use cookies and other tracking technologies to collect and
              store your information.
            </p>
            <p className="mb-6">
              We may use cookies and similar tracking technologies (like web beacons and pixels) to
              gather information when you interact with our Services. Some online tracking
              technologies help us maintain the security of our Services, prevent crashes, fix bugs,
              save your preferences, and assist with basic site functions.
            </p>
            <p className="mb-6">
              We also permit third parties and service providers to use online tracking technologies
              on our Services for analytics and advertising, including to help manage and display
              advertisements, to tailor advertisements to your interests, or to send abandoned
              shopping cart reminders (depending on your communication preferences). The third
              parties and service providers use their technology to provide advertising about
              products and services tailored to your interests which may appear either on our
              Services or on other websites.
            </p>
            <h3 className="text-lg font-semibold mb-2">Google Analytics</h3>
            <p className="mb-6">
              We may share your information with Google Analytics to track and analyze the use of
              the Services. The Google Analytics Advertising Features that we may use include:
              Remarketing with Google Analytics and Google Analytics Demographics and Interests
              Reporting. To opt out of being tracked by Google Analytics across the Services, visit
              https://tools.google.com/dlpage/gaoptout. You can opt out of Google Analytics
              Advertising Features through Ads Settings and Ad Settings for mobile apps. Other opt
              out means include http://optout.networkadvertising.org/ and
              http://www.networkadvertising.org/mobile-choice. For more information on the privacy
              practices of Google, please visit the Google Privacy & Terms page.
            </p>
          </div>
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h3 className="text-2xl font-semibold mb-2">
              5. HOW LONG DO WE KEEP YOUR INFORMATION?
            </h3>
            <p className="mb-6">
              <b>In Short:</b> We keep your information for as long as necessary to fulfill the
              purposes outlined in this Privacy Notice unless otherwise required by law.
            </p>
            <p className="mb-6">
              We will only keep your personal information for as long as it is necessary for the
              purposes set out in this Privacy Notice, unless a longer retention period is required
              or permitted by law (such as tax, accounting, or other legal requirements). No purpose
              in this notice will require us keeping your personal information for longer than 90
              days.
            </p>
            <p className="mb-6">
              When we have no ongoing legitimate business need to process your personal information,
              we will either delete or anonymize such information, or, if this is not possible (for
              example, because your personal information has been stored in backup archives), then
              we will securely store your personal information and isolate it from any further
              processing until deletion is possible.
            </p>
          </div>
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h3 className="text-2xl font-semibold mb-2">
              6. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </h3>
            <p className="mb-6">
              <b>In Short:</b> We aim to protect your personal information through a system of
              organizational and technical security measures.
            </p>
            <p className="mb-6">
              We have implemented appropriate and reasonable technical and organizational security
              measures designed to protect the security of any personal information we process.
              However, despite our safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology can be guaranteed to
              be 100% secure, so we cannot promise or guarantee that hackers, cybercriminals, or
              other unauthorized third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information. Although we will do our
              best to protect your personal information, transmission of personal information to and
              from our Services is at your own risk. You should only access the Services within a
              secure environment.
            </p>
          </div>
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h3 className="text-2xl font-semibold mb-2">
              7. DO WE COLLECT INFORMATION FROM MINORS?
            </h3>
            <p className="mb-6">
              <b>In Short:</b> We do not knowingly collect data from or market to children under 18
              years of age.
            </p>
            <p className="mb-6">
              We do not knowingly collect, solicit data from, or market to children under 18 years
              of age, nor do we knowingly sell such personal information. By using the Services, you
              represent that you are at least 18 or that you are the parent or guardian of such a
              minor and consent to such minor dependent&apos;s use of the Services. If we learn that
              personal information from users less than 18 years of age has been collected, we will
              deactivate the account and take reasonable measures to promptly delete such data from
              our records. If you become aware of any data we have collected from children under age
              18, please contact us at ogu@o10n.design
            </p>
          </div>
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h3 className="text-2xl font-semibold mb-2">8. WHAT ARE YOUR PRIVACY RIGHTS?</h3>
            <p className="mb-6">
              <b>In Short:</b> You may review, change, or terminate your account at any time,
              depending on your country, province, or state of residence.
            </p>
            <p className="mb-6">
              <b>Withdrawing your consent:</b> If we are relying on your consent to process your
              personal information, which may be express and/or implied consent depending on the
              applicable law, you have the right to withdraw your consent at any time. You can
              withdraw your consent at any time by contacting us by using the contact details
              provided in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below.
            </p>
            <p className="mb-6">
              However, please note that this will not affect the lawfulness of the processing before
              its withdrawal nor, when applicable law allows, will it affect the processing of your
              personal information conducted in reliance on lawful processing grounds other than
              consent.
            </p>
            <p className="mb-6">
              <b>Opting out of marketing and promotional communications:</b> You can unsubscribe
              from our marketing and promotional communications at any time by clicking on the
              unsubscribe link in the emails that we send, or by contacting us using the details
              provided in the section &quot;HOW CAN YOU CONTACT US ABOUT THIS NOTICE?&quot; below.
              You will then be removed from the marketing lists. However, we may still communicate
              with you — for example, to send you service-related messages that are necessary for
              the administration and use of your account, to respond to service requests, or for
              other non-marketing purposes.
            </p>
            <p className="mb-6">
              <b>Cookies and similar technologies:</b> Most Web browsers are set to accept cookies
              by default. If you prefer, you can usually choose to set your browser to remove
              cookies and to reject cookies. If you choose to remove cookies or reject cookies, this
              could affect certain features or services of our Services. For further information,
              please see our Cookie Notice: https://o10n.design/cookie-policy.
            </p>
            <p className="mb-6">
              If you have questions or comments about your privacy rights, you may email us at
              oguz@o10n.design.
            </p>
          </div>
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h3 className="text-2xl font-semibold mb-2">9. CONTROLS FOR DO-NOT-TRACK FEATURES</h3>
            <p className="mb-6">
              Most web browsers and some mobile operating systems and mobile applications include a
              Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy
              preference not to have data about your online browsing activities monitored and
              collected. At this stage, no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not currently respond to
              DNT browser signals or any other mechanism that automatically communicates your choice
              not to be tracked online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a revised version of
              this Privacy Notice.
            </p>
          </div>
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h3 className="text-2xl font-semibold mb-2">10. DO WE MAKE UPDATES TO THIS NOTICE?</h3>
            <p className="mb-6">
              <b>In Short:</b> Yes, we will update this notice as necessary to stay compliant with
              relevant laws.
            </p>
            <p className="mb-6">
              We may update this privacy notice from time to time. The updated version will be
              indicated by an updated &quot;Revised&quot; date and the updated version will be
              effective as soon as it is accessible. If we make material changes to this privacy
              notice, we may notify you either by prominently posting a notice of such changes or by
              contacting you directly.
            </p>
            <p className="mb-6">
              We may also provide additional notice of changes in a more prominent place on our
              Services, such as on the home page of our Services or directly on the applicable
              Services.
            </p>
          </div>
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h3 className="text-2xl font-semibold mb-2">
              11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </h3>
            <p className="mb-6">
              If you have questions or comments about this notice, you may email us at
              oguz@o10n.design or contact us by post at:
            </p>
            <div className="flex flex-col w-full  mb-4 justify-start items-center gap-1">
              <a
                href="mailto:oguz@o10n.design"
                target="_blank"
                rel="noopener noreferrer"
                className="ContactBox flex flex-col p-8 md:p-16 w-1/2 h-auto items-center justify-center font-sans bg-orange-100 hover:bg-orange-200 border rounded-lg border-stone-900 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <MailIcon className="w-6 h-6 mb-2" />
                </div>
                <p className="text-lg text-center text-stone-900">Send me an email</p>
              </a>
            </div>
          </div>
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h3 className="text-2xl font-semibold mb-2">
              12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
            </h3>
            <p className="mb-6">
              You have the right to request access to the personal information we collect from you,
              details about how we have processed it, correct inaccuracies, or delete your personal
              information. You may also have the right to withdraw your consent to our processing of
              your personal information. These rights may be limited in some circumstances by
              applicable law. To request to review, update, or delete your personal information,
              please visit: https://o10n.design/data-protection.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
