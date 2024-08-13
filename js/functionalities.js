const changeBodyStyle = () => {
  bodyy.style.backgroundColor = "#e4f2f5";
  homeText.style.color = "#3a5961";
};

const openSecondBox = () => {
  firstBox.style.display = "none";
  boxes2.classList.remove("hidden");
  homeText.classList.add("hidden");
  personName.textContent = user.personNamee;
  callBack();
};

const getInfo = (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const nameInput = formData.get("personname").trim().toUpperCase();
  const iceCreamInput = formData.get("icecreamInp").trim().toUpperCase();
  user.personNamee = nameInput;
  user.icecreamyy = iceCreamInput;

  if (!nameInput || !iceCreamInput) {
    configError1.classList.remove("hidden");
    configError2.classList.remove("hidden");
    configError3.classList.add("hidden");
  } else {
    if (
      iceCreamInput === "CONE" ||
      iceCreamInput === "CUP" ||
      iceCreamInput === "STICK"
    ) {
      openSecondBox();
    } else {
      configError3.classList.remove("hidden");
      configError3.textContent = "Please select a valid option";
    }
  }

  if (nameInput) {
    configError1.classList.add("hidden");
  }
  if (iceCreamInput) {
    configError2.classList.add("hidden");
  }
};
