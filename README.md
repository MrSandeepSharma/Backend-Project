# Backend Project Youtube Clone

## Learnings

Here are all the learnings that I learned while building this project.

### Files manupulation using command prompt

- Create File `cd . > filename`
- Delete File `del filename`
- Create Folder `mkdir foldername`

### Upload Files on Github using VSCode

    `git init`
    `git add .`
    `git commit -m "message"`
    `git branch -M main`
    `git remote add origin https://github.com/MrSandeepSharma/Backend-Project.git`
    `git push -u origin main`

### how to push blank files to github

by creating `.gitKeep` file

### download prettier for code manegment

Install
`npm i -D prettier`

Create Folder `.prettierrc`

and setup your project example

    {
        "singleQuote": false,
        "bracketSpacing": true,
        "tabWidth": 2,
        "trailingComma": "es5",
        "semi": true
    }

and create another file `.prettierignore`
Example :-

    /.vscode
    /node_modules
    ./dist

    *.env
    .env
    .env.*
