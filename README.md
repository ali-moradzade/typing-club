# Typingclub.com Automation

In this project, I've automated typingclub lessons, so you can easily get any speed you want, and earn ⭐⭐⭐⭐⭐ in lessons!

## Usage

You should have `NodeJs` and `Npm` installed, then install dependencies:

```shell
    cd cypress-automation
    npm i
```

Create an `.env` file same as `.env.example` in the `cypress-automation` directory, and fill it with your `username`
and `password`:

```dotenv
  USER_NAME=<your-email>
  PASSWORD=<your-password>
```

Open Cypress by:

```shell
    npx cypress open
```

Navigate to: `E2E Testing`, choose your favorite browser (recommended: **electron**)
and press `Start E2E Testing in Electron`, then choose `typingclub.js` spec file.

***Note*** the following:

- Each lesson is typed except the last character of it's content, you can tune the speed you want by typing this
  character yourself
- `typingclub.com` does not accept speeds higher than a limit for different lessons, so tune your speed.
- lessons are automatically typed one after another, you should press the `▶` (run button) at the top left
  after each lesson completed, to go to the next lesson.

See this sample output of the program:

![Output](./cypress-automation/.assets/typingclub.js.gif)

## Lessons Data

Each lesson is specified by its `name` and `content` in the:

```shell
    cypress-automation/cypress/fixtures/example.json
```

You can add the other lesson you want here, and remove the lessons you don't want.

## Technologies Used

These are the technologies used:

- NodeJs
- Cypress

## Contribution

You can contribute to this project by adding more lessons, or improving cypress codes. 
