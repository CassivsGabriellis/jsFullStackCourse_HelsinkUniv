require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const Person = require("./models/person");

let persons = [];

app.use(express.json());
app.use(cors());
app.use(express.static("build"));

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

app.get("/info", (request, response) => {
  Person.find({}).then((persons) => {
    const date = new Date().toLocaleString();
    const dataSize = persons.length;
    response.send(`
    <p>Phonebook has only ${dataSize} entries.</p>
    <p>${date}</p>`);
  });
});

app.get("/api/persons/:id", (request, response) => {
  Person.findById(request.params.id).then((person) => {
    response.json(person);
  });
});

app.post("/api/persons", (request, response) => {
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
    .catch((error) => {
      console.log(error);
      response.status(400).send({ error: "Unable to save to database!" });
    });
});

app.delete("/api/persons/:id", (request, response) => {
  Person.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end("The ID was deleted.");
    })
    .catch((error) => {
      console.log(error);
      response.status(400).send({ error: "Invalid ID!" });
    });
});

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
