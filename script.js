document.body.addEventListener("click", function (event) {
  let div = document.createElement('div');
  document.body.append(div);

  let size = (Math.random() * 50).toFixed(0);
  let half = size / 2
  this.style.display = "flex"
  this.style.borderRadius = `${half}px`;
  this.style.position = "absolute"
  this.style.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
  this.style.width = `${half}px`;
  this.style.height = `${half}px`;
  this.style.top = event.clientY + "px";
  this.style.left = event.clientX + "px"
  
});
