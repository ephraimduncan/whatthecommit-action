# What the Commit

**GitHub Action for committing messages from whatthecommit.com**

This is a GitHub Action that changes the last commit and replaces it with a commit message from https://whatthecommit.com

> _Risky for already forked repos_

### Setup

1. Store the following in your repository’s secrets settings.`COMMIT_EMAIL (Email For Github)` `COMMIT_USERNAME (Name to use as Author of commit0)`

1. **Add a workflow file** to your project (e.g. `.github/workflows/commit.yml`) with this:

   ```yml
   name: New Commit

   on:
     push:
       branches:
         - main
         - master
     pull_request:
       branches:
         - main
         - master

   jobs:
     build:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - name: Use Node.js
           uses: actions/setup-node@v1
           with:
             node-version: '12.x'
         - name: Change Commit
           uses: dephraiim/whatthecommit-action@v1
           env:
             COMMIT_EMAIL: ${{ secrets.COMMIT_EMAIL }}
             COMMIT_USERNAME: ${{ secrets.COMMIT_USERNAME }}
   ```

### Commiting

Using the workflow above, GitHub will modify the last commit with a commit message from https://whatthecommit.com

### Options

The `COMMIT_EMAIL` and `COMMIT_USERNAME` will be used to set the global Git configuration in the CI.

### Development

Contributions and Suggestions are always welcome!

### LICENSE

[MIT](./license)
