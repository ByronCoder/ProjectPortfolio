
import React from 'react';
import '../../src/App.css';
import { trackPromise } from 'react-promise-tracker';

class ProjectsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectsList: [] };
  }

  componentDidMount() {
    trackPromise(
      fetch('https://p7zlxmo2qk.execute-api.us-east-1.amazonaws.com/dev/api/Projects')
      .then(response => response.json())
      .then(data => {
          this.setState({projectsList: data})
      }))
  }

  render() {
    return(
      <div className="row">
          <table className="table table-dark">
            <thead>
              <tr>
                  <th>Project Name</th>
                  <th>Description</th>
                  <th>Source</th>
                  <th>Demo</th>
              </tr>
            </thead>
           <tbody>
              {this.state.projectsList.map((proj) => 
                <tr key={proj.id}>
                    <td className="cell-left">{proj.title}</td>
                    <td className="cell-left">{proj.description}</td>
                    <td><a href={proj.sourceLink}>Click Here</a></td>
              <td>{proj.demoLink !== "N/A" ? <a href={proj.demoLink}>Click Here</a> : proj.demoLink}</td>
                </tr>
          
              )}
           </tbody>
              
          </table>
        
        </div>
    
    ) 
  }
}
export default ProjectsTable
