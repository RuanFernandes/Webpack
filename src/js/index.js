const textComponent = () => {
  const eH1 = document.createElement("h1");
  eH1.innerText = "Hello World";
  return eH1;
};

document.body.appendChild(textComponent());
