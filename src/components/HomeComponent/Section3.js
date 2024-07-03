import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PricingPlanOneMonthSection from "../PricingComponent.js/PricingPlanOneMonth";
import PricingPlanHalfYearSection from "../PricingComponent.js/PricingPlanHalfYear";
import PricingPlanYearlySection from "../PricingComponent.js/PricingPlanYearly";

const Section3 = () => {
  return (
    <div>
      {/* Service Start  */}
      <div className="section taskplus-service-section-06 padding-section section-padding ">
        <div className="container">
          {/* Service Wrap Start  */}
          <div className="section taskplus-pricing-section">
            <div className="container">
              {/* Pricing Wrap Start  */}
              <div className="pricing-wrap">
                <div className="section-title text-center">
                  <h3 className="sub-title">Price / Plans </h3>
                </div>
                <Tabs>
                  <TabList className="pricingchange-tab">
                    <Tab id="pricingtabone" className="singletab">Monthly</Tab>
                    <Tab id="pricingtabtwo" className="singletab">6 Monthy</Tab>
                    <Tab id="pricingtabthree" className="singletab">Annually</Tab>
                  </TabList>
                  <TabPanel>
                    <PricingPlanOneMonthSection />
                  </TabPanel>
                  <TabPanel>
                    <PricingPlanHalfYearSection />
                  </TabPanel>
                  <TabPanel>
                    <PricingPlanYearlySection />
                  </TabPanel>
                </Tabs>
              </div>
              {/* Pricing Wrap End  */}
            </div>
          </div>
        </div>
        {/* Service Wrap End  */}
      </div>
    </div>
  );
};

export default Section3;
