import React, { useEffect, useRef } from 'react';

const TrustBox = ({ width, height }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current, true);
    }
  }, []);

  return (
    <div
      ref={ref}
      id="trustbox"
      className="trustpilot-widget"
      data-locale="en-GB"
      data-template-id="5419b732fbfb950b10de65e5"
      data-businessunit-id="63ee17ae6c5dc26ae2636c69"
      data-style-height={height}
      data-style-width={width}
      data-theme="dark"
    >
      <a
        href="https://uk.trustpilot.com/review/playcircl.com"
        target="_blank"
        rel="noopener"
      >
        Trustpilot
      </a>
    </div>
  );
};
export default TrustBox;
