// Listen for the button click
document.getElementById("fetchProfile").addEventListener("click", function () {
  const username = document.getElementById("githubUsername").value;

  if (username) {
    // Fetch data from GitHub API for the user profile
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        // Handle the case when the user is found
        if (data.message === "Not Found") {
          alert("User not found");
          return;
        }

        // Populate the profile data
        document.getElementById("profileImage").src = data.avatar_url;
        document.getElementById("profileName").innerText =
          data.name || "No name available";
        document.getElementById("profileBio").innerText =
          data.bio || "No bio available";
        document.getElementById(
          "profileLink"
        ).innerHTML = `<a href="${data.html_url}" target="_blank">Visit Profile</a>`;

        // Display the profile section
        document.getElementById("profile").style.display = "block";

        // Fetch followers and following
        fetchFollowersAndFollowing(username);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        alert("An error occurred while fetching the GitHub profile.");
      });
  } else {
    alert("Please enter a GitHub username");
  }
});

// Function to fetch followers and following data
function fetchFollowersAndFollowing(username) {
  // Fetch followers
  fetch(`https://api.github.com/users/${username}/followers`)
    .then((response) => response.json())
    .then((data) => {
      const followersSection = document.getElementById("followers");
      followersSection.innerHTML = `<h3>Followers (${data.length})</h3>`;

    //   data.forEach((follower) => {
    //     const followerDiv = document.createElement("div");
    //     followerDiv.innerHTML = `<a href="${follower.html_url}" target="_blank">${follower.login}</a>`;
    //     followersSection.appendChild(followerDiv);
    //   });
    })
    .catch((error) => {
      console.error("Error fetching followers: ", error);
      alert("An error occurred while fetching the followers.");
    });

  // Fetch following
  fetch(`https://api.github.com/users/${username}/following`)
    .then((response) => response.json())
    .then((data) => {
      const followingSection = document.getElementById("following");
      followingSection.innerHTML = `<h3>Following (${data.length})</h3>`;

    //   data.forEach((following) => {
    //     const followingDiv = document.createElement("div");
    //     followingDiv.innerHTML = `<a href="${following.html_url}" target="_blank">${following.login}</a>`;
    //     followingSection.appendChild(followingDiv);
    //   });
    })
    .catch((error) => {
      console.error("Error fetching following: ", error);
      alert("An error occurred while fetching the following.");
    });
}
