import React, { useState } from "react";
import explorer from "../../utils/data/folderData";
import Folder from "../folder/Folder";
import { useHandleTree } from "../../hooks/useHandleTree";

const Explorer = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useHandleTree();

  const handleInertNode = (folderId, item, isFolder) => {
    const newTree = insertNode(explorer, folderId, item, isFolder);
    setExplorerData(newTree);
  };

  return (
    <div>
      <Folder handleInertNode={handleInertNode} explorer={explorerData} />
    </div>
  );
};

export default Explorer;
