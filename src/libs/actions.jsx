"use server";

export async function HandleUpload(formdata) {
  const itemID = queryData.get("itemID");
  if (itemID === "1") {
    return "Added to cart";
  } else {
    return "Couldn't add to cart: the item is sold out.";
  }
}

export async function submitForm(formData) {
  console.log("123");
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const response = { ok: 200, details: formData };

    console.log(response);
    if (response.ok) {
      return true;
    } else {
      console.error("Failed to upload:", await response.text());
      return false;
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return false;
  }
}
