# Daily Inspiration App

A beautiful web application that provides users with inspirational sentences every day. Each day, users get a new motivational quote to brighten their day and inspire them.

## 🌟 Features

- **Daily Rotation**: Each day displays a different inspirational sentence
- **Consistent Experience**: Same sentence for the same day across all users
- **Random Access**: Click "New Sentence" to get a random quote anytime
- **Share Functionality**: Share your favorite quotes with others
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Beautiful UI**: Modern, clean design with smooth animations
- **Keyboard Shortcuts**: Press spacebar to get a new random sentence

## 🚀 How to Use

1. **Open the App**: Simply open `index.html` in any modern web browser
2. **View Daily Sentence**: The app automatically shows today's inspirational sentence
3. **Get Random Quotes**: Click the "New Sentence" button to see a random quote
4. **Share Quotes**: Click the "Share" button to share the current quote
5. **Track Updates**: See when the next daily update will occur

## 📱 Features in Detail

### Daily Sentence System
- The app uses a date-based algorithm to ensure everyone sees the same sentence on the same day
- Sentences automatically update at midnight
- 35+ carefully curated inspirational quotes from famous personalities

### Interactive Elements
- **Hover Effects**: Cards lift slightly when hovered
- **Click Animations**: Subtle feedback when interacting with elements
- **Smooth Transitions**: All state changes are animated for a polished experience

### Sharing Capabilities
- **Native Share API**: Uses the browser's native sharing on supported devices
- **Clipboard Fallback**: Copies to clipboard on unsupported devices
- **Manual Copy**: Shows the text for manual copying as a final fallback

## 🎨 Design Features

- **Gradient Background**: Beautiful purple gradient that's easy on the eyes
- **Card-based Layout**: Clean, modern card design with subtle shadows
- **Typography**: Uses Inter font for excellent readability
- **Icons**: Font Awesome icons for visual appeal
- **Responsive**: Adapts perfectly to any screen size

## 🛠️ Technical Details

### Built With
- **HTML5**: Semantic markup for accessibility
- **CSS3**: Modern styling with flexbox and grid
- **Vanilla JavaScript**: No frameworks, pure JavaScript for performance
- **Font Awesome**: For beautiful icons
- **Google Fonts**: Inter font family

### Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## 📁 File Structure

```
yearly-goals-app/
├── index.html          # Main HTML file
├── styles.css          # CSS styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🎯 How It Works

1. **Date Calculation**: The app calculates the day of the year
2. **Sentence Selection**: Uses modulo operation to select a sentence from the collection
3. **Display**: Shows the sentence with its author
4. **Updates**: Automatically schedules the next update at midnight

## 🔧 Customization

### Adding New Sentences
To add more inspirational sentences, edit the `sentences` array in `script.js`:

```javascript
const sentences = [
    {
        text: "Your new inspirational quote here.",
        author: "Author Name"
    },
    // ... existing sentences
];
```

### Changing Colors
Modify the CSS variables in `styles.css` to change the color scheme:

```css
/* Main gradient */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Button colors */
.btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## 🌐 Deployment

This is a static web application that can be deployed anywhere:

1. **Local**: Just open `index.html` in a browser
2. **GitHub Pages**: Upload to a GitHub repository and enable Pages
3. **Netlify**: Drag and drop the folder to Netlify
4. **Vercel**: Connect your repository to Vercel
5. **Any Web Server**: Upload files to any web hosting service

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to contribute by:
- Adding more inspirational quotes
- Improving the design
- Adding new features
- Fixing bugs

## 💡 Future Enhancements

Potential features for future versions:
- User accounts to save favorite quotes
- Quote categories (motivation, wisdom, success, etc.)
- Dark/light theme toggle
- Quote of the day notifications
- Social media integration
- Quote search functionality

---

**Made with ❤️ to inspire and motivate people every day!** 