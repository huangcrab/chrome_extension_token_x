const saveUrlToLocal = () => {
  const url = document.querySelector("input").value;
  localStorage.setItem("url", url);
};

const extractToken = () => {
  const url = localStorage.getItem("url");
  //const url = "";

  if (url) {
    $.ajax({
      method: "GET",
      url,
      xhrFields: {
        withCredentials: true
      },
      success: function(data) {
        document.querySelector("textarea").value = data.access_token;
      },
      error: function() {
        document.querySelector("textarea").value = "Error";
      }
    });
  } else {
    document.querySelector("textarea").value = "No URL Set";
  }
};

const populateUrl = () => {
  const url = localStorage.getItem("url");
  if (url) {
    document.querySelector("input").value = url;
  }
};
populateUrl();
extractToken();

document.querySelector(".copy").addEventListener("click", () => {
  document.querySelector("textarea").select();
  document.execCommand("copy");
});
document.querySelector(".refresh").addEventListener("click", extractToken);
document.querySelector(".button").addEventListener("click", saveUrlToLocal);
