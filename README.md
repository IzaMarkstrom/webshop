# Collaboration together with @annarylander and @rokkomini


# Plant shop

## This is a webshop created with:
* ![image](https://user-images.githubusercontent.com/74114062/225089997-305ba6ac-2b07-4f85-9a8e-567dbb0c4b02.png)
* ![image](https://user-images.githubusercontent.com/74114062/225088915-cbe6c029-7e8c-402b-b787-c23e577347e8.png)
* ![image](https://user-images.githubusercontent.com/74114062/225089929-ed579508-0dd1-47e9-9f3a-52ab8506fe85.png)


## Run project with docker

1. Clone the repository:

```bash
git clone https://github.com/annarylander/webshop.git
```

2. Create an .env file in workspaces/server and include the following environment variable:

```bash
JWT_SECRET = choose a secret token
```

3. Use this command to run the project:

```bash
docker compose up --build
```


### Create an Admin user

In this webshop you can chose between roles "customer" or "admin". 
To change between these two, follow these steps:

1. Go into the database and pick one user.
2. Change the role "customer" to "admin".
3. Reload page.
