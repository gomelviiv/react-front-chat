export const toFormData = <T>(data: T): FormData => {
  const formData = new FormData();
  Object.keys(data).forEach((key) => {
    if (data[key] instanceof FileList) {
      Array.from(data[key]).forEach((picture: File) =>
        formData.append(`${key}`, picture, picture.name),
      );
    } else {
      formData.append(`${key}`, data[key]);
    }
  });
  return formData;
};
