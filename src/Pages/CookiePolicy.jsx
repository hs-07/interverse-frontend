import React from "react";

const CookiePolicy = () => {
  return (
    <div className="h-full min-h-screen bg-black flex flex-col gap-8 p-4 md:p-16 landing">
      <h2 className="text-white text-[24px] font-[600] ">Cookie policy</h2>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">
          Interverse Solutions Limited Cookies Policy
        </h2>
        <span className="text-[#545454]">
          This Cookies Policy explains how Interverse Solutions Limited
          (“Interverse Solutions,” “we,” “our,” or “us”) uses cookies and
          similar technologies to recognize you when you visit our
          website,Interversesolutions.com (“Website”). It explains what these
          technologies are and why we use them, as well as your rights to
          control our use of them.
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">1. What are cookies?</h2>
        <span className="text-[#545454]">
          Cookies are small data files that are placed on your computer or
          mobile device when you visit a website. Cookies are widely used by
          website owners to make their websites work more efficiently, as well
          as to provide reporting information.
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">2. How and why we use cookies</h2>
        <span className="text-[#545454]">
          We use cookies to improve your experience on our Website, including:
          <ul className="list-disc px-6">
            <li>Enabling certain functions of the Website</li>
            <li>Providing analytics</li>
            <li>Storing your preferences</li>
          </ul>
          We use both session and persistent cookies on the Website and we use
          different types of cookies to run the Website:
          <ul className="list-disc px-6">
            <li>
              Essential cookies. We may use essential cookies to authenticate
              users and prevent fraudulent use of user accounts.
            </li>
            <li>
              Analytics cookies. We may use analytics cookies to track
              information on how the Website is used so that we can make
              improvements. We may also use analytics cookies to test new
              advertisements, pages, features, or new functionality of the
              Website to see how our users react to them.
            </li>
          </ul>
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">
          3. What are your choices regarding cookies
        </h2>
        <span className="text-[#545454]">
          If you prefer to avoid the use of cookies on the Website, you must
          disable the use of cookies in your browser and then delete the cookies
          saved in your browser associated with this Website. You can use this
          option to prevent the use of cookies at any time.
          <br />
          <br />
          For more information about how to manage and delete cookies, visit
          aboutcookies.org. For more information about how we use, store, and
          keep your personal data secure, see our Privacy Policy.
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">4. Changes to the Cookies Policy</h2>
        <span className="text-[#545454]">
          We may update this Cookies Policy from time to time to reflect changes
          to the cookies we use or for other operational, legal, or regulatory
          reasons. Please, therefore, re-visit this Cookies Policy regularly to
          stay informed about our use of cookies and related technologies.
        </span>
      </div>
      <div className="flex gap-4 flex-col">
        <h2 className="text-white text-xl">5. Contact Us</h2>
        <span className="text-[#545454]">
          If you have any questions about our use of cookies or other
          technologies, please contact us at support@interversesolutions.com or
          by postal mail at the address provided in our Privacy Policy.
        </span>
      </div>
    </div>
  );
};

export default CookiePolicy;
