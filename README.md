<a id="readme-top"></a>

<br />
<div align="center">
  <h1 align="center">Task Organizer</h1>
</div>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#built-with">Built With</a>
    </li>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li>
      <a href="#usage">Usage</a>
      <ul>
        <li><a href="#running-the-full-stack-app">Running the full-stack app</a></li>
        <li><a href="#developing-the-app">Developing the app</a></li>
      </ul>
    </li>
    <li>
      <a href="#development-process">Development Process</a>
      <ul>
        <li><a href="#development-process">Development Process</a></li>
        <ul>
          <li><a href="#front-end-playground">Front end playground</a></li>
          <li><a href="#start-from-the-back">Start from the back</a></li>
          <li><a href="#finish-at-the-front">Finish at the front</a></li>
          <li><a href="#wrapping-up">Wrapping up</a></li>
          <li><a href="#sorting-filtering">Sorting & filtering (Should have's)</a></li>
          <li><a href="#not-enough-time">Not enough time (Further improvements)</a></li>
        </ul>
      </ul>
    </li>
  </ol>
</details>

## Built With

<div align="center">

  #### Front end
  [![React][React.js]][React-url]
  [![Vite][Vite]][Vite-url]
  [![React-Router][React-Router]][React-Router-url]
  [![React-Hook-Form][React-Hook-Form]][React-Hook-Form-url]
  [![Tailwind v4][Tailwind]][Tailwind-url]
  [![Axios][Axios]][Axios-url]
  [![shadcn][shadcn]][shadcn-url]

  #### Back end
  [![Golang][Golang]][Golang-url]
  [![Gorm][Gorm]][Gorm-url]
  [![Gin][Gin]][Gin-url]
  [![GinSwagger][GinSwagger]][GinSwagger-url]
  [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
</div>

<!-- Front end -->
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vite]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFd028
[React-Router-url]: https://reactrouter.com/home
[React-Router]: https://img.shields.io/badge/React_router-CA4245?style=for-the-badge&logo=react-router&logoColor=ffffff
[React-Hook-Form-url]: https://react-hook-form.com/
[React-Hook-Form]: https://img.shields.io/badge/React_hook_form-EC5990?style=for-the-badge&logo=react-hook-form&logoColor=ffffff
[Vite-url]: https://vite.dev/
[Tailwind]: https://img.shields.io/badge/Tailwind_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=ffffff
[Tailwind-url]: https://tailwindcss.com
[Axios]: https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=ffffff
[Axios-url]: https://axios-http.com/
[shadcn]: https://img.shields.io/badge/shadcn-000000?style=for-the-badge&logo=shadcn/ui&logoColor=ffffff
[shadcn-url]: https://ui.shadcn.com/

<!-- Back end -->
[Golang]: https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=ffffff
[Golang-url]: https://go.dev/
[Gorm]: https://img.shields.io/badge/Gorm-00ADD8?style=for-the-badge&logo=go&logoColor=ffffff
[Gorm-url]: https://gorm.io/
[Gin]: https://img.shields.io/badge/Gin-008ECF?style=for-the-badge&logo=gin&logoColor=ffffff
[Gin-url]: https://github.com/gin-gonic/gin
[GinSwagger]: https://img.shields.io/badge/Gin_Swagger-85EA2D?style=for-the-badge&logo=swagger&logoColor=202224
[GinSwagger-url]: https://github.com/swaggo/gin-swagger
[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=ffffff
[PostgreSQL-url]: https://github.com/swaggo/gin-swagger

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## About The Project


Simple full-stack task management application. You can view, create and edit tasks.

Tasks are composed of:
 * Name
 * Description
 * Due date
 * Status

A task's status is based on its due date, with tasks due in the past `Overdue`, due within 7 days `Due Soon` and past 7 days `Not Urgent`.

This is based on the following user stories:
- User should be able to create a new task, including the following fields:
  * Name
  * Description
  * Due date
- User should be able to view all tasks created in a list view, showing all the following details:
  * Name
  * Description
  * Due date
  * Create date
  * Status
    * Not urgent
    * Due soon (Due date is within 7 days)
    * Overdue

- User should be able to edit task name, description, and due date.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

### Prerequisites

* #### Running the app
  If you simply want to run the application then you'll at the very least need [Docker](https://www.docker.com/). Make sure you are able to run Docker in your CLI

  ```bash
  docker -v

  > Docker version <your docker version>
  ```

* #### Developing the app
  If you would like to develop the app then it might be better to run the back end and front end separately. In that case you will need:
  * [NodeJs](https://nodejs.org/en/download/)
  * [GoLang](https://go.dev/doc/install)
  * [Docker](https://www.docker.com/)

### Installation
1. Clone the repo 

   ```bash
   git clone https://github.com/daeddy/task_organizer.git && cd task_organizer
   ```

2.  (Optional, only for dev) Since only the backend needs to run in a Docker container you only need to install front-end dependencies

    ```bash
      cd front_end && npm i
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

### Running the full-stack app 
If you just want to run the app I have a root docker-compose.yaml config:
1. Build and run Docker containers (this will take 10-20s depending on your machine)

   ```bash
   docker compose up --build
   ```

2. Open the application at http://localhost:3000

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Developing the app
For development you will need to run the front end and backend separately.

#### Back-end:
The backend API will run in its own Docker container. I use [Air](https://github.com/air-verse/air) for live-reloading, and it has been configured to work in the container, so there is no need to run the app directly.

```bash
  # in task_organizer/back_end
  docker compose up --build
```

The API will be available at http://localhost:8080. You can view the schema and test the endpoints at http://localhost:8080/swagger/index.html

#### Front-end:
For the frontend app you can run the app using:

```bash
  # in task_organizer/front_end
  npm run dev
```

> Note: This will only work if the backend API is running since I fetch the TS types from the swagger schema on build using [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api)

The app will be available at http://localhost:3000

Cleanup (linting and prettify) can be done using:

```bash
  # in task_organizer/front_end
  npm run cleanup
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Development Process
This will be an overview of the thought process and the steps taken when building the app. 

<a id="front-end-playground"></a>

### Front end playground (~1 hour of dev time)
I started front-end development with some library sanboxing as it had been a while since I built a React app. I had seen some cool implementations with [shadcn/ui][shadcn-url] and I wanted to give that a try and see if it made sense for this application. I bootstrapped the app using:

```bash
  npm create vite@latest front-end -- --template react-ts
```

and added [tailwind v4][Tailwind-url].

After testing `shadcn/ui` I felt like it would cut down a lot of dev time and since `shadcn/ui` creates the components directly in the code (rather than installing a UI library). I can reduce my dependencies as well as extend or modify any imported components to suit my needs.
> All the components under `src/components/ui` are generated by `shadcn/ui` (with the exception of `taskStatusTag.tsx`). I only needed to modify `pagination.tsx` since the app would be a SPA and it used button links (switched them to be buttons instead).

I implemented the basic views using dummy data, `shadcn/ui` components, and [react-router][React-Router-url] (library version) to show the tasks list and the individual task view.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a id="start-from-the-back"></a>

### Start from the back (~3 hours of dev time) 

Given the first 3 user stories (required on the assignment), I thought it would be best to build the API first since I would need the data types to have a single source of truth. I had worked on a GraphQL Go API before so I had an idea already of what I wanted to do:
- Generate API schema so the font-end can get data types
- Use an ORM like [Gorm][Gorm-url] to interface with the DB layer
- Use an API library to configure and create the routes (Went with [Gin][Gin-url])
- Dynamically generate the `Task.status` in one DB transaction.
- Implement basic pagination for the `GET /tasks` route 

I was confident that this would be the bare minimum to meet the requirements and be scalable.

For creating the API schema I used [gin-swagger][GinSwagger-url]. This library generates a swagger API schema based on comment annotations. You can see them on the `model.task` & `handlers`. 

Gorm took care of the main DB functionality (migrations, queries, etc..). Having worked with it before though, there may be times where we would need to override the functionality since many of Gorm's abstractions do not play well at scale.
> Note: I implemented a delete function here though it was never part of the requirements.

For the status, I decided it needs to be a virtual field produced by the API, since potential sorting by status would not be possible if we did the calculation in the front-end. I used Gorm hooks (`AfterCreate`, and `AfterSave`), invoked after saving type queries. For `Get /tasks:id` I just invoke the calculation after the fetch since doens't have a big performance impact. For `Get /tasks` where there could be potentially 10s of 1000s of tasks, then it will be necessary to do the calculation in the query so that it all happens within the same DB transaction.

<a id="pagination-implementation"></a>
For pagination, I based it on this simple [implementation I found](https://dev.to/rafaelgfirmino/pagination-using-gorm-scopes-3k5f) (minus the sorting).

> Note: If I were to implement sorting or filtering I would use a similar abstraction: `handlers.filtering` and add the sort field to this.

To simplify the environment setup I used `docker-compose` with the API being built with [Air](https://github.com/air-verse/air) to allow for live-reloading.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a id="finish-at-the-front"></a>

### Finish at the front (~2 hours of dev time)
Once the API was running and I had a schema, I added [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api) to generate the types. I configured it to run on `predev` and `prebuild`

```json
  // package.json 
  "predev": "npm run generate-types",
  "prebuild": "npm run generate-types",
```

This fetches the swagger schema and generates the types for the app. 

With the configuration

```ts
  // gen-types.ts
  httpClientType: "axios",
```

I was also able to generate an [axios][axios-url] API client setup with all the request and data types.

Using the generated API client implementing API hooks was simple (see `src/api/hooks`) as all the API functions and the data types were now available. With that I began implementing them on the pages. I used [react-hook-form][React-Hook-Form-url] for the save actions (create, edit) and implemented the API functions under a `taskForm.tsx` component that can do either action depending on if a task prop is passed to it. This form is used in the dialog component triggered by action buttons on each page (`New task` on `TaskLists` and `Edit Task` on task view).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a id="wrapping-up"></a>

### Wrapping up (<1 hour of dev time)
Once the app was working as intended I implemented a root `docker-compose` so that the entire application could be run with minimal setup. 

In order to make sure the API is serving before building the front end app (since it needs to fetch the swagger schema on build), I used a health check condition on the API:

```yaml
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:8080/swagger/index.html"]
  interval: 10s
  timeout: 5s
  retries: 5
```

and made the front-end app depend on it:

```yaml
depends_on:
  backend:
    condition: service_healthy
```

> Note: This has the side effect of causing repeating requests (on 10s intervals) to `GET /swagger/index.html` while the API container is running.

With that the application can now be run full stack using one command!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a id="sorting-filtering"></a>

### Sorting & filtering (Should have's)
As mentioned earlier on the pagination implementation part (see <a href="#pagination-implementation">pagination implementation</a>) if sorting and filtering were to be implemented I would use the same pattern.

For sorting I would add a `sort` field to the pagination handler that uses a `sort` interface. Then on the `GetTasks` function in the `taskHandler` I would use `Gorm` functions to apply the sorting to the query (like `db.Order("...")`).

Filtering (search) would need its own interface that can be extended to use specific fields on a struct. The implementation would be very similar to pagination.

This kind of abstraction would make it very easy to re-use this logic in any other potential handlers.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<a id="not-enough-time"></a>

### Not enough time (Further improvements)
There were some big features that I simply didn't have enough time to implement:
`Error handling`, `Caching` and `Testing`

As you can see by the time I had finished I had already spent ~6 hours of dev time on this project. I felt that the main goal was to show the core functionality from the requirements, as such I decided from the start that these features would take a lower priority.

However, in the event that these would be needed I have a good idea of what it would look like:

#### Error handling

In the front-end, I would use an error context that captures any raised errors. It would be wrapped around the application and potentially render an error page and/or trigger an alert (error variant) component that would also have its own context. 

For the back-end, errors would be logged and use an error middleware.

#### Caching

Caching can be done on both the front-end and back-end.

For the back-end i would probably add a cache layer using redis. This is a very common solution that works well at scale (although with some memory costs). Alternatively I could also create a parallel read replica DB. With that I could offload read operations, and scale read capacity without affecting the performance of write operations on the primary database. I think I would need more discussions on this to see which solution is best for this platform.

For the client its not a high priority based on these user stories, but if high volumes of read requests are expected, then adding some caching solution on the API client would probably be needed. It would most likely use local storage.

#### Testing

For the front-end I would use `jest` as well as snapshot tests for unit testing. Back-end unit testing would be done mostly natively using Go's built-in testing package. I would probably also want to implement some kind of load testing solution to address the "high volumes of tasks created" risk.

Integration testing I would probably need some time to plan and see which tools would work best for this stack.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
