const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

let persons = [
  {
    id: 1,
    name: "Arto Hellas",
    number: "040-123456",
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number: "39-44-5323523",
  },
  {
    id: 3,
    name: "Dan Abramov",
    number: "12-43-234345",
  },
  {
    id: 4,
    name: "Mary Poppendieck",
    number: "39-23-6423122",
  },
];

app.use(express.json());
app.use(cors());
app.use(express.static('build'))

//create the token in order to stringfy the data that we use to request the body
morgan.token(
  "requestBody",
  (getReqBody = (request) => {
    return JSON.stringify(request.body);
  })
);

//Use the "requestBody" token as it was passed to the morgan function
app.use(
  morgan(
    ":method :url :status :res[content-length] - :response-time ms :requestBody"
  )
);

app.get("/api/persons", (resquest, response) => {
  response.json(persons);
});

app.get("/info", (request, response) => {
  const date = new Date().toLocaleString();
  const dataSize = persons.length;
  response.send(`
  <p>Phonebook has only ${dataSize} entries.</p>
  <p>${date}</p>`);
});

app.get("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  const person = persons.find((person) => person.id === id);

  person
    ? response.json(person)
    : response.status(404).end("Error! Did not find the ID.");
});

app.delete("/api/persons/:id", (request, response) => {
  const id = Number(request.params.id);
  persons = persons.filter((person) => person.id !== id);

  response.status(204).end("The ID was deleted.");
});

const generateId = () => {
  return Math.floor(Math.random() * (1000 - 100) + 100);
};

// const generatePhoneNumber = () => {
//   return Math.floor(100000000 + Math.random() * 900000000).toString();
// };

app.post("/api/persons", (request, response) => {
  const body = request.body;

  if (!body.name) {
    return response.status(400).json({
      error: "The name is missing",
    });
  }

  if (!body.number) {
    return response.status(400).json({
      error: "The number is missing",
    });
  }

  const existingPerson = persons.find((person) => person.name === body.name);
  if (existingPerson) {
    return response.status(400).json({
      error: "Name must be unique",
    });
  }

  const person = {
    id: generateId(),
    name: body.name || false,
    number: body.number || false,
  };

  persons = persons.concat(person);
  response.json(person);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
