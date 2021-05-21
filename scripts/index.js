// set up the guides
const guideList = document.querySelector(".guides");
const loggedOutlinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

const setupUI = (user) => {
  if (user) {
    // toggle ui elements
    loggedInLinks.forEach((item) => (item.style.display = "block"));
    loggedOutlinks.forEach((item) => (item.style.display = "none"));
  } else {
    // toggle ui elements
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutlinks.forEach((item) => (item.style.display = "block"));
  }
};

const setupGuides = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((doc) => {
      const guide = doc.data();
      const li = `
    <li>
    <div class="collapsible-header grey lighten-4">${guide.title}</div>
    <div class="collapsible-body white">${guide.content}</div>
    </li>
    `;
      html += li;
    });

    guideList.innerHTML = html;
  } else {
    guideList.innerHTML = "<h5>Login to view guides</h5>";
  }
};

// setup materialize components
document.addEventListener("DOMContentLoaded", () => {
  let modals = document.querySelectorAll(".modal");
  M.Modal.init(modals);

  let items = document.querySelectorAll(".collapsible");
  M.Collapsible.init(items);
});
