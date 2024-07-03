import React from "react";

function PrivacyPolicyPageComponent() {
  return (
    <div className="section policy-padding">
      <div className="container">
        <p>
          <strong>Effective Date:</strong> May 28, 2024
        </p>
        <p>
          This Privacy Policy describes how TaskPlus ("we," "us," or "our")
          collects, uses, and discloses your information when you use our
          employee tracking system (the "Service"). It also explains the choices
          you have about your information and how you can contact us about your
          privacy rights.
        </p>

        <h2>Information We Collect</h2>
        <p>
          We collect several types of information for various purposes to
          improve our Service to you.
        </p>

        <h3>Personal Data:</h3>
        <ul className="policy-list-items">
          <li>Name</li>
          <li>Job Title</li>
          <li>Department</li>
          <li>Company Email Address (used for account creation and access)</li>
        </ul>

        <h3>Usage Data:</h3>
        <ul className="policy-list-items">
          <li>Time spent on tasks</li>
          <li>Websites and applications accessed</li>
          <li>
            Productivity metrics (may include keystrokes, mouse clicks, etc.,
            depending on employer configuration)
          </li>
        </ul>

        <h3>Device Data:</h3>
        <ul className="policy-list-items">
          <li>IP address</li>
          <li>Device type and operating system</li>
          <li>Browser type</li>
        </ul>

        <h2>How We Use Your Information</h2>
        <p>
          We use the information we collect for various purposes, including:
        </p>
        <ul className="policy-list-items">
          <li>To provide and maintain the Service</li>
          <li>To monitor and analyze the use of the Service</li>
          <li>To improve and update the Service</li>
          <li>
            To send you updates, promotional communications, and other
            information related to the Service (with your consent)
          </li>
          <li>To comply with legal obligations</li>
        </ul>

        <h2>Sharing Your Information</h2>
        <p>
          We may share your information with third-party vendors who provide
          services to support the Service, such as data storage or security.
          These vendors are obligated to protect your information and use it
          only to provide the services we have requested.
        </p>
        <p>
          We may also disclose your information if required by law or to protect
          the rights, property, or safety of ourselves or others.
        </p>

        <h2>Your Choices</h2>
        <p>You have several choices regarding your information:</p>
        <ul className="policy-list-items">
          <li>
            You can access and update your personal data through your account
            settings.
          </li>
          <li>
            You can opt out of receiving marketing communications from us by
            following the unsubscribe instructions in those communications.
          </li>
          <li>You can request to delete your account by contacting us.</li>
        </ul>

        <h2>Data Security</h2>
        <p>
          We take reasonable steps to protect your information from unauthorized
          access, disclosure, alteration, or destruction. However, no internet
          transmission or electronic storage method is 100% secure. Therefore,
          we cannot guarantee absolute security.
        </p>

        <h2>International Transfers</h2>
        <p>
          Your information may be transferred to and processed in countries
          other than your own. These countries may have different data
          protection laws than your own. By using the Service, you consent to
          the transfer of your information to these countries.
        </p>

        <h2>Children's Privacy</h2>
        <p>
          Our Service is not directed to children under 18. We do not knowingly
          collect personal information from children under 18. If you are a
          parent or guardian and you believe your child has provided us with
          personal information, please contact us. We will take steps to remove
          the information from our servers.
        </p>

        <h2>Changes to This Privacy Policy</h2>
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicyPageComponent;
