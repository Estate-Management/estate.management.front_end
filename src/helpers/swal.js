import Swal from "sweetalert2";
import ReactDOMServer from "react-dom/server";

export const swAlert = (title, icon = "info", text = "") => {
  return Swal.fire({
    title,
    text,
    icon,
  });
};
export const swError = (errors, type) => {
  if (typeof errors === "string") {
    Swal.fire({
      text: errors,
      icon: type,
      confirmButtonText: "Tamam",
    });
  } else if (typeof errors === "object") {
    const errorMessages = Object.values(errors).join("\n");
    Swal.fire({
      text: errorMessages,
      icon: type,
      confirmButtonText: "Tamam",
    });
  }
};

export const swConfirm = (
  title,
  icon = "info",
  text = "",
  confirmButtonText = "Yes"
) => {
  return Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText,
  });
};

export const swToast = (title, icon = "info") => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });
  Toast.fire({
    icon,
    title,
  });
};

export const showPrivacyPolicy = async (component) => {
  const privacyPolicyHTML = ReactDOMServer.renderToStaticMarkup(component);

  const result = await Swal.fire({
    title: "Privacy Policy",
    html: privacyPolicyHTML,
    icon: "info",
    showCancelButton: true,
    confirmButtonText: "I Agree",
    cancelButtonText: "Cancel",
    width: "600px", // Genişliği artırmak için
    customClass: {
      popup: "privacy-policy-popup", // Özel sınıf ekleyerek CSS ile biçimlendirme
    },
  });

  if (result.isConfirmed) {
    console.log("User agreed to the Privacy Policy");
  } else {
    console.log("User did not agree to the Privacy Policy");
  }
};
