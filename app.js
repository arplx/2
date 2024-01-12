document.addEventListener('DOMContentLoaded', function () {
    // Fetch tweets from the JSON file
    fetch('tweets.json')
        .then(response => response.json())
        .then(data => {
            // Display tweets
            const tweetsContainer = document.getElementById('tweets-container');
            data.forEach(tweet => {
                const tweetElement = createTweetElement(tweet);
                tweetsContainer.appendChild(tweetElement);
            });
        })
        .catch(error => console.error('Error fetching tweets:', error));
});

function createTweetElement(tweet) {
    const tweetElement = document.createElement('div');
    tweetElement.classList.add('tweet');

    // User section
    const userSection = document.createElement('div');
    userSection.classList.add('user-section');

    const profilePicture = document.createElement('img');
    profilePicture.src = tweet.user.profilePicture;
    profilePicture.alt = 'Profile Picture';
    userSection.appendChild(profilePicture);

    const userName = document.createElement('span');
    userName.textContent = tweet.user.name;
    userSection.appendChild(userName);

    tweetElement.appendChild(userSection);

    // Location
    const location = document.createElement('p');
    location.textContent = `Location: ${tweet.location}`;
    tweetElement.appendChild(location);

    // Post image
    const postImage = document.createElement('img');
    postImage.src = tweet.postImage;
    postImage.alt = 'Post Image';
    tweetElement.appendChild(postImage);

    // Likes and comments
    const likes = document.createElement('span');
    likes.innerHTML = `<svg> <!-- Your SVG for likes icon --> </svg> ${tweet.likes} Likes`;
    tweetElement.appendChild(likes);

    const comments = document.createElement('span');
    comments.innerHTML = `<svg> <!-- Your SVG for comments icon --> </svg> ${tweet.comments} Comments`;
    tweetElement.appendChild(comments);

    return tweetElement;
}
