const Course = ({ course }) => {
  return (
    <>
      <Title title={"Web development curriculum"} />      
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

const Title = ({ title }) => {
  return (
    <>
      <h2>{title}</h2>
    </>
  );
};

const Header = ({ name }) => {
  return (
    <div>
      <h3>{name}</h3>
    </div>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <>
      <ul>
        <p>
          {name} {exercises}
        </p>
      </ul>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <div>
      <ul>
        {parts.map((part) => (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        ))}
      </ul>
    </div>
  );
};

const Total = ({ parts }) => {
  const sumTotal = parts.reduce((sumTotal, part) => {
    return sumTotal + part.exercises;
  }, 0);

  return (
    <>
      <ul>
        <li>
          <h4>Total of {sumTotal} exercises</h4>
        </li>
      </ul>
    </>
  );
};

export default Course;
