## Files
* Check `tree.md` for folder structure

## Features
#### `adapters/api`
Can contain the rest api endpoints

#### `adapters/gql/connections`
Will contain connection details e.g. getGqlClient(), getApolloClient()

#### `adapters/gql/resolver`
This dir will include all the react query functions

#### `adapters/gql/schema`
This dir will include all the gql schema definitions

#### `adapters/local`
Will contain any demo or local data files e.g.

### `context`
Can contain mobx, redux, jotai, reactContexts

### `domain`
This dir can contain the typescript type definitions, interfaces.

### `hooks`
Can contain react hooks

### `utils`
utility functions for a specific feature

### features/[NAME]/index.tsx
entry point for the feature, it should serve as the public API of the given feature and exports everything that should be used outside the feature

<br/>
<br/>

## Notes
### `feature/app`
* directory will contain all the code which cannot be fit into features or we do not know yet. this will behave as entry point.
* App directory can import other features but cannot export anything outside of that directory

### `features/bite` 
* any code which can be used in more than 2 features and we do not know yet if that code can be put into it's own feature or not. Then put that code into this dir. E.g. CountryDropdown it will be too soon to create a new `features/geo` directory just for a single components.
* We could put countrydropdown into app code also but as we know any code inside `app` dir cannot be exported.
* `bite` dir cannot import any other features e.g. `auth` no matter what. this can only export the code and can be reused by other features.
* we can declare `gql/connection` as bite feature as this can be used by any other features.
* bite can contain global context that can be included further in all other features


## R&D
* `adapters/gql/connections` - can use authToken or any other variable so connection will have to import the e..g `import auth/auth.ts` and then user `auth.getToken()` but we want the connections loosely coupled.
* find a way to share variables between components using JS event instead of importing the code. E.g. some component want to get the token from the `auth.getToken()`