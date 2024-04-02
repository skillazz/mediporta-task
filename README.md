# Description

- This project represents paginated table with tags along with the count of associated posts (data coming from provided API).
- The number of elements per page is configurable using a numeric field above the table.
- Implemented sorting field as well as sorting direction above the table.
- Implemented loading & error handling during retrieval.
- Utilized existing UI components from MUI library and existing state management and data fetching libraries such as contextAPI & axios.
- Configured a storybook to showcase custom components.

# Requirements

To run this project, you need:

- Node.js installed on your machine
- npm (Node Package Manager)

# Setup

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/your-repository.git
   ```

2. Navigate to the project directory:

   ```bash
   cd your-repository
   ```

3. Install dependencies:

   ```bash
   npm ci
   ```

# Usage

To start the application, run:

```bash
npm start
```

# To view the Storybook for component presentation, run:

```bash
npm run storybook
```

# Other libraries used:

- ts-luxon
- uuid
- axios
- sass
- fontsource
