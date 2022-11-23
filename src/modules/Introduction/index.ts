import React from "react";

export default React.lazy(
  () => import(/* weebpackChunkName: 'Introduction' */ "./pages")
);
