export const dataAfterSearch = (userData, searchValue) => {
  const userSearch = searchValue.toLowerCase();
  if (searchValue.length === 0) {
    return userData;
  } else {
    let retData = [];
    userData.forEach((user) => {
      if (
        user.employee_name.toLowerCase().includes(userSearch) ||
        user.designation.toLowerCase().includes(userSearch)
      ) {
        retData.push(user);
      }
    });
    return retData;
  }
};
