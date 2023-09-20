## Welcome to Challenge 20


Welcome to the 20th Challenge!

Today's challenge is all about getting familiar with GitHub Actions and setting up a code linter workflow in your own repository. GitHub Actions allows you to automate various tasks, and one common use case is running code linting checks on your codebase.

### Brief Overview
In this challenge, you'll set up a GitHub Actions workflow to run code linting checks on your codebase. You'll learn how to configure GitHub Actions to run whenever there are changes pushed to your repository. You'll also learn how to use a code linter to check your code for errors and ensure it adheres to the linting rules.

Learn about GitHub Actions and code linting in the following resources:
1. [GitHub Actions](https://docs.github.com/en/actions)
2. [Code Linting](https://www.perforce.com/blog/qac/what-lint-code-and-what-linting-and-why-linting-important)
3. [Github Action Video on Code With Scaler Channel](https://www.youtube.com/watch?v=b_VypAwsvZI&ab_channel=CodewithScaler)
4. [How to setup Linter Github Actions for your repository](https://www.freecodecamp.org/news/github-super-linter/)


## Task: Set Up a GitHub Action for Code Linting
1. Create a New Repository on Github.

2. Set Up a GitHub Action for Code Linting:

- In your repository, navigate to the "Actions" tab.
- Select the option to "Set up a workflow yourself."
- Create a new GitHub Action workflow file. You can name it lint.yml instead of main.yml. 
- Add the following code to the workflow file:
```
name: Lint Code Base

on: [push, pull_request]

jobs:
  build:
    name: Lint Code Base
    runs-on: ubuntu-latest

    steps:

      - name: Checkout Code
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      
      - name: Lint Code Base
        uses: github/super-linter@v4
```
- Commit the lint.yml workflow file to your repository and push the changes.


3. Add a Sample Code File:

- Inside your repository, create a new file (e.g., hello.py for Python or hello.js for JavaScript).
Write a simple code snippet in your preferred programming language. It could be a "Hello, World!" program or any code you like.

4. Check the GitHub Actions Workflow:

- Visit the "Actions" tab in your repository to see your newly created workflow in action.
- Observe how GitHub Actions automatically runs the code linting checks whenever there are new commits or pull requests.

5. Ensure the Workflow Passes:

- Make sure your code file adheres to the linting rules. If there are linting errors, fix them in your code file.

6. Share Your Experience:

- In the GitHub issue created in Challenge 1, share your experience with setting up GitHub Actions for code linting by sharing a screenshot of your repoistory and the workflow running. 


By completing this challenge, you'll have hands-on experience setting up GitHub Actions for code linting, which can significantly improve your code quality and streamline your development process.