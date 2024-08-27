import Swal from "sweetalert2";

// Basit bir alert göstermek için fonksiyon
export const showAlert = (title, icon = "info", text = "") => {
  return Swal.fire({
    title,
    text,
    icon,
  });
};

// Onay penceresi göstermek için fonksiyon
export const showConfirm = (
  title,
  icon = "info",
  text = "",
  confirmText = "Yes"
) => {
  return Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonText: confirmText,
  });
};

// Toast bildirimleri göstermek için fonksiyon
export const showToast = (title, icon = "info") => {
  const Toast = Swal.mixin({
    toast: true,
    position: "bottom-end",
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

//Loading (Yükleniyor) Bildirimi
export const showLoading = (title = "Loading...", text = "") => {
  return Swal.fire({
    title,
    text,
    icon: "info",
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};

//Success (Başarı) Bildirimi
export const showSuccess = (title, text = "") => {
  return Swal.fire({
    title,
    text,
    icon: "success",
    confirmButtonText: "OK",
  });
};

//Hata mesajlarını ve uyarıları göstermek için.
export const showError = (title, text = "") => {
  return Swal.fire({
    title,
    text,
    icon: "error",
    confirmButtonText: "OK",
  });
};

//Uzun süren işlemler için ilerleme çubuğu içeren bildirimler
export const showProgress = (title, text, progress = 0) => {
  return Swal.fire({
    title,
    text,
    html: `<progress value="${progress}" max="100"></progress>`,
    allowOutsideClick: false,
    allowEscapeKey: false,
    didOpen: () => {
      Swal.showLoading();
    },
  });
};
