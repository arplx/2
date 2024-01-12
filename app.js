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
                <div class="tweet-header">
                    <img src="${tweet.avatar}" alt="Profile Image">
                    <div class="tweet-user-details">
                        <h3>${tweet.username}</h3>
                        <span>${tweet.handle}</span>
                    </div>
                </div>
                <p class="tweet-text">${tweet.tweetText}</p>
                ${tweet.postImage ? `<img class="post-image" src="${tweet.postImage}" alt="Post Image">` : ''}
                <div class="tweet-details">
                    <p>${new Date(tweet.timestamp).toLocaleString()}</p>
                    <p>Retweets: ${tweet.retweets}</p>
                    <p>Likes: ${tweet.likes}</p>
                </div>
                <div class="comments-container">
                    <h4>Comments:</h4>
                    <ul class="comments-list">
                        ${tweet.comments.map(comment => `
                            <li>
                                <strong>${comment.username}</strong>
                                <p>${comment.commentText}</p>
                                <p>${new Date(comment.timestamp).toLocaleString()}</p>
                            </li>
                        `).join('')}
                    </ul>
                </div>
            `;
            tweetsContainer.appendChild(tweetElement);
        });
    })
    .catch(error => console.error('Error fetching tweets:', error));
