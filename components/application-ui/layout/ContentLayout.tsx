import React from 'react';

function ContentLayout({ children }: { children: any }) {
  return <div className="container p-4 mx-auto sm:p-16">{children}</div>;
}

export default ContentLayout;
