export const insertRow = (row: any) => {
  console.log('Insert row', row);
  return Math.floor(Math.random() * 1000);
};

export const deleteRow = (rowId: number) => {
  console.log('Delete row id', rowId);
};

export const updateRow = (rowId: number, row: any) => {
  console.log(`Update row ${rowId}`, row);
  return rowId;
};
