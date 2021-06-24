const boxes = document.querySelectorAll(".box")
const booked = document.querySelector(".booked")
const remaining = document.querySelector(".remaining")

let bookedCount = 0,
    remainingCount = 36

boxes.forEach((box, i) => {
    box.addEventListener("click", () => {
        if (box.style.background !== "rgb(255,0,0)") {
            box.style.background = "rgb(255,0,0)"
            // box.style.borderColor= "rgb(255, 255, 255)"
            bookedCount += 1
            remainingCount -= 1

        } else {
            box.style.background = "rgb(255, 255, 255)"
            // box.style.borderColor= "rgb(255, 255, 255)"
            bookedCount -= 1
            remainingCount += 1
        }
        booked.innerHTML = "Booked Seats : " + bookedCount
        remaining.innerHTML = "Remaining Seats : " + remainingCount
    })
})