import './App.css';
import ProjectCard from './ProjectCard';
import AdaptiveCard from './AdaptiveCard';
import projects from './Projects';
import { TextWeight } from 'adaptivecards';

function App() {

  const projectSorted = [...projects.list].sort((a, b) =>
    a.no > b.no ? 1 : -1,
  );

  const projectColumns = [];
  const maxColumns = 3;

  for (var i = 0; i < maxColumns; i++) {
    projectColumns[i] = projectSorted.filter(x => (x.no - 1) % maxColumns === i);
  }

  return (
    <div className="App">

      <h3 >Project Catalog</h3>

      <header >
        <div class="row">
          {projectColumns.map((projectColumn) => {
            return (
              <div class="column">
                {projectColumn.map((project) => (
                  <div style={{ maxWidth: '500px', padding: '5px' }} class="border-shadow">
                    <AdaptiveCard card={ProjectCard} data={project} />
                  </div>
                ))}
              </div>);
          })}
        </div>
      </header>
    </div>
  );
}

export default App;
