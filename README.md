# Raffle Application

Client-side raffle application using React

##### `Project Description`

Using a REST API, this project displays a list of raffles, creates raffles, sign ups participants into existing raffles and picks a winner at random.

[Response to this challenge](https://github.com/joinpursuit/Frontend-And-Mobile-Takehome-Coding-Challenge)

Use 'npm install' to install all node packages and then run 'npm start' to run locally, [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `Pages`

#### Home Page: ```\```

Displays a form to add a new raffle with name and secret token field. Shows a success message upon successful raffle creation and an error message otherwise.

Displays a list of all raffles and when you click in one of the raffles of the list it should take the user to that raffle's page/view.

#### Raffle Page: ```/raffles/:id```

Displays a single page for selected raffle. Includesnavigation menu that takes the user to All Raffles, Participants and Pick Winner pages.

Below the navigation displays a form to add a new participant to the Raffle. 

#### Raffle Participation Page: ```/raffles/:id/participants```

Displays the total number of participants with all their sign-in information. Includes a search input.


#### Select Winner Page: ```/raffles/:id/winner```

Displays a form where a user (the raffle admin) can input their secret token and pick a winner at random for the raffle. If a winner has already been picked this page displays a card with the user information and a celebratory image.



-----
##### Libraries used:

- react
- material-ui/core
- react-toastify
- react-bootstrap
