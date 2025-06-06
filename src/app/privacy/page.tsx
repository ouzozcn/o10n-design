"use client";

import React from "react";
import MenuItem from "@/components/MenuItem";
import { Footer } from "@/components/Footer";

export default function Privacy() {
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
        <div className="prose prose-stone max-w-none">
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
          We may share information in specific situations and with
specific third parties. Learn more about when and with whom we share
your personal information.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
