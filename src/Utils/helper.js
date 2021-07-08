export const convertArrayIntoObject = (arr) => {
  const copyArr = [...arr];
  return copyArr.reduce((prevValue, curValue) => {
    const key = curValue.key;
    const value = curValue.value;
    if (key === "") return prevValue;
    return { ...prevValue, [key]: value };
  }, {});
};

export function updateEndTime(res) {
  res.customData = res.customData || {};
  res.customData.time = new Date().getTime() - res.config.customData.startTime;
  return res;
}
