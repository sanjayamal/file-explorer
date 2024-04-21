export const useHandleTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder,
        items: [],
      });
      return tree;
    }
    let latestNodes = tree.items.map((node) => {
      return insertNode(node, folderId, item, isFolder);
    });
    return { ...tree, items: latestNodes };
  }
  return { insertNode };
};
