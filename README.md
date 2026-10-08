# Advice Generator App

A React practice project built to strengthen my understanding of **working with third-party APIs**, handling asynchronous data, and building a responsive UI from a design.

The application fetches random pieces of advice from the **Advice Slip API** and displays them in a simple advice card. Users can request a new piece of advice by clicking the dice button.

## ✨ Features

- Fetches advice from a third-party REST API
- Displays the advice ID and message dynamically
- Allows users to request new advice without refreshing the page
- Responsive layout for mobile and desktop screens
- Accessible button with an appropriate `aria-label`
- Responsive styling using SCSS
- Type-safe API data handling with TypeScript

## 🛠️ Technologies Used

### Core technologies

- **React** – Building the user interface and managing component state
- **TypeScript** – Adding type safety to application data and React components
- **Vite** – Development server and build tooling
- **SCSS / Sass** – Styling, variables, nesting, and responsive design
- **HTML5** – Semantic structure and accessibility
- **CSS3** – Responsive layout, transitions, and interactive states

### API

- **Advice Slip API** – Used to retrieve random pieces of advice from a third-party REST API

### Development tools

- **ESLint** – Code quality and linting
- **React Compiler** – Configured through the Vite React plugin

## 📚 The Most Crucial Learning

### Working with third-party APIs in React

The most important lesson from this project was learning how to connect a React application to an external API and turn the returned data into UI.

Instead of using static data, the application needs to:

1. Send a request to the API.
2. Wait for the asynchronous response.
3. Check whether the request was successful.
4. Parse the JSON response.
5. Store the result in React state.
6. Render the updated state in the UI.

For example, the API response is represented with a TypeScript interface:

```ts
export interface Advice {
  advice: string;
  id: number;
}
```

The API request is then handled asynchronously:

```ts
const fetchAdvice = async (): Promise<Advice> => {
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Could not fetch advice");
  }

  const data = await response.json();

  return data.slip;
};
```

The most valuable part of this practice was understanding the complete flow:

**API → asynchronous request → typed data → React state → UI**

This is an important pattern that appears in many real-world applications.

## 💡 Other Key Learnings

### React state and side effects

I practiced using `useState` to store API data and `useEffect` to trigger the initial API request when the application loads.

```ts
const [advice, setAdvice] = useState<Advice | undefined>();
```

This helped reinforce the difference between:

- component state
- side effects
- event handlers
- rendering based on state

### Reusing asynchronous logic

The same `fetchAdvice` function is used both when the application initially loads and when the user requests new advice.

This keeps the API logic in one place instead of duplicating the request code.

### TypeScript with API data

Working with external data reinforced the importance of defining the expected shape of API responses.

Using an interface makes it clearer what the application expects:

```ts
interface Advice {
  advice: string;
  id: number;
}
```

It also provides better editor support and helps catch mistakes during development.

### Responsive and accessible UI

The project also gave me practice with responsive design and accessibility.

The layout was designed for both mobile and desktop screens, while the interactive button includes an accessible label:

```tsx
aria-label="Get new advice"
```

I also practiced interactive states such as `:hover`, `:focus-visible`, and `:active`.

## 🎯 What This Practice Improved

This project helped me move from building interfaces with static data toward building interfaces that **communicate with external services and react to dynamic data**.

The biggest takeaway is that a frontend application is not just about rendering components. It also needs to manage:

- asynchronous operations
- external data
- application state
- user interactions
- errors
- accessibility
- responsive layouts

## 🚀 Running the Project Locally

Clone the repository:

```bash
git clone https://github.com/sercansimsek/advice-generator-app.git
```

Navigate into the project:

```bash
cd advice-generator-app
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

To create a production build:

```bash
npm run build
```

To run the linter:

```bash
npm run lint
```

## 📌 Conclusion

This was a focused practice project, but it was an important step in understanding how a React application communicates with a real external API.
