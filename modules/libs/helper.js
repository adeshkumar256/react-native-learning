export const errorMessage = (response) => {
  try {
    return (
      response?.response?.data?.message ||
      response?.data?.response?.message ||
      response?.data?.message ||
      response?.message ||
      response?.statusText ||
      'Something went wrong'
    );
  } catch (e) {
    return e?.message || 'Something went wrong';
  }
};