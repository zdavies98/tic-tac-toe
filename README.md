# Tic-Tac-Toe | React

## Overview

This project is a simple implementation of the classic Tic Tac Toe game using React. It serves as an introductory project to learn and understand the fundamentals of React, including state management, component lifecycle, and event handling.

## Features

- Two-player mode (X and O)
- Alternating turns
- Winner declaration
- Basic UI design

## Getting Started

### Prerequisites

To run this project, you need to have the following installed:

- [Node.js](https://nodejs.org/) (v14.0.0 or later)
- [npm](https://www.npmjs.com/) (v6.0.0 or later)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/zdavies98/react-tic-tac-toe.git
    cd react-tic-tac-toe
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to see the game in action.

## Project Structure

The project structure is as follows:

```
react-tic-tac-toe/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Cell.js
│   │   └── ...
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

## Components

### `App.js`

The main component that renders the game board and handles the game logic.

### `Cell.js`

A functional component that renders an individual square on the board.

## Future Enhancements

- **Design Update:** Improve the UI/UX with enhanced styling.
- **Tie Scenario:** Implement a feature to detect and display a tie game.
- **Multiplayer Functionality:** Add the ability for multiplayer games over a network.

## Acknowledgments

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tic Tac Toe Game Rules](https://en.wikipedia.org/wiki/Tic-tac-toe)

---
