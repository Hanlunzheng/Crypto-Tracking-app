import React, { useState } from "react";
import "./Prices.css";

const Prices = () => {
  // State to track whether prices are monthly or annually
  const [isAnnually, setIsAnnually] = useState(false);

  const [isWarning, setIsWarning] = useState(false);

  // Pricing data
  const plans = [
    { name: "Analyst", monthlyPrice: 129, yearlyPrice: 103 },
    { name: "Lite", monthlyPrice: 399.2, yearlyPrice: 399 },
    { name: "Pro", monthlyPrice: 999, yearlyPrice: 799 },
    { name: "Enterprise", monthlyPrice: "?", yearlyPrice: "?" },
  ];

  // Toggle pricing
  const togglePricing = (annually) => {
    setIsAnnually(annually);
  };

  return (
    <div className="price-page">
      <div className="price-page-wrapper">
        <div className="title">
          <h1>CoinGecko Crypto Data API Plans</h1>
          <p>
            From hobbyist to large scale enterprise projects, we’ve got you
            covered with crypto data sourced
          </p>
          <p>by the world’s largest independent crypto data aggregator.</p>
          <div className="button-selection">
            <button
              onClick={() => togglePricing(false)}
              className={!isAnnually ? "active" : ""}
            >
              Monthly
            </button>
            <button
              onClick={() => togglePricing(true)}
              className={isAnnually ? "active" : ""}
            >
              Annually
            </button>
          </div>
        </div>
        <div className="plan-sections">
          {plans.map((plan, index) => (
            <div className="plan-box" key={index}>
              <div className="plan-info">
                <div className="plan-title">
                  <h3>{plan.name}</h3>
                  <p>
                    {plan.name === "Analyst" &&
                      "For mission-critical analysis work"}
                    {plan.name === "Lite" && "Best for growing projects"}
                    {plan.name === "Pro" && "Scale your projects like a pro"}
                    {plan.name === "Enterprise" && "Enterprise-grade service"}
                  </p>
                </div>
                <div className="plan-cost">
                  <h1>
                    {isAnnually
                      ? `$${plan.yearlyPrice} /mo`
                      : `$${plan.monthlyPrice} /mo`}
                  </h1>
                  {plan.name !== "Enterprise" && (
                    <p>
                      {isAnnually
                        ? `Billed yearly $${plan.yearlyPrice}/mo`
                        : `Billed monthly $${plan.monthlyPrice}/mo`}
                    </p>
                  )}
                  <button>
                    <h3>Subscribe Now</h3>
                  </button>
                </div>
                <div className="plan-detail">
                  {plan.name === "Analyst" && (
                    <>
                      <p>500k call credits/mo</p>
                      <p>500 rate limit/min</p>
                      <p>60+ market data endpoints</p>
                      <p>Exclusive data endpoints</p>
                      <p>10 years historical data</p>
                      <p>Priority email support</p>
                    </>
                  )}
                  {plan.name === "Lite" && (
                    <>
                      <p>2m call credits/mo</p>
                      <p>500 rate limit/min</p>
                      <p>60+ market data endpoints</p>
                      <p>Exclusive data endpoints</p>
                      <p>10 years historical data</p>
                      <p>Priority email support</p>
                    </>
                  )}
                  {plan.name === "Pro" && (
                    <>
                      <p>5m call credits/mo</p>
                      <p>1,000 rate limit/min</p>
                      <p>60+ market data endpoints</p>
                      <p>Exclusive data endpoints</p>
                      <p>10 years historical data</p>
                      <p>Priority email support</p>
                    </>
                  )}
                  {plan.name === "Enterprise" && (
                    <>
                      <p>Custom call credits</p>
                      <p>Custom rate limit/min</p>
                      <p>70 market data endpoints</p>
                      <p>Exclusive data endpoints</p>
                      <p>Enterprise-plan only endpoints</p>
                      <p>99.9% uptime SLA</p>
                      <p>Priority email & slack chat support</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ctypto-table">
        <div className="table-layout">
          <h2>Compare Plans</h2>
          <p>Demo (Beta)</p>
          <p>Analyst</p>
          <p>Lite</p>
          <p>Pro</p>
          <p>Enterpise</p>
        </div>
        <div className="table-layout">
          <p>Call credits /mo</p>
          <p>10k</p>
          <p>500k</p>
          <p>2M</p>
          <p>5M</p>

          <p>Custom</p>
        </div>
        <div className="table-layout">
          <p>Rate limit /min</p>
          <p>30</p>
          <p>500</p>
          <p>500</p>
          <p>1000</p>

          <p>Custom</p>
        </div>
        <div className="table-layout">
          <p>Market data endpoints</p>
          <p>30</p>
          <p>60+</p>
          <p>60+</p>
          <p>60+</p>

          <p>70</p>
        </div>
        <div className="table-layout">
          <p>Token Data Access</p>
          <p>10000+</p>
          <p>2M+</p>
          <p>2M+</p>
          <p>2M+</p>

          <p>2M+</p>
        </div>
        <div className="table-layout">
          <p>Data Freshness</p>
          <p>from 60 sec</p>
          <p>from 30 sec</p>
          <p>from 30 sec</p>
          <p>from 30 sec</p>

          <p>from 30 sec</p>
        </div>
        <div className="table-layout">
          <p>Coin Historical Data(Daily)</p>
          <p>1 year</p>
          <p>from 2013</p>
          <p>from 2013</p>
          <p>from 2013</p>

          <p>from 2013</p>
        </div>
        <div className="table-layout">
          <p>Coin Historical Data(Hourly)</p>
          <p>1 year</p>
          <p>from 2018</p>
          <p>from 2018</p>
          <p>from 2018</p>

          <p>from 2018</p>
        </div>
        <div className="table-layout">
          <p>Coin Historical Data(5 Minutely)</p>
          <p>1 day</p>
          <p>1 day</p>
          <p>1 day</p>
          <p>1 day</p>

          <p>1 day</p>
        </div>
        <div className="table-layout">
          <p>Api Keys</p>
          <p>1</p>
          <p>10</p>
          <p>10</p>
          <p>10</p>

          <p>10</p>
        </div>
      </div>
      <div className="asked-question">
        <h1>Freqently Asked Questions</h1>
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={() => setIsWarning(true)}>Warning</button>
          <button onClick={() => setIsWarning(false)}>General</button>
        </div>
        {isWarning ? (
          <div className="warning-message">
            <div className="message-title">
              <h3 style={{ flex: "1" }}>Status Codes</h3>
              <h3 style={{ flex: "1", textAlign: "center" }}>Descriptions</h3>
            </div>
            <div className="message-ans">
              <p style={{ flex: "1" }}>400 (Bad Request)</p>
              <p style={{ flex: "3" }}>
                This is due to an invalid request and the server could not
                process the user's request.
              </p>
            </div>
            <div className="message-ans">
              <p style={{ flex: "1" }}>401 (Unauthorised)</p>
              <p style={{ flex: "3" }}>
                (Unauthorised) This is due to the lack of valid authentication
                credentials for the requested resource by the user.
              </p>
            </div>
            <div className="message-ans">
              <p style={{ flex: "1" }}>429 (Too many requests)</p>
              <p style={{ flex: "3" }}>
                This is likely indicating that the rate limit has reached. The
                user should reduce the number of calls made, or consider scaling
                their service plan that has much higher rate limits and call
                credits. To upgrade your plans, kindly refer to the “Plans” tab.
              </p>
            </div>
            <div className="message-ans">
              <p style={{ flex: "1" }}>500 (Internal Server Error)</p>
              <p style={{ flex: "3" }}>
                This is a generic error response indicating that the server has
                encountered an unexpected issue that prevented it from
                fulfilling the request.
              </p>
            </div>
            <div className="message-ans">
              <p style={{ flex: "1" }}>503 (Service Unavailable)</p>
              <p style={{ flex: "3" }}>
                The service is currently unavailable. Please check the API
                status and updates on https://status.coingecko.com/
              </p>
            </div>
          </div>
        ) : (
          <div className="ans-section">
            <div className="ans-to-question">
              <h3 style={{ flex: "2" }}> Is there a call consumption alert?</h3>
              <p style={{ flex: "3" }}>
                Yes! Just head over to the developer’s dashboard and click on
                the Call Consumption Alerts tab to enable it. Note that users
                will receive an email once the threshold value of 50% and 90% is
                hit respectively.
              </p>
            </div>
            <hr />
            <div className="ans-to-question">
              <h3 style={{ flex: "2" }}>
                I have reached 100% of my monthly calls consumption. What should
                I do?
              </h3>
              <p style={{ flex: "3" }}>
                It is your responsibility to review and monitor the plan's usage
                limitation by keeping track of your monthly quota usage to
                prevent overages. You can do this by tracking the number of API
                calls via the Developer Dashboard for up-to-date usage
                statistics. Once you have reached 100% monthly calls
                consumption, we will be adding more requests to your account.
                You will be billed overages as an additional charge and added to
                the following month's invoice. Feel free to reach out to our
                team to discuss the options available in upgrading to a higher
                tier plan to accommodate your increasing usage.
              </p>
            </div>
            <hr />
            <div className="ans-to-question">
              <h3 style={{ flex: "2" }}>Can I turn off overage billing?</h3>
              <p style={{ flex: "3" }}>
                Yes. Overage billing is enabled by default. However, users with
                a paid subscription plan have the option to disable overage
                billing through the developer dashboard.
              </p>
            </div>
            <hr />
            <div className="ans-to-question">
              <h3 style={{ flex: "2" }}>
                How can I differentiate between the status codes I am receiving
                and what do they mean?
              </h3>
              <p style={{ flex: "3" }}>
                The server responds to a user’s request by issuing status codes
                when the request is made to the server. Kindly refer to the
                table below to further understand the status codes when
                indicating the success or failure of an API call.
              </p>
            </div>
          </div>
        )}
        {/* <div className="ans-section">
          <div className="ans-to-question">
            <h3 style={{ flex: "2" }}> Is there a call consumption alert?</h3>
            <p style={{ flex: "3" }}>
              Yes! Just head over to the developer’s dashboard and click on the
              Call Consumption Alerts tab to enable it. Note that users will
              receive an email once the threshold value of 50% and 90% is hit
              respectively.
            </p>
          </div>
          <hr />
          <div className="ans-to-question">
            <h3 style={{ flex: "2" }}>
              I have reached 100% of my monthly calls consumption. What should I
              do?
            </h3>
            <p style={{ flex: "3" }}>
              It is your responsibility to review and monitor the plan's usage
              limitation by keeping track of your monthly quota usage to prevent
              overages. You can do this by tracking the number of API calls via
              the Developer Dashboard for up-to-date usage statistics. Once you
              have reached 100% monthly calls consumption, we will be adding
              more requests to your account. You will be billed overages as an
              additional charge and added to the following month's invoice. Feel
              free to reach out to our team to discuss the options available in
              upgrading to a higher tier plan to accommodate your increasing
              usage.
            </p>
          </div>
          <hr />
          <div className="ans-to-question">
            <h3 style={{ flex: "2" }}>Can I turn off overage billing?</h3>
            <p style={{ flex: "3" }}>
              Yes. Overage billing is enabled by default. However, users with a
              paid subscription plan have the option to disable overage billing
              through the developer dashboard.
            </p>
          </div>
          <hr />
          <div className="ans-to-question">
            <h3 style={{ flex: "2" }}>
              How can I differentiate between the status codes I am receiving
              and what do they mean?
            </h3>
            <p style={{ flex: "3" }}>
              The server responds to a user’s request by issuing status codes
              when the request is made to the server. Kindly refer to the table
              below to further understand the status codes when indicating the
              success or failure of an API call.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Prices;
