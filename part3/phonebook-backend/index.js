require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const Person = require("./models/person");
const { response } = require("express");

let persons = [];

app.use(express.static("build"));
app.use(express.json());
app.use(cors());

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
  Person.find({}).then((persons) => {
    response.json(persons);
  });
});

app.get("/info", (request, response, next) => {
  Person.find({})
    .then((persons) => {
      const date = new Date().toLocaleString();
      const dataSize = persons.length;
      response.send(`
      <h2>Phonebook has only ${dataSize} entries.</h2>
      <h3>${date}</h3>`);
    })
    .catch((error) => next(error));
});

app.get("/api/persons/:id", (request, response, next) => {
  Person.findById(request.params.id)
    .then((person) => {
      response.json(person);
    })
    .catch((error) => next(error));
});

app.post("/api/persons", (request, response, next) => {
  const body = request.body;

  if (!body.name || !body.number) {
    return response.status(400).json({
      error: "The name and number are required!",
    });
  }

  const newPerson = new Person({
    name: body.name,
    number: body.number,
  });

  newPerson
    .save()
    .then((savedPerson) => {
      response.json(savedPerson);
    })
    .catch((error) => next(error));
});

app.put("/api/persons/:id", (request, response, next) => {
  const body = request.body;

  const person = {
    name: body.name,
    number: body.number,
  };

  Person.findByIdAndUpdate(request.params.id, person, { new: true })
    .then((updatePerson) => {
      response.json(updatePerson);
    })
    .catch((error) => next(error));
});

app.delete("/api/persons/:id", (request, response, next) => {
  Person.findByIdAndRemove(request.params.id)
    .then((result) => {
      response.status(204).end("The ID was deleted.");
    })
    .catch((error) => next(error));
});

// Express errorHandler
const errorHandler = (error, request, response, next) => {
  console.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "Malformatted id" });
  }
  next(error);
};

app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// const generateId = () => {
//   return Math.floor(Math.random() * (1000 - 100) + 100);
// };

// const generatePhoneNumber = () => {
//   return Math.floor(100000000 + Math.random() * 900000000).toString();
// };
