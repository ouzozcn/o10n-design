import React from 'react';
import MenuItem from '@/components/MenuItem';
import { Footer } from '@/components/Footer';
import MailIcon from '@mui/icons-material/Mail';
export default function CookiePolicy() {
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
          Cookie Policy
        </h1>
        <h2 className="text-xl text-center font-sans text-stone-900 flex items-center justify-center">
          Last updated: June 06, 2025
        </h2>
      </div>
      <div className="PageContent flex flex-col p-8 md:p-16 w-full text-stone-900 ">
        <p className="mb-4">
          This Cookie Policy explains how Oğuzhan Özcan | Product Designer ("Company," "we," "us,"
          and "our") uses cookies and similar technologies to recognize you when you visit our
          website at https://o10n.design ("Website"). It explains what these technologies are and
          why we use them, as well as your rights to control our use of them.
        </p>
        <p className="mb-4">
          In some cases we may use cookies to collect personal information, or that becomes personal
          information if we combine it with other information.
        </p>
        <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
          <h3 className="text-2xl font-semibold mb-2">What are cookies?</h3>
          <p className="mb-4">
            Cookies are small data files that are placed on your computer or mobile device when you
            visit a website. Cookies are widely used by website owners in order to make their
            websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p className="mb-4">
            Cookies set by the website owner (in this case, Oğuzhan Özcan | Product Designer) are
            called "first-party cookies." Cookies set by parties other than the website owner are
            called "third-party cookies." Third-party cookies enable third-party features or
            functionality to be provided on or through the website (e.g., advertising, interactive
            content, and analytics). The parties that set these third-party cookies can recognize
            your computer both when it visits the website in question and also when it visits
            certain other websites.
          </p>
        </div>
        <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
          <h3 className="text-2xl font-semibold mb-2">Why do we use cookies?</h3>
          <p className="mb-4">
            We use first- and third-party cookies for several reasons. Some cookies are required for
            technical reasons in order for our Website to operate, and we refer to these as
            "essential" or "strictly necessary" cookies. Other cookies also enable us to track and
            target the interests of our users to enhance the experience on our Online Properties.
            Third parties serve cookies through our Website for advertising, analytics, and other
            purposes. This is described in more detail below.
          </p>
        </div>
        <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
          <h3 className="text-2xl font-semibold mb-2">How can I control cookies?</h3>
          <p className="mb-4">
            You have the right to decide whether to accept or reject cookies. You can exercise your
            cookie rights by setting your preferences in the Cookie Consent Manager. The Cookie
            Consent Manager allows you to select which categories of cookies you accept or reject.
            Essential cookies cannot be rejected as they are strictly necessary to provide you with
            services.
          </p>
          <p className="mb-4">
            The Cookie Consent Manager can be found in the notification banner and on our Website.
            If you choose to reject cookies, you may still use our Website though your access to
            some functionality and areas of our Website may be restricted. You may also set or amend
            your web browser controls to accept or refuse cookies.
          </p>
          <p className="mb-4">
            The specific types of first- and third-party cookies served through our Website and the
            purposes they perform are described in the table below (please note that the specific
            cookies served may vary depending on the specific Online Properties you visit).
          </p>
        </div>
        <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
          <h3 className="text-2xl font-semibold mb-2">Analytics and customization cookies</h3>
          <p className="mb-4">
            These cookies collect information that is used either in aggregate form to help us
            understand how our Website is being used or how effective our marketing campaigns are,
            or to help us customize our Website for you.
          </p>
        </div>
        <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
          <h3 className="text-2xl font-semibold mb-2">How can I control cookies on my browser?</h3>
          <p className="mb-4">
            As the means by which you can refuse cookies through your web browser controls vary from
            browser to browser, you should visit your browser's help menu for more information. The
            following is information about how to manage cookies on the most popular browsers such
            as Chrome, Firefox, Safari, and Internet Explorer.
          </p>
          <p className="mb-4">
            In addition, most advertising networks offer you a way to opt out of targeted
            advertising.
          </p>
        </div>
        <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
          <h3 className="text-2xl font-semibold mb-2">
            What about other tracking technologies, like web beacons?
          </h3>
          <p className="mb-4">
            Cookies are not the only way to recognize or track visitors to a website. We may use
            other, similar technologies from time to time, like web beacons (sometimes called
            "tracking pixels" or "clear gifs"). These are tiny graphics files that contain a unique
            identifier that enables us to recognize when someone has visited our Website or opened
            an email including them. This allows us, for example, to monitor the traffic patterns of
            users from one page within a website to another, to deliver or communicate with cookies,
            to understand whether you have come to the website from an online advertisement
            displayed on a third-party website, to improve site performance, and to measure the
            success of email marketing campaigns. In many instances, these technologies are reliant
            on cookies to function properly, and so declining cookies will impair their functioning.
          </p>
        </div>
        <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
          <h3 className="text-2xl font-semibold mb-2">
            Do you use Flash cookies or Local Shared Objects?
          </h3>
          <p className="mb-4">
            Websites may also use so-called "Flash Cookies" (also known as Local Shared Objects or
            "LSOs") to, among other things, collect and store information about your use of our
            services, fraud prevention, and for other site operations.
          </p>
          <p className="mb-4">
            If you do not want Flash Cookies stored on your computer, you can adjust the settings of
            your Flash player to block Flash Cookies storage using the tools contained in the
            Website Storage Settings Panel. You can also control Flash Cookies by going to the
            Global Storage Settings Panel and following the instructions (which may include
            instructions that explain, for example, how to delete existing Flash Cookies (referred
            to "information" on the Macromedia site), how to prevent Flash LSOs from being placed on
            your computer without your being asked, and (for Flash Player 8 and later) how to block
            Flash Cookies that are not being delivered by the operator of the page you are on at the
            time).
          </p>
          <p className="mb-4">
            Please note that setting the Flash Player to restrict or limit acceptance of Flash
            Cookies may reduce or impede the functionality of some Flash applications, including,
            potentially, Flash applications used in connection with our services or online content.
          </p>
        </div>
        <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
          <h3 className="text-2xl font-semibold mb-2">Do you serve targeted advertising?</h3>
          <p className="mb-4">
            Third parties may serve cookies on your computer or mobile device to serve advertising
            through our Website. These companies may use information about your visits to this and
            other websites in order to provide relevant advertisements about goods and services that
            you may be interested in. They may also employ technology that is used to measure the
            effectiveness of advertisements. They can accomplish this by using cookies or web
            beacons to collect information about your visits to this and other sites in order to
            provide relevant advertisements about goods and services of potential interest to you.
            The information collected through this process does not enable us or them to identify
            your name, contact details, or other details that directly identify you unless you
            choose to provide these.
          </p>
        </div>
        <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
          <h3 className="text-2xl font-semibold mb-2">
            How often will you update this Cookie Policy?
          </h3>
          <p className="mb-4">
            We may update this Cookie Policy from time to time in order to reflect, for example,
            changes to the cookies we use or for other operational, legal, or regulatory reasons.
            Please therefore revisit this Cookie Policy regularly to stay informed about our use of
            cookies and related technologies.
          </p>
          <p className="mb-4">
            The date at the top of this Cookie Policy indicates when it was last updated.
          </p>
        </div>
        <div className="PolicyItem flex flex-col w-full  justify-start items-start gap-1">
          <h3 className="text-2xl font-semibold mb-2">
            11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
          </h3>
          <p className="mb-6">
            If you have questions or comments about this notice, you may email us at
            oguz@o10n.design.
          </p>
          <div className="flex flex-col w-full  justify-start items-center gap-1">
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
      </div>
      <Footer />
    </div>
  );
}
