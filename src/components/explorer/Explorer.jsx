import React, { useState } from "react";
import explorer from "../../utils/data/folderData";
import Folder from "../folder/Folder";

const Explorer = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  return (
    <div>
      <Folder explorer={explorerData} />
    </div>
  );
};

export default Explorer;
