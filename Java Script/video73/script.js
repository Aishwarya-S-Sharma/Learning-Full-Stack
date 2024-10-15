function createCard(title, cName, views, monthsOld, duration, imageSrc) {
    // Correct selector for duration inside others div
    document.querySelector(".others .duration").innerHTML = duration;

    // Correctly target the img inside the .img container
    document.querySelector(".img img").src = imageSrc;

    // Format views
    if (views > 10000) {
        views = (views / 1000).toFixed(1) + "K";
    }
    if (views > 1000000) {
        views = (views / 1000000).toFixed(1) + "M";
    }

    // Set title and views info
    document.querySelector(".title").innerHTML = title;
    document.querySelector(".others").innerHTML += `<div class="views">${cName}. ${views} views. ${monthsOld} months ago</div>`;
}

// Call the function with proper arguments
createCard(
    "Sigma Batch Course Introduction | JavaScript",
    "CodeWithHarry",
    123456789,
    3,
    "2 hours",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
);
