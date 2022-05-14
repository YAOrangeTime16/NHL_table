# NHL Table

## Project requirements

### Technical

- Use either Vue or React
- Do not request API more than necessary
- Include README to instruct how to run the code locally

### UX/UI

- Mobile-first web application
- Build a single pager to show the tables
- Show a sortable table for each NHL conference
- Add some basic information about every team somewhere near the table

---

## Tech tools

- [Vue ver.2 (Vue-cli)](https://cli.vuejs.org/)
- TypeScript
- [Tailwindcss ver.2](https://v2.tailwindcss.com/)
- Sass
- [Material Design Icons](https://materialdesignicons.com/)
- npm

---

## Project setup

### 1. Add `.env.local` file in the root directly, and add the variable below in the file:

```
VUE_APP_API_KEY=[apiKey]
```

NOTE: Replace [apiKey] with the actual api key value. This will be set to a parameter in the url endpoint.

### 2. Install dependencies

```
npm install
```

### 3. Run the project locally by development mode

```
npm run serve
```

### 4. Project will run on the port 8080

```
http://localhost:8080/
```
