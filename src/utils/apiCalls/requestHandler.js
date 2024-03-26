
export const sendContactRequest = async (contactData) =>
  fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactData),
    headers: {
      ContentType: "application/json",
      Accept: "application/json",
    },
  });
