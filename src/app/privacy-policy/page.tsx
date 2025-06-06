"use client";

import React from "react";
import MenuItem from "@/components/MenuItem";
import { Footer } from "@/components/Footer";

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
            This Privacy Policy describes how o10n.design (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;) collects, uses, and shares your
            personal information when you visit our website.
          </p>
          <ul className="list-disc pl-4 list-inside">
            <li>
              Visit our website at https://o10n.design, or any website of ours
              that links to this Privacy Notice
            </li>
            <li>
              Use Digital Product Design Services. As a product designer and
              design engineer, I provide both individuals and businesses with
              digital product design services.
            </li>
            <li>
              Engage with us in other related ways, including any sales,
              marketing, or events
            </li>
          </ul>
          <br />
          <h3 className="text-2xl font-semibold mb-2">
            Questions or concerns?
          </h3>
          <p className="mb-4">
            Reading this Privacy Notice will help you understand your privacy
            rights and choices. We are responsible for making decisions about
            how your personal information is processed. If you do not agree with
            our policies and practices, please do not use our Services. If you
            still have any questions or concerns, please contact us at
            oguz@o10n.design.
          </p>
          <h2 className="text-2xl font-semibold mb-2">Summary of Key Points</h2>
          <p className="mb-4">
            This summary provides key points from our Privacy Notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our table of contents
            below to find the section you are looking for.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            What personal information do we process?{" "}
          </h3>
          <p className="mb-6">
            When you visit, use, or navigate our Services, we may process
            personal information depending on how you interact with us and the
            Services, the choices you make, and the products and features you
            use. Learn more about personal information you disclose to us.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Do we process any sensitive personal information?
          </h3>
          <p className="mb-6">
            Some of the information may be considered &quot;special&quot; or
            &quot;sensitive&quot; in certain jurisdictions, for example your
            racial or ethnic origins, sexual orientation, and religious beliefs.
            We do not process sensitive personal information.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            Do we collect any information from third parties?
          </h3>
          <p className="mb-6">
            We do not collect any information from third parties.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            How do we process your information?
          </h3>
          <p className="mb-6">
            We process your information to provide, improve, and administer our
            Services, communicate with you, for security and fraud prevention,
            and to comply with law. We may also process your information for
            other purposes with your consent. We process your information only
            when we have a valid legal reason to do so. Learn more about how we
            process your information.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            In what situations and with which parties do we share personal
            information?
          </h3>
          <p className="mb-6">
            We may share information in specific situations and with specific
            third parties. Learn more about when and with whom we share your
            personal information.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            How do we keep your information safe?
          </h3>
          <p className="mb-6">
            We have adequate organizational and technical processes and
            procedures in place to protect your personal information. However,
            no electronic transmission over the internet or information storage
            technology can be guaranteed to be 100% secure, so we cannot promise
            or guarantee that hackers, cybercriminals, or other unauthorized
            third parties will not be able to defeat our security and improperly
            collect, access, steal, or modify your information. Learn more about
            how we keep your information safe.
          </p>
          <h3 className="text-xl font-semibold mb-2">What are your rights?</h3>
          <p className="mb-6">
            Depending on where you are located geographically, the applicable
            privacy law may mean you have certain rights regarding your personal
            information. Learn more about your privacy rights.
          </p>
          <h3 className="text-xl font-semibold mb-2">
            How do you exercise your rights?
          </h3>
          <p className="mb-6">
            The easiest way to exercise your rights is by visiting
            https://o10n.design/data-protection, or by contacting us. We will
            consider and act upon any request in accordance with applicable data
            protection laws.
          </p>
        </div>
        <div className="PolicyContainer flex flex-col p-4 md:p-8 w-full  justify-start items-start gap-4">
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h2 className="text-2xl font-semibold mb-2">
              1. WHAT INFORMATION DO WE COLLECT?
            </h2>
            <h3 className="text-xl font-semibold mb-2">
              Personal information you disclose to us
            </h3>
            <p className="mb-6">
              In Short: We collect personal information that you provide to us.
            </p>
            <p className="mb-6">
              We collect personal information that you voluntarily provide to us
              when you express an interest in obtaining information about us or
              our products and Services, when you participate in activities on
              the Services, or otherwise when you contact us.
            </p>
            <p className="mb-6">
              <b>Personal Information Provided by You. </b>The personal
              information that we collect depends on the context of your
              interactions with us and the Services, the choices you make, and
              the products and features you use. The personal information we
              collect may include the following:
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
              <b>Sensitive Information. </b>We do not process sensitive
              information.
            </p>
            <p className="mb-6">
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </p>
          </div>
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h3 className="text-xl font-semibold mb-2">
              Information automatically collected
            </h3>
            <p className="mb-6">
              <b>In Short:</b> Some information — such as your Internet Protocol
              (IP) address and/or browser and device characteristics — is
              collected automatically when you visit our Services.
            </p>
            <p className="mb-6">
              We automatically collect certain information when you visit, use,
              or navigate the Services. This information does not reveal your
              specific identity (like your name or contact information) but may
              include device and usage information, such as your IP address,
              browser and device characteristics, operating system, language
              preferences, referring URLs, device name, country, location,
              information about how and when you use our Services, and other
              technical information. This information is primarily needed to
              maintain the security and operation of our Services, and for our
              internal analytics and reporting purposes.
            </p>
            <p className="mb-6">
              Like many businesses, we also collect information through cookies
              and similar technologies. You can find out more about this in our
              Cookie Notice: https://o10n.design/cookie-policy.
            </p>
            <p className="mb-6">The information we collect includes:</p>
            <ul className="list-disc pl-4 list-inside space-y-2">
              <li>
                <i>Log and Usage Data. </i>Log and usage data is
                service-related, diagnostic, usage, and performance information
                our servers automatically collect when you access or use our
                Services and which we record in log files. Depending on how you
                interact with us, this log data may include your IP address,
                device information, browser type, and settings and information
                about your activity in the Services (such as the date/time
                stamps associated with your usage, pages and files viewed,
                searches, and other actions you take such as which features you
                use), device event information (such as system activity, error
                reports (sometimes called &quot;crash dumps&quot;), and hardware
                settings).
              </li>
              <li>
                <i>Device Data. </i>We collect device data such as information
                about your computer, phone, tablet, or other device you use to
                access the Services. Depending on the device used, this device
                data may include information such as your IP address (or proxy
                server), device and application identification numbers,
                location, browser type, hardware model, Internet service
                provider and/or mobile carrier, operating system, and system
                configuration information.
              </li>

              <li>
                <i>Location Data. </i>We collect location data such as
                information about your device&apos;s location, which can be
                either precise or imprecise. How much information we collect
                depends on the type and settings of the device you use to access
                the Services. For example, we may use GPS and other technologies
                to collect geolocation data that tells us your current location
                (based on your IP address). You can opt out of allowing us to
                collect this information either by refusing access to the
                information or by disabling your Location setting on your
                device. However, if you choose to opt out, you may not be able
                to use certain aspects of the Services.{" "}
              </li>
              <li>
                <i>User Session. </i>Tracking user session for improving user
                experience and security.{" "}
              </li>
              <li>
                <i>User Action Analytics. </i>We collect information about your
                actions in the Services. For example, we collect data about the
                actions you take, such as the content you view, the features you
                use, the actions you take, and the features you access. We also
                collect data about your interactions with our Services, such as
                the content you view, the features you use, the actions you
                take, and the features you access.{" "}
              </li>
            </ul>
            <h3 className="text-xl font-semibold mt-4">
          Google API
            </h3>
            <p className="mb-6">
            Our use of information received from Google APIs will adhere to Google
            API Services User Data Policy, including the Limited Use requirements.
            </p>
          </div>
          <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
            <h2 className="text-2xl font-semibold mb-2">
            2. HOW DO WE PROCESS YOUR INFORMATION?
            </h2>
            <p className="mb-6">
              <b>In Short:</b> We process your information to provide, improve, and administer
our Services, communicate with you, for security and fraud prevention, and
to comply with law. We may also process your information for other
purposes with your consent.
            </p>
            </div>
          
        </div>
      </div>

      <Footer />
    </div>
  );
}
