
import React from 'react';
import '../../src/App.css';


class ProjectsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projectsList: [] };
  }

  componentDidMount() {
      fetch('https://p7zlxmo2qk.execute-api.us-east-1.amazonaws.com/dev/api/Projects')
      .then(response => response.json())
      .then(data => {
          this.setState({projectsList: data})
      })
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
                    <td>{proj.title}</td>
                    <td>{proj.description}</td>
                    <td><a href={proj.sourceLink}>Click Here</a></td>
                    <td><a href={proj.demoLink}>Click Here</a></td>
                </tr>
          
              )}
           </tbody>
              
          </table>
        
        </div>
    
    ) 
  }
}
export default ProjectsTable
