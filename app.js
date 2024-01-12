// Assuming you have a 'tweets.json' file in the same directory
const tweetsContainer = document.getElementById('tweets-container');

// Fetch tweets from 'tweets.json'
fetch('tweets.json')
    .then(response => response.json())
    .then(tweets => {
        // Display tweets dynamically
        tweets.forEach(tweet => {
            const tweetElement = document.createElement('div');
            tweetElement.classList.add('tweet');
            tweetElement.innerHTML = `
                <img src="${tweet.profileImage}" alt="Profile Image">
                <div class="tweet-content">
                    <h3>${tweet.username}</h3>
                    <p>${tweet.text}</p>
                    <div class="tweet-details">
                        <p><strong>Location:</strong> ${tweet.location || 'Not specified'}</p>
                        <p><strong>Likes:</strong> ${tweet.likes || 0}</p>
                        <p><strong>Comments:</strong> ${tweet.comments || 0}</p>
                        <p><strong>Date Posted:</strong> ${tweet.datePosted || 'Not available'}</p>
                    </div>
                </div>
            `;
            tweetsContainer.appendChild(tweetElement);
        });
    })
    .catch(error => console.error('Error fetching tweets:', error));
