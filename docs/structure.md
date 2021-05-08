# Directory Structure

## `src/library`

We usually have common components, some functions or utilities.
We should keep them in one place to make sure that we don’t spend time making up something that is already in our project.
The simplest example could be a buttom component so that we can import it from our library and use it anywhere.

* `api`
* `common/components`
* `common/constants`
* `utils`


## `src/main`

We should have a place somewhere to put configuration files related to our application logic so that we could extend them later and to make sure that we don’t add some extra mess in our code.

* `routes`
* `store`


## `src/module`

Screens are modules.
In a web, each certain module represents a separate page.
On mobile, we call it "screens", but there is no difference in meaning.
Each screen is a self-organized structure of components, logic etc.
The module can have access to the store.


## `src/resources`

All resources that we are going to have we should keep in a separate folder like this.
We could keep these files in certain modules, but this is not extensive and can bring some mess to our code.
Imagine that we have an icon somewhere in our code in one of our modules.
If we don’t have a centralized place for all of our icons, we can face a situation where similar icons will be added to the project by different developers, and the project bundle will be heavier.
This is critical for the application.
This is not only about icons, we can have some other resources.

* `fonts`
* `i18n`
* `images`
* `styles`
