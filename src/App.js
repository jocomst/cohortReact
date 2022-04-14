const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;
  const parts = [part1, part2, part3];
  const exArr = [exercises1, exercises2, exercises3];

  return (
    <div>
      <Header course={course} />
      <Content partArr={parts} exercisesArr={exArr} />
      <Total arr={exArr} />
    </div>
  );
};

const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Content = ({ partArr, exercisesArr }) => {
  return (
    <div>
      {partArr.map((el, i) => {
        return <Part part={el} exercises={exercisesArr[i]} />;
      })}
    </div>
  );
};

const Part = ({ part, exercises }) => {
  return (
    <p>
      {part} {exercises}
    </p>
  );
};

const Total = ({ arr }) => {
  const total = arr.reduce((accum, cur) => accum + cur);
  return <p>Number of exercises {total}</p>;
};

export default App;
