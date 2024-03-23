import "./Stack.scss";

// function Stack() {
//   return (
//     <div className="stack">
//       <div>
//         <span>Html</span>
//         <span>CSS</span>
//         <span>JavaScript</span>
//         <span>React</span>
//         <span>Nodejs</span>
//         <span>Tailwind</span>
//         <span>Styled Component</span>
//       </div>

//       <div>
//         <span>Html</span>
//         <span>CSS</span>
//         <span>JavaScript</span>
//         <span>React</span>
//         <span>Nodejs</span>
//         <span>Tailwind</span>
//         <span>Styled Component</span>
//       </div>
//     </div>
//   );
// }

function Stack() {
  return (
    <div className="accordion-container">
      {Array.from({ length: 3 }, (_, i) => (
        <span
          style={{ transform: `translateX(${i * 100}%)` }}
          className={`accordion accordion-${i + 1}`}
        >
          Content {i + 1}
        </span>
      ))}
    </div>
  );
}

export default Stack;
