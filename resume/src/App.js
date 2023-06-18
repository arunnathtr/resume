import './App.css';
import ProjectCard from './ProjectCard';
import AdaptiveCard from './AdaptiveCard';
import projects from './Projects';

function App() {

  const projectSorted = [...projects.list].sort((a, b) =>
    a.no < b.no ? 1 : -1,
  );

  const projectFilterLeft = projectSorted.filter(x => x.no % 2 == 0);
  const projectFilterRight = projectSorted.filter(x => x.no % 2 == 1);

  return (
    <div className="App">

              <h4 style={{textAlign :'left'}}>Project Catalog</h4>

      <header className="App-header">
        <div class="row">
          <div class="column">
            {projectFilterLeft.map((project) => (
              <div style={{ maxWidth: '400px', padding: '5px' }} class="border-shadow">
                <AdaptiveCard card={ProjectCard} data={project} />
              </div>
            ))}
          </div>

          <div class="column">
            {projectFilterRight.map((project) => (
              <div style={{ maxWidth: '400px', padding: '5px' }} class="border-shadow">
                <AdaptiveCard card={ProjectCard} data={project} />
              </div>
            ))}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
