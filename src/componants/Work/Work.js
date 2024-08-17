import { Component } from "react";
import "./Work.css";
import axios from "axios";



class Work extends Component {


  state = {
    works: []
  }

  componentDidMount() {
    axios.get("js/data.json").then(res => this.setState({works: res.data.works}))
  }

  render() {

  const {works} = this.state;


  const WorksList = works.map((work) => {
    return (
      
                 <div id="work" className="part first" key={work.id}>
                    <i className={work.icon_name}></i>
                    <h4 className="part-title">{work.title}</h4>
                    <hr className="line" />
                    <p className="part-desc">
                    {work.body}
                    </p>
                  </div>

             )

    })




    return (
     
      <div className="work">
           <div className="container">
                  <h2 className="work-title">
                    <span>My</span> Work
                  </h2>
                  {WorksList}
             </div>
        
        </div>
          
          
        
    
    )

    }
 
    

  }
    

    
    

export default Work;
