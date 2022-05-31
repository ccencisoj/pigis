const recoverChilds = ()=> {
  try {
    const childs = JSON.parse(localStorage.getItem("childs"));

    if(childs === null) {
      localStorage.setItem("childs", "[]");
      return [];
    }
      
    return childs;

  }catch(error) {
    return [];
  }
}

const saveChild = (child)=> {
  try {
    const childs = recoverChilds();

    if(childs.some((c)=> c.id === child.id))
      return;

    childs.push(child);
    localStorage.setItem("childs", JSON.stringify(childs));
  }catch(error) {
    //ignore error
  }
}

const deleteChild = (child)=> {
  try {
    let childs = recoverChilds();
    childs = childs.filter((c)=> c.id !== child.id);
    localStorage.setItem("childs", JSON.stringify(childs));
  }catch(error) {
    //ignore error
  }
}

const clearChilds = ()=> {
  try {
    localStorage.setItem("childs", "[]");
  }catch(error) {
    //ignore error
  }
}

export { recoverChilds, saveChild, deleteChild, clearChilds };