# HornsApp React

This is an admin project used in HornsApp project.

## Create a NodeJS project
Create a new React project.
```
npx create-react-app hornsapp-react
```

## Add thrid party libraries
Resolve the initial Web Vitals issue.
```
npm i web-vitals --save-dev
```
Integrate third-party libraries to simplify form creation and streamline CRUD operations
```
npm i react-bootstrap@next bootstrap@5.1.0 react-router-dom axios formik yup
```

## Run project
```
npm install
```
Run the React project
```
npm start
``` 

## Publish the project
Finally, publish the changes
```
npm TODO
```

## Bump version
Update package.json version value and run install command to update package-lock.json version too
```
npm install
```

Get all the changes and put them on `CHANGELOG.md` file
```
git log --pretty="- %s (%h) <%an>"
```

---
## License
```
Copyright 2024 HornsApp Contributors

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```