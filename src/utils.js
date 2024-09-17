export const removeNamedElemant = (arr, eleName) => {
  for (let i = 0; i < arr.length; i++) {
    const thisEle = arr[i];
    if (thisEle.getName() === eleName) {
      arr.splice(i, 1);
      break;
    }
  }
}