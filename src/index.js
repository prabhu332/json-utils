export const updateObject = (oldObject, latestObject) => {
  return {
    ...oldObject,
    ...latestObject
  }
}
