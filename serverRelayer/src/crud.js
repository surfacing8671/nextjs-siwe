import fs from "fs";
import arbDB from '../data/arbBalance.json' assert { type: 'json' };
import avaxDb from '../data/avaxBalance.json' assert { type: 'json' };
import ethDb from '../data/ethBalance.json' assert { type: 'json' };
import maticDb from '../data/maticBalance.json' assert { type: 'json' };



export const addAvaxBalance = (filePath, id, nativeBalance, timestamp) => {
  const data = readFile(filePath);
  data.push({ id, nativeBalance, timestamp });
  writeFile(filePath, data);
};

export const updateAvaxBalance = (
  filePath,
  id,
  newNativeBalance,
  newTimestamp
) => {
  const data = readFile(filePath);
  const balanceIndex = data.findIndex((item) => item.id === id);

  if (balanceIndex !== -1) {
    data[balanceIndex].nativeBalance = newNativeBalance;
    data[balanceIndex].timestamp = newTimestamp;
    writeFile(filePath, data);
  }
};

export const getAvaxBalanceById = (filePath, id) => {
  const data = readFile(filePath);
  return data.find((item) => item.id === id);
};

export const deleteAvaxBalanceById = (filePath, id) => {
  const data = readFile(filePath);
  const balanceIndex = data.findIndex((item) => item.id === id);

  if (balanceIndex !== -1) {
    data.splice(balanceIndex, 1);
    writeFile(filePath, data);
  }
};

export const addEthBalance = (filePath, id, nativeBalance, timestamp) => {
  const data = readFile(filePath);
  data.push({ id, nativeBalance, timestamp });
  writeFile(filePath, data);
};

export const updateEthBalance = (
  filePath,
  id,
  newNativeBalance,
  newTimestamp
) => {
  const data = readFile(filePath);
  const balanceIndex = data.findIndex((item) => item.id === id);

  if (balanceIndex !== -1) {
    data[balanceIndex].nativeBalance = newNativeBalance;
    data[balanceIndex].timestamp = newTimestamp;
    writeFile(filePath, data);
  }
};

export const getEthBalanceById = (filePath, id) => {
  const data = readFile(filePath);
  return data.find((item) => item.id === id);
};

export const deleteEthBalanceById = (filePath, id) => {
  const data = readFile(filePath);
  const balanceIndex = data.findIndex((item) => item.id === id);

  if (balanceIndex !== -1) {
    data.splice(balanceIndex, 1);
    writeFile(filePath, data);
  }
};

export const addArbBalance = (filePath, id, nativeBalance, timestamp) => {
  const data = readFile(filePath);
  data.push({ id, nativeBalance, timestamp });
  writeFile(filePath, data);
};

export const updateArbBalance = (
  filePath,
  id,
  newNativeBalance,
  newTimestamp
) => {
  const data = readFile(filePath);
  const balanceIndex = data.findIndex((item) => item.id === id);

  if (balanceIndex !== -1) {
    data[balanceIndex].nativeBalance = newNativeBalance;
    data[balanceIndex].timestamp = newTimestamp;
    writeFile(filePath, data);
  }
};

export const getArbBalanceById = (filePath, id) => {
  const data = readFile(filePath);
  return data.find((item) => item.id === id);
};

export const deleteArbBalanceById = (filePath, id) => {
  const data = readFile(filePath);
  const balanceIndex = data.findIndex((item) => item.id === id);

  if (balanceIndex !== -1) {
    data.splice(balanceIndex, 1);
    writeFile(filePath, data);
  }
};
const filePath0 = "../data/maticBalance.json";
export const addMaticBalance = (filePath, id, nativeBalance, timestamp) => {
  const data = readFile(filePath);
  data.push({ id, nativeBalance, timestamp });
  writeFile(filePath, data);
};

export const updateMaticBalance = (
  filePath,
  id,
  newNativeBalance,
  newTimestamp
) => {
  const data = getData(filePath);
  const balanceIndex = data.findIndex((item) => item.id === id);

  if (balanceIndex !== -1) {
    data[balanceIndex].nativeBalance = newNativeBalance;
    data[balanceIndex].timestamp = newTimestamp;
    writeFile(filePath, data);
  }
};

export const getMaticBalanceById = (filePath, id) => {
  const data = getData(filePath);
  return data.find((item) => item.id === id);
};

export const deleteMaticBalanceById = (filePath, id) => {
  const data = getData(filePath);
  const balanceIndex = data.findIndex((item) => item.id === id);

  if (balanceIndex !== -1) {
    data.splice(balanceIndex, 1);
    writeFile(filePath, data);
  }
};


const readFile = (filePath) => {
    const data = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(data);
  };
  
  const writeFile = (filePath, data) => {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
  };
