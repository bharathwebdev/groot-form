import React from "react";
import { useState } from "react";
import "./question.scss";
import supabase from "../supabase";

function Questions() {
  const [counter, setcounter] = useState(0);
  const [btn, setbtn] = useState(false);
  const obj = [
    {
      q: "question two",

      ans: ["choice 1", "choice 2", "choice 3"],
    },
    {
      q: "question three",

      ans: ["choice 1", "choice 2", "choice 3"],
    },
  ];

  const curobj = [
    {
      q: "Are we meeting today?",

      ans: ["choice 1", "choice 2", "choice 3"],
    },
  ];
  const [cobj, setcobj] = useState([
    {
      q: "Are we meeting today?",

      ans: ["choice 1", "choice 2", "choice 3"],
    },
  ]);
  const len = obj.length;
  console.log(len);
  const handleclick = (e, ind, counter) => {
    e.preventDefault();

    if (ind < len) {
      if (ind == counter) {
        setcobj((pre) => [...pre, obj[counter]]);

        setcounter((pre) => pre + 1);
      }
    } else {
      setbtn(true);
    }
    // console.log("index =  ",ind,'counter ==',counter)
  };

  const allclear = async()=>{

    const { error } = await supabase
    .from('verify')
    .update({ value: false })
    .eq('id',1 )

  }


  const [next, setNext] = useState(false);

  const handleclicknext = async(e) => {
    e.preventDefault();
    
    allclear()

    const { error } = await supabase
    .from('verify')
    .insert([{ id: 1, pid: 'bharath' ,value:false}])
  
    if(error){
        console.log(error)
    }
    setNext(true);
  };

  const onsubmitall = async(e)=>{
    e.preventDefault(); 


const { error } = await supabase
.from('verify')
.update({ value: true })
.eq('id',1 )

  }


  return (
    <div>
      {!next && (
        <form>
          <input type="text" required />
          <button onClick={handleclicknext}>next</button>
        </form>
      )}

      {next && (
        <div>
          <form>
            <ul class="chat-thread">
              {cobj.map((data, ind) => {
                return (
                  <>
                    <div>
                      <li>
                        {data.q}
                        <div>
                          {data.ans.map((data) => {
                            return (
                              <button
                                onClick={(e) => handleclick(e, ind, counter)}
                              >
                                {data}
                              </button>
                            );
                          })}
                        </div>
                      </li>
                    </div>
                  </>
                );
              })}
              {/* <li>
          Are we meeting today?
          <div>
            <button>choice 1</button>
            <button>choice 2</button>
            <button>choice 3</button>
          </div>
        </li> */}
            </ul>
            {btn && <button onClick={onsubmitall}>submit</button>}
          </form>
        </div>
      )}
    </div>
  );
}

export default Questions;
