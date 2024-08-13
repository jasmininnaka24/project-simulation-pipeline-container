const callBack = () => {
  personName.textContent = user.personNamee;
  let isServing = true;

  let order = (time, work) => {
    return new Promise((resolve, reject) => {
      if (isServing) {
        setTimeout(() => {
          resolve(work());
        }, time);
      } else {
        reject(console.log("Not any more available 😥"));
      }
    });
  };

  order(1000, () => (parg1.textContent = `Making a progress 👷🏻‍♀️`))
    .then(() => {
      return order(
        2000,
        () => (parg2.textContent = `Production has started 🕵🏻‍♀️`)
      );
    })

    .then(() => {
      return order(
        2000,
        () => (parg3.textContent = `The assorted flavor was added.🎨`)
      );
    })

    .then(() => {
      return order(2000, () => {
        parg4.textContent = `Water and ice are prepared 🧊`;
      });
    })

    .then(() => {
      return order(
        2000,
        () => (parg5.textContent = `The machine has started ⚙`)
      );
    })

    .then(() => {
      return order(2000, () => {
        parg6.textContent = `${user.icecreamyy.toUpperCase()} was selected 🤸🏻‍♀️`;
      });
    })

    .then(() => {
      return order(2000, () => (parg7.textContent = `Served! 🧏🏻‍♀️`));
    })

    .then(() => {
      return order(1000, () => {
        user.icecreamyy === "CUP"
          ? cupHolder.classList.remove("hidden")
          : cupHolder.classList.add("hidden");
        user.icecreamyy === "CONE"
          ? coneHolder.classList.remove("hidden")
          : coneHolder.classList.add("hidden");
        user.icecreamyy === "STICK"
          ? stickHolder.classList.remove("hidden")
          : stickHolder.classList.add("hidden");
      });
    })

    .catch(() => {
      console.log("We are already closed 😥");
    })

    .finally(() => {
      startAgainBtn.classList.remove("hidden");
    });
};
