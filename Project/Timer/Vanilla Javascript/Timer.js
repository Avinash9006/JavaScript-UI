const main = document.getElementById("main");
let Timer = document.createElement("div");
Timer.className = "font-Size"
const countDown = () => {
  let returnedId = setInterval(() => {
    Timer.innerHTML = getText();
  }, 1000);
};
main.appendChild(Timer);

function getText() {
  let text = "";
  const today = new Date();
  const Last_Date = new Date("2022-05-01");
  let totalSeconds = (Last_Date - today) / 1000;
  let days = Math.floor(totalSeconds / 3600 / 24);
  let hours = Math.floor(totalSeconds / 3600) % 24;
  let mins = Math.floor(totalSeconds / 60) % 60;
  let secs = Math.floor(totalSeconds) % 60;
  text = days + " days " + hours + " hours " + mins + " mins " + secs + " secs";
  return text;
}
countDown();
