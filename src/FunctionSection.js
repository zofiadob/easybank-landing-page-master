import React from "react";
import FunctionBox from "./FunctionBox";
import api from "./images/icon-api.svg";
import budgeting from "./images/icon-budgeting.svg";
import online from "./images/icon-online.svg";
import onboarding from "./images/icon-onboarding.svg";
import './css/FunctionSection.css'

export default function FunctionSection() {
  const textes = [
    {
      imgSrc: online,
      headerText: "Online Banking",
      descText:
        "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },

    {
      imgSrc: budgeting,
      headerText: "Simple Budgeting",
      descText:
        "  See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.",
    },

    {
      imgSrc: onboarding,
      headerText: "Fast Onboarding",
      descText:
        "  We don’t do branches. Open your account in minutes online and start taking control of your finances right away.",
    },

    {
      imgSrc: api,
      headerText: "Open API",
      descText:
        "  Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.",
    },
  ];

  return (
    <div className="function-section">
      <div className="header-text">
        <h2>Why choose Easybank?</h2>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>

      <div className="function-grid">
        {textes.map((block) => {
          return (
            <FunctionBox
              imgSrc={block.imgSrc}
              headerText={block.headerText}
              descText={block.descText}
            />
          );
        })}
      </div>
    </div>
  );
}
