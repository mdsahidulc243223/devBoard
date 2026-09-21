// ========================================
// DEVBOARD JAVASCRIPT
// ========================================


// ========================================
// 1. SELECT ELEMENTS
// ========================================

const taskCountElement = document.getElementById("task-count");
const completedCountElement = document.getElementById("completed-count");

const currentDateElement = document.getElementById("current-date");
const currentTimeElement = document.getElementById("current-time");

const activityList = document.getElementById("activity-list");

const clearHistoryButton = document.getElementById("clear-history");

const colorButton = document.getElementById("color-btn");

const body = document.getElementById("body");

const completedButtons =
    document.querySelectorAll(".completed-btn");


// ========================================
// 2. TASK COUNT
// ========================================

let taskCount = 6;


// ========================================
// 3. COMPLETED COUNT
// ========================================

let completedCount = 23;


// ========================================
// 4. COMPLETED BUTTON FUNCTION
// ========================================

completedButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        // Get task card
        const taskCard = button.closest(".task-card");

        // Get task name
        const taskName = taskCard.dataset.task;


        // ====================================
        // TASK COUNT DECREASE
        // ====================================

        if (taskCount > 0) {

            taskCount--;

            taskCountElement.textContent = taskCount;

        }


        // ====================================
        // COMPLETED COUNT INCREASE
        // ====================================

        completedCount++;

        completedCountElement.textContent = completedCount;


        // ====================================
        // DISABLE BUTTON
        // ====================================

        button.disabled = true;

        button.textContent = "Completed ✓";


        // ====================================
        // ALERT
        // ====================================

        alert(
            `Task Completed!\n\n${taskName}`
        );


        // ====================================
        // ADD ACTIVITY
        // ====================================

        addActivity(taskName);

    });

});


// ========================================
// 5. ADD ACTIVITY LOG
// ========================================

function addActivity(taskName) {

    const activityItem = document.createElement("div");

    activityItem.className =
        "bg-gray-50 rounded-lg p-3 text-sm";


    // Current time
    const now = new Date();

    const time = now.toLocaleTimeString(
        "en-US",
        {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }
    );


    activityItem.innerHTML = `
        <p class="font-medium text-gray-700">
            ${taskName}
        </p>

        <p class="text-xs text-gray-400 mt-1">
            Completed at ${time}
        </p>
    `;


    // Add new activity at top
    activityList.prepend(activityItem);

}


// ========================================
// 6. CLEAR ACTIVITY HISTORY
// ========================================

clearHistoryButton.addEventListener("click", function() {

    activityList.innerHTML = "";

});


// ========================================
// 7. CURRENT DATE + TIME
// ========================================

function updateDateTime() {

    const now = new Date();


    // Date
    const date = now.toLocaleDateString(
        "en-US",
        {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric"
        }
    );


    // Time
    const time = now.toLocaleTimeString(
        "en-US",
        {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }
    );


    currentDateElement.textContent = date;

    currentTimeElement.textContent = time;

}


// Run immediately
updateDateTime();


// Update every 1 second
setInterval(updateDateTime, 1000);


// ========================================
// 8. COLOR BUTTON
// ========================================

const backgrounds = [
    "#f4f7ff",
    "#fef3f3",
    "#f0fdf4",
    "#fff7ed",
    "#f5f3ff",
    "#ecfeff"
];

let colorIndex = 0;


colorButton.addEventListener("click", function() {

    colorIndex++;

    if (colorIndex >= backgrounds.length) {
        colorIndex = 0;
    }

    body.style.backgroundColor =
        backgrounds[colorIndex];

});