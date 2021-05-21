// get data
// db.collection("guides").get().then((snapshot) => {
//   setupGuides(snapshot.docs)
// })

// listen for auth status changes
auth.onAuthStateChanged((user) => {
  if (user) {
    db.collection("guides")
      .get()
      .then((snapshot) => {
        setupGuides(snapshot.docs);
        setupUI(user);
      });
  } else {
    setupUI();
    setupGuides([]);
  }
});

// signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;

  // console.log(email, password)

  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then((credential) => {
    // console.log(credential)
    const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

// logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (event) => {
  event.preventDefault();
  auth.signOut().then(() => {});
});

// login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  // login the user
  auth.signInWithEmailAndPassword(email, password).then((credential) => {
    // console.log(credential.user);
    // close login modal and reset the form
    const modal = document.querySelector("#modal-login");
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});
