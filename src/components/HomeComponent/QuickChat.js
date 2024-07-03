import React from "react";
import whatsapp from "../../Assets/images/whatsapp.png";

function QuickChat() {
  return (
    <div className="whatsappchat">
      <button className="whatsappchat-icon">
        <a href="https://wa.me/923116080670" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="whatsapp" />
        </a>
      </button>
    </div>
  );
}

export default QuickChat;
