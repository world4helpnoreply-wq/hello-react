# Hello React

A simple React.js "Hello World" application built with webpack and Babel.

![Hello React App](https://github.com/user-attachments/assets/834e09ed-91b7-47c7-bcc5-d789c94b8b9a)

## Features

- ⚛️ React 18 with modern hooks
- 📦 Webpack 5 for bundling
- 🔄 Babel for JavaScript transpilation
- 🎨 CSS styling with a modern dark theme
- 🔥 Hot Module Replacement for development
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd hello-react
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

#### Development Mode
Start the development server with hot reloading:
```bash
npm start
# or
npm run dev
```

The application will open automatically in your browser at `http://localhost:3000`.

#### Production Build
Create an optimized production build:
```bash
npm run build
```

The built files will be generated in the `dist/` directory.

## Project Structure

```
hello-react/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── App.jsx            # Main React component
│   ├── App.css            # Component styles
│   └── index.js           # Application entry point
├── .babelrc               # Babel configuration
├── webpack.config.js      # Webpack configuration
├── package.json           # Project dependencies and scripts
└── README.md             # This file
```

## What's Inside

This is a minimal React.js "Hello World" application that demonstrates:

- Setting up a React application from scratch
- Using modern React features (functional components, React 18)
- Configuring webpack for bundling and development
- Styling with CSS
- Hot Module Replacement for efficient development

## Scripts

- `npm start` - Start development server with hot reloading
- `npm run dev` - Alternative command for development server
- `npm run build` - Create production build

## Contributing

Feel free to fork this repository and submit pull requests for any improvements.

## License

This project is open source and available under the [MIT License](LICENSE).