# Typingclub.com Automation

In this project, I've automated typing club lessons, so you can easily record any speed you want, and get 5 blue stars!

## Usage

You should have `NodeJs` and `Npm` installed, then install dependencies:

```shell
    cd cypress-automation
    npm i
```

After that you have cypress installed, open it by:

```shell
    npx cypress open
```

Navigate to: `E2E Testing`, choose your favorite browser (recommended: electron)
and press `Start E2E Testing in Electron`, then choose `typingclub.js` spec file.

***Note*** the following:

- Each lesson is typed except the last character of it's content, you can tune the speed you want by typing this
  character yourself
- `typingclub.com` does not accept speeds higher than a limit for different lessons, so tune your speed.
- lessons are automatically typed one after another, you should press the run button at the top left
  after each lesson completed to go to the next lesson.

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
