import './App.css';
import {NavBar} from "./Components/NavBar.jsx";
import {Card} from "./Components/Card.jsx";
import {Suspense, useEffect, useState} from "react";
import {SubThread} from "./Components/SubThread.jsx";
import TextEditor from "./Components/TextEditor.jsx";
import Footerimg from "./Components/Footerimg.jsx";
import {data} from "package.json";


function App() {

    console.log(data);
    const [Thread,setThread]=useState(false);
    const [Thread2,setThread2]=useState(false);
    const [Intro,setIntro]=useState(false);
    const [index,setIndex]=useState(1);
    const [subThreads,setsubThreads]=useState([<SubThread index={index}/>]);
    const [x,setX]=useState(true);



    const [Card1,setCrad1]=useState({
        header: "Technical Project Management",
        Description: "Story of Alignment Scope of Agility Specific Accountable Staggering Approach",
        Content: <img src={"src/assets/youtube.png"} className={"YtImg"}/>,
    });

    const [Card3, setCrad3] = useState({
        header: "Structure your Pointers",
        Description: "Write a 300 - 400 word article from your thread . Publish your understanding and showcase your understanding to the entire world ",
        Content:    <>
            <label htmlFor={"Title"} className={"Title"}>Title</label><br/>
            <input type={"text"} className={"Title_field"}/><br/>

            <label htmlFor={"Content2"} className={"Title"}>Content</label><br/>
            <div className={"Content2"}>
                <TextEditor/>
            </div>

        </>});
    /* const [items, setItems] = useState([]);

    useEffect(() => {
        setItems(data);
        console.log(data);
    }, []);*/


    return (

        <>

            <div className={"Nav"}>
                <NavBar/>
            </div>
            <div className={"main"}>
                {x &&

                  <aside className={"aside"}>
                    <div className={"aside-content"}>

                    </div>
                    <div className={"aside-content2"}>
                 <span className={"aside-content3"}>1</span>
              </div>
          </aside>}
                {!x &&

                    <aside className={"asidex"}>
                        <div className={"aside-contentx"}>
                           <p className={"jb"}>Journey Board</p>


                        </div>
                        <ul>
                            <li>Explore the world of management</li>
                            <li>Technical Project Management</li>
                            <li>Threadbuild</li>
                            <li>Structure your pointers</li>
                            <li>4SA Method</li>


                        </ul>

                    </aside>}

                <section className={"section"}>
                    <div className={"Intro"}>
                        <h1 className={"h1"}>Technical Project Management</h1>
                        <div className={"sub"}>
                            Submit task
                        </div>
                    </div>
                    <div className={"Intro2"}>
                    <h2 className={"sub1"}>Explore the world of management</h2>
                      <p className={"sub2"}>As a project manager, you play an important reole in leading a project
                          through initiation, planning, execution, monitoring, controlling and completion. How? Do you
                          want to
                          manage each and every step of your life?</p>

                  </div>
                  <div className={"BlocCard"}>

                      <Card details={Card1}/>
                  </div>
                  <div className={"BlocCard"}>
                      <Card details={{
                          header: "Threadbuild",
                          Description:"Watch the video and threadbuild, and jot out key threads while watching the video",
                          Content:<>

                          <div className={"C1"}     onClick={()=>{setThread(!Thread)}}>
                              {Thread &&    <span className={"symb"}>^</span>}
                              {!Thread &&  <span className={"symb"}>v</span>}
                          <span className={"Thread"}>Thread A</span>


                  </div>
                              {Thread && <>
                                  <div className={"C2"}>

                                      {subThreads}
                                  </div></>}


                  <div className={"C3"}>
                      <div className={"C3-1"}>
                          <img src={"src/assets/Group 1588.png"}/>

                      </div>
                      <div className={"C3-2"}>
                          <select>
                              <option>Select Categ</option>
                          </select>
                      </div>

                      <div className={"C3-3"}>
                          <select>
                              <option>Select Proces</option>
                          </select>
                      </div>

                  </div>
                  <div className={"C4"}>
                      <div className={"sub3"} onClick={()=>{
                          setIndex(index+1)
                          subThreads.push(<SubThread index={index}/>);
                          setThread(!Thread);
                      }}>
                          + Sub-thread
                      </div>
                  </div>
                  <div className={"C5"}>
                      <div className={"C5-Header"}>
                          Summary for Thread
                      </div>
                      <textarea className={"Enter_text"} placeholder={"Enter text here"}></textarea>

                  </div>

              </>
                }}/>
                  </div>
                  <br/>
                  <div className={"BlocCard"}>
                      <Card details={Card3}/>
                  </div>
                  <div className={"BlocCard"}>
                      <Card details={{
                          header: "4SA Method",
                          Description: "To Explore more read more",
                          Content:
                              <>
                                  <div className={"introduction"} onClick={()=>{setIntro(!Intro)}} >
                                      {Intro && <span className={"symb"}>^</span>}
                                      {!Intro && <span className={"symb"}>v</span>}
                                      <span>introduction</span>

                                  </div>
                                  {Intro &&
                                      <>
                                          <div className={"C42"}>
                                              The 4SA Method , How to bring a idea into progress
                                              <div className={"seeMore"}>See More</div>

                                          </div>
                                      </>
                                  }
                                  <div  className={"ThreadA2"} onClick={()=>{setThread2(!Thread2)}}>
                                      {Thread2 && <span className={"symb"}>^</span>}
                                      {!Thread2 && <span className={"symb"}>v</span>}
                                      <span className={"Thread2"}>Thread A</span>


                                  </div>
                                  {Thread2 &&
                                      <>
                                          <div className={"C42"}>
                                              How are you going to develop your stratergy ?
                                              Which method are you going to use to develop a stratergy ? What if the
                                              project is
                                              lengthy?
                                              <div className={"seeMore"}>See More</div>

                                          </div>
                                      </>


                                  }
                                  <div className={"Eg1"}>
                                      Example 1
                                  </div>
                                  <div className={"post_Eg1"}>
                                      You have a concept , How will you put into progress?
                                  </div>


                              </>
                      }}/>
                  </div>
                  <br/>


              </section>
              <aside className={"Right-aside"}>
                  <div className={"Right-aside-black"}>
                      <img src={'src/assets/x-01.png'} className={"x"} onClick={()=>{
                          setX(!x);
                      }}/>
                      <span className={"NB"}>N o t i c e B o a r d</span>
                  </div>


              </aside>
          </div>
            <Footerimg/>
      </>
  )
}

export default App
