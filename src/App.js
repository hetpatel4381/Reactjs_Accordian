import { useState } from 'react';
import './App.css';

function App() {

  const [selected, setSelected] = useState(null);

  const toggle = (i) =>{
    if(selected === i){
      return setSelected(null);
    }

    setSelected(i);
  }

  return (
    <div className="wrapper">
      <div className='accordian'>
        {data.map((item, index) => {
          return (
            <div className="item">
              <div className="title" onClick={() => toggle(index)}>
                <h2>{item.question}</h2>
                <span>{selected === index ? '-' : '+'}</span>
              </div>
              <div className={selected === index ? "content show": "content"}>
                {item.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;


const data = [
  {
    question: "Question 1",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nostrum dicta molestias soluta suscipit totam veritatis a, quis dolor rerum possimus reprehenderit itaque error necessitatibus nisi, deleniti exercitationem. Natus minima nam temporibus reiciendis. Voluptatem a recusandae, at excepturi harum provident deleniti minus illum placeat reprehenderit, iusto iure voluptate, earum quis. ",
  },
  {
    question: "Question 2",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nostrum dicta molestias soluta suscipit totam veritatis a, quis dolor rerum possimus reprehenderit itaque error necessitatibus nisi, deleniti exercitationem. Natus minima nam temporibus reiciendis. Voluptatem a recusandae, at excepturi harum provident deleniti minus illum placeat reprehenderit, iusto iure voluptate, earum quis. ",
  },
  {
    question: "Question 3",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nostrum dicta molestias soluta suscipit totam veritatis a, quis dolor rerum possimus reprehenderit itaque error necessitatibus nisi, deleniti exercitationem. Natus minima nam temporibus reiciendis. Voluptatem a recusandae, at excepturi harum provident deleniti minus illum placeat reprehenderit, iusto iure voluptate, earum quis. ",
  },
  {
    question: "Question 4",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nostrum dicta molestias soluta suscipit totam veritatis a, quis dolor rerum possimus reprehenderit itaque error necessitatibus nisi, deleniti exercitationem. Natus minima nam temporibus reiciendis. Voluptatem a recusandae, at excepturi harum provident deleniti minus illum placeat reprehenderit, iusto iure voluptate, earum quis. ",
  },
  {
    question: "Question 5",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et nostrum dicta molestias soluta suscipit totam veritatis a, quis dolor rerum possimus reprehenderit itaque error necessitatibus nisi, deleniti exercitationem. Natus minima nam temporibus reiciendis. Voluptatem a recusandae, at excepturi harum provident deleniti minus illum placeat reprehenderit, iusto iure voluptate, earum quis. ",
  },
  // Add more objects as needed
];

console.log(data);
