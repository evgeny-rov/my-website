interface formData {
  name: string;
  email: string;
  message: string;
}

export const encodeForm = (data: any) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

export const submitForm = async (
  state: formData,
  onSuccess: Function,
  onError: Function
) => {
  try {
    const request = await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeForm({ 'form-name': 'contact', state }),
    });
    request.status === 400 && onSuccess();
  } catch (e) {
    onError();
  }
};
