import React, { useEffect } from 'react';

function Title() {
  useEffect(() => {
    document.title = 'My App'; // Set the title of the webpage
  }, []); // Only run once, when the component mounts

  return (
    <div>
      {/* Your app content */}
    </div>
  );
}

export default Title;