// Collection of inspirational sentences
const sentences = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
        author: "Zig Ziglar"
    },
    {
        text: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        text: "Your time is limited, don't waste it living someone else's life.",
        author: "Steve Jobs"
    },
    {
        text: "The mind is everything. What you think you become.",
        author: "Buddha"
    },
    {
        text: "Life is 10% what happens to you and 90% how you react to it.",
        author: "Charles R. Swindoll"
    },
    {
        text: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        text: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        text: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        text: "Everything you've ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        text: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        text: "Success usually comes to those who are too busy to be looking for it.",
        author: "Henry David Thoreau"
    },
    {
        text: "The harder you work for something, the greater you'll feel when you achieve it.",
        author: "Unknown"
    },
    {
        text: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        text: "What you do today can improve all your tomorrows.",
        author: "Ralph Marston"
    },
    {
        text: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        text: "Don't let yesterday take up too much of today.",
        author: "Will Rogers"
    },
    {
        text: "You learn more from failure than from success. Don't let it stop you. Failure builds character.",
        author: "Unknown"
    },
    {
        text: "It's going to be hard, but hard does not mean impossible.",
        author: "Unknown"
    },
    {
        text: "We can't help everyone, but everyone can help someone.",
        author: "Ronald Reagan"
    },
    {
        text: "When we strive to become better than we are, everything around us becomes better too.",
        author: "Paulo Coelho"
    },
    {
        text: "The only impossible journey is the one you never begin.",
        author: "Tony Robbins"
    },
    {
        text: "In order to succeed, we must first believe that we can.",
        author: "Nikos Kazantzakis"
    },
    {
        text: "The more you praise and celebrate your life, the more there is in life to celebrate.",
        author: "Oprah Winfrey"
    },
    {
        text: "You are never too old to set another goal or to dream a new dream.",
        author: "C.S. Lewis"
    },
    {
        text: "The purpose of our lives is to be happy.",
        author: "Dalai Lama"
    },
    {
        text: "Get busy living or get busy dying.",
        author: "Stephen King"
    },
    {
        text: "You have within you right now, everything you need to deal with whatever the world can throw at you.",
        author: "Brian Tracy"
    }
];

// DOM elements
const dailySentenceElement = document.getElementById('daily-sentence');
const sentenceAuthorElement = document.getElementById('sentence-author');
const newSentenceBtn = document.getElementById('new-sentence-btn');
const shareBtn = document.getElementById('share-btn');
const currentDateElement = document.getElementById('current-date');
const nextUpdateElement = document.getElementById('next-update');

// Get today's date as a string for consistent daily selection
function getTodayString() {
    const today = new Date();
    return today.toDateString();
}

// Get a sentence based on the date (ensures same sentence for the same day)
function getSentenceForDate(dateString) {
    const date = new Date(dateString);
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
    return sentences[dayOfYear % sentences.length];
}

// Display the sentence
function displaySentence(sentence) {
    dailySentenceElement.textContent = sentence.text;
    sentenceAuthorElement.textContent = sentence.author;
}

// Get a random sentence
function getRandomSentence() {
    return sentences[Math.floor(Math.random() * sentences.length)];
}

// Update the display with today's sentence
function updateDailySentence() {
    const todayString = getTodayString();
    const todaySentence = getSentenceForDate(todayString);
    displaySentence(todaySentence);
}

// Update date information
function updateDateInfo() {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    currentDateElement.textContent = today.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    nextUpdateElement.textContent = tomorrow.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
    });
}

// Share functionality
function shareSentence() {
    const currentSentence = dailySentenceElement.textContent;
    const currentAuthor = sentenceAuthorElement.textContent;
    const shareText = `"${currentSentence}" — ${currentAuthor}\n\nShared from Daily Inspiration App`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Daily Inspiration',
            text: shareText,
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(shareText).then(() => {
            alert('Sentence copied to clipboard!');
        }).catch(() => {
            // Final fallback: show the text
            prompt('Copy this sentence:', shareText);
        });
    }
}

// Event listeners
newSentenceBtn.addEventListener('click', () => {
    const randomSentence = getRandomSentence();
    displaySentence(randomSentence);
    
    // Add a small animation effect
    dailySentenceElement.style.opacity = '0';
    setTimeout(() => {
        dailySentenceElement.style.opacity = '1';
    }, 200);
});

shareBtn.addEventListener('click', shareSentence);

// Initialize the app
function init() {
    updateDailySentence();
    updateDateInfo();
    
    // Add smooth transitions
    dailySentenceElement.style.transition = 'opacity 0.3s ease';
    sentenceAuthorElement.style.transition = 'opacity 0.3s ease';
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);

// Update the sentence at midnight
function scheduleNextUpdate() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    const timeUntilMidnight = tomorrow - now;
    
    setTimeout(() => {
        updateDailySentence();
        updateDateInfo();
        scheduleNextUpdate(); // Schedule the next update
    }, timeUntilMidnight);
}

// Schedule the next update
scheduleNextUpdate();

// Add some interactive features
document.addEventListener('DOMContentLoaded', () => {
    // Add click effect to the sentence card
    const sentenceCard = document.querySelector('.sentence-card');
    
    sentenceCard.addEventListener('click', (e) => {
        // Don't trigger if clicking on buttons
        if (e.target.closest('.btn')) return;
        
        // Add a subtle pulse effect
        sentenceCard.style.transform = 'scale(0.98)';
        setTimeout(() => {
            sentenceCard.style.transform = '';
        }, 150);
    });
    
    // Add keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Space' && e.target === document.body) {
            e.preventDefault();
            newSentenceBtn.click();
        }
    });
}); 