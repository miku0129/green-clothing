# Green Clothing - Online Fashion Store

![Green Clothing](https://img.shields.io/badge/Green%20Clothing-Online%20Fashion%20Store-green?style=flat-square)
![License](https://img.shields.io/github/license/miku0129/green-clothing?style=flat-square)

Green Clothing is an online fashion store built with modern web technologies. It offers a wide range of eco-friendly and sustainable clothing options for fashion-conscious customers who care about the environment.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Integrating Firebase](#integrating-firebase)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Product Catalog**: Browse a diverse catalog of eco-friendly clothing, shoes, and accessories.
- **User Authentication**: Secure user authentication system with sign-up and login functionality.
- **Shopping Cart**: Add products to the cart and proceed to checkout.
- **Payment Integration**: Seamlessly integrate payment gateways for smooth and secure transactions.

## Demo

<img src="./assets/greenclothing-demo.gif" width="90%" height="90%"/>

## Technologies Used

- Frontend: React.js, styled-components
- Backend: Node.js, Firebase
- Database: Firestore
- Authentication: Firebase Authentication
- Payment Integration: Stripe
- Deployment: Netlify

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/miku0129/green-clothing.git
   ```

2. Navigate to the project directory:

   ```shell
   cd green-clothing
   ```

3. Install the required dependencies for both the frontend and backend:

   ```shell
   npm install
   ```

## Integrating Firebase

To integrate Firebase into the project for additional features such as real-time database, push notifications, and cloud functions:

1. Create a Firebase project at https://console.firebase.google.com/.
2. Obtain your Firebase configuration credentials (apiKey, authDomain, projectId, etc.).

## Usage

1. Set up environment variables: Rename the `.env.example` file to `.env` and configure your environment variables, including database connection details.

2. Run the frontend and backend servers:

   ```shell
   npm run start
   ```

3. Open your web browser and navigate to `http://localhost:3000` to access the Green Clothing online fashion store.

## Contributing

Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request. Your input is highly appreciated.

To contribute to the project, follow these steps:

1. Fork the repository.

2. Create a new branch:

   ```shell
   git checkout -b my-feature-branch
   ```

3. Make your changes and commit them:

   ```shell
   git commit -m "Add new feature"
   ```

4. Push your changes to the forked repository:

   ```shell
   git push origin my-feature-branch
   ```

5. Open a pull request with a detailed description of your changes.

6. Wait for the project maintainers to review and merge your pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to explore, use, and enhance Green Clothing. If you have any questions or need assistance, please don't hesitate to reach out. Happy shopping!
