export const pendingResult = (data) => {
  return {
    loading: true,
    error: false,
    data: data,
  };
};

export const rejectedResult = (data) => {
  return {
    error: true,
    loading: false,
    data: data,
  };
};

export const successResult = (data) => {
  return {
    data: data,
    loading: false,
    error: false,
  };
};