import React, { useState } from 'react';

const ReadMore = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <div>
      {isTruncated ? (
        <>
          {text.slice(0, maxLength)}
          <button onClick={toggleTruncate}>Read more</button>
        </>
      ) : (
        <>
          {text}
          <button onClick={toggleTruncate}>Read less</button>
        </>
      )}
    </div>
  );
};

export default ReadMore;
