import React from "react";

const Section4 = () => {
  return (
    <div>
      {/* Contact Map Start  */}
      <div className="section contact-map-section">
        <div className="contact-map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13603.670494287891!2d74.33823165450373!3d31.526422376253738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904fa04aceaed%3A0x1d64146a56cd2c7c!2sGulberg%202%2C%20Lahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1716901597812!5m2!1sen!2s"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="address"
          ></iframe>
        </div>
      </div>
      {/* Contact Map End  */}
    </div>
  );
};

export default Section4;
