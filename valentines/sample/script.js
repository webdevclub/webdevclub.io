const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const yayDiv = document.getElementById("yay");

//no button
noBtn.addEventListener("mouseover", () => {
    const positions = [
        { left: "100px", top: "100px" },
        { left: "70%", top: "150px" },
        { left: "200px", top: "70%" },
        { left: "70%", top: "70%" }
    ];
    const newPos = positions[Math.floor(Math.random() * positions.length)];
    noBtn.style.left = newPos.left;
    noBtn.style.top = newPos.top;
});

//yes button
yesBtn.addEventListener("click", () => {
    yayDiv.style.display = "block";
    if (yayDiv.style.display === "block") {
        yesBtn.style.display = "none";
        noBtn.style.display = "none";
    }
});