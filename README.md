# React Encryption Application

This project is a React-based web application that provides message encryption and decryption functionality using the AES algorithm. Built with Vite.js for fast development and optimal performance, this app offers a sleek user interface for secure message handling.

## Features

- Message encryption using AES
- Message decryption
- Custom encryption passwords
- Responsive design
- Animated text using Typed.js

## Technologies Used

- React
- Vite.js
- react-router-dom for navigation
- @material-tailwind/react for UI components
- crypto-js for AES encryption
- typed.js for text animation
- Tailwind CSS for styling

## Getting Started

### Prerequisites

- Node.js (version 12 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ardynatz/its-encrypted.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-encryption-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173` to view the application.

## Usage

The application consists of three main pages:

1. **Home Page**: Displays an animated introduction and provides navigation to the encryption and decryption pages.

2. **Encrypt Page**: Allows users to input a message and an optional encryption password. The encrypted message can be copied to the clipboard.

3. **Decrypt Page**: Enables users to input an encrypted message and the corresponding password to reveal the original text.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [Vite.js](https://vitejs.dev/) for the blazing fast build tool
- [React](https://reactjs.org/) for the UI library
- [Material Tailwind](https://www.material-tailwind.com/) for the UI components
- [Typed.js](https://github.com/mattboldt/typed.js/) for the typing animation
- [crypto-js](https://github.com/brix/crypto-js) for the AES encryption implementation
