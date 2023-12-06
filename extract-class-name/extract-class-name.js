function extractClassName(sessionTitle) {
  const month = [
    ["Januar", "Jänner"],
    ["Februar", "Feber"],
    ["März", "Maerz"],
    ["April"],
    ["Mai"],
    ["Juni"],
    ["Juli"],
    ["August"],
    ["September"],
    ["Oktober"],
    ["November"],
    ["Dezember"],
  ];
  const ses = sessionTitle.split(" ").slice(-2);

  let outMonth = "";
  let outYear = "";

  for (let i = 0; i < ses.length; i++) {
    for (let j = 0; j < month.length; j++) {
      if (month[j].includes(ses[i])) {
        outMonth = (j + 1).toString().padStart(2, "0");
        break;
      }
    }
  }
  if (ses[0] === "2023" || ses[0] === "2022") {
    outYear = ses[0];
  } else {
    return null;
  }
  return outYear + "-" + outMonth;
}
