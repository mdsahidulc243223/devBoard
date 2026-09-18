// ========================================
// DEVBOARD JAVASCRIPT
// ========================================

// Select Elements
const taskCountElements = document.querySelectorAll(".task-count");
const dateElement = document.querySelector(".date");
const completedButtons = document.querySelectorAll(".completed");
const activityContainer = document.querySelector(".activity-list");
const clearHistoryButton = document.querySelector(".clear-btn");

let taskCount = 6;


// ========================================
// CURRENT DATE & TIME
// ========================================

function updateDateTime() {

    const now = new Date();

    const date = now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric"
    });

    const time = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    dateElement.textContent = `${date} | ${time}`;
}

updateDateTime();

setInterval(updateDateTime, 1000);


// ========================================
// COMPLETED BUTTON
// ========================================

completedButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const taskCard = button.closest(".task-card");

        const company =
            taskCard.querySelector(".company").textContent.trim();

        const taskTitle =
            taskCard.querySelector(".task-title").textContent.trim();


        // Decrease task count
        if (taskCount > 0) {

            taskCount--;

          taskCountElements.forEach(function (element) {
    element.textContent = taskCount;
});
        }


        // Change button
        button.textContent = "Completed ✓";

        button.classList.remove(
            "bg-[#4b24c8]",
            "hover:bg-[#3819a5]"
        );

        button.classList.add(
            "bg-green-600",
            "cursor-not-allowed"
        );

        button.disabled = true;


        // ========================================
        // ADD TO ACTIVITY LOG
        // ========================================

        const activityItem = document.createElement("div");

        activityItem.className =
            "bg-[#f5f7ff] rounded-lg p-3 mb-3";

        activityItem.innerHTML = `
            <p class="text-[10px] text-gray-400">
                Task Completed
            </p>

            <p class="text-[11px] font-bold mt-1">
                ${taskTitle}
            </p>

            <p class="text-[10px] text-gray-500 mt-1">
                ${company}
            </p>
        `;

        activityContainer.appendChild(activityItem);


        // Alert
        alert(`${taskTitle} completed!`);

    });

});


// ========================================
// CLEAR HISTORY
// ========================================

clearHistoryButton.addEventListener("click", function () {

    activityContainer.innerHTML = "";

});


// ========================================
// BACKGROUND COLOR
// ========================================

const colorButton = document.createElement("button");

colorButton.innerHTML = "🎨";

colorButton.className =
    "fixed bottom-5 left-5 w-10 h-10 " +
    "bg-white rounded-full shadow-lg " +
    "flex items-center justify-center " +
    "cursor-pointer text-lg " +
    "hover:scale-110 transition";

document.body.appendChild(colorButton);


const colors = [
    "#f4f6fc",
    "#fff7ed",
    "#f0fdf4",
    "#eff6ff",
    "#fdf4ff",
    "#fef2f2"
];

let colorIndex = 0;


colorButton.addEventListener("click", function () {

    colorIndex++;

    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }

    document.body.style.backgroundColor =
        colors[colorIndex];

});