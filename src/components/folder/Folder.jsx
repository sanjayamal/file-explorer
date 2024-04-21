import React, { useState } from "react";
import "./Folder.css";

const Folder = ({ explorer, handleInertNode }) => {
  const [expand, setExpand] = useState(true);

  const [inputDetail, setInputDetail] = useState({
    isVisible: false,
    isFolder: false,
  });

  const { isFolder, name, items, id } = explorer;

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setInputDetail({
      isVisible: true,
      isFolder,
    });
  };

  const addNewFolderOrFile = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInertNode(id, e.target.value, inputDetail.isFolder);
      setInputDetail({ ...inputDetail, isVisible: false });
    }
  };

  if (!isFolder) {
    return (
      <div>
        <div className="main-section">
          <span>📃{name}</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="main-section folder" onClick={() => setExpand(!expand)}>
        <span>📁{name}</span>
        <div style={{ display: "flex", gap: "6px" }}>
          <i
            className="pi pi-folder-plus"
            onClick={(e) => handleNewFolder(e, true)}
          />
          <i
            className="pi pi-file-plus"
            onClick={(e) => handleNewFolder(e, false)}
          />
        </div>
      </div>
      <div
        style={{ display: expand ? "block" : "none" }}
        className="child-padding"
      >
        {inputDetail.isVisible && (
          <div className="inputContainer">
            <span>{inputDetail.isFolder ? "📁" : "📃"}</span>
            <input
              autoFocus
              type="text"
              className="inputContainer-input"
              onBlur={() => {
                setInputDetail({ ...inputDetail, isVisible: false });
              }}
              onKeyDown={addNewFolderOrFile}
            />
          </div>
        )}
        {items.map((item) => {
          return (
            <Folder
              handleInertNode={handleInertNode}
              explorer={item}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Folder;
