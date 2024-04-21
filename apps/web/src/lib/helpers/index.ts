export const processError = (error: any) => {
  return error?.response ? error.response?.data?.message : error?.message;
};
