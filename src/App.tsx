import React from 'react';
import './App.css';
import Data from './CollegeBasketballTeams.json';

interface TeamProps {
  tid: number;
  cid: number;
  did: number;
  school: string;
  name: string;
  abbrev: string;
  pop: number;
  city: string;
  state: string;
  latitude: number;
  longitude: number;
}

// interface BandProps {
//   name: string;
//   members: string;
//   formed: number;
// }

// const bandNames = [
//   { name: 'Cold Play', members: 'guy 1, guy2', formed: 2000 },
//   { name: 'owl city', members: 'Adam Young', formed: 2010 },
//   {
//     name: 'Colony House',
//     members: 'Kaleb',
//     formed: 2016,
//   },
//   {
//     name: 'narvana',
//     members: 'Kurt Cobian, Dave, Krist',
//     formed: 1987,
//   },
// ];

function Welcome() {
  return <h1>Welcome! This is a list of all the teams in March Madness!</h1>;
}

class Team extends React.Component<TeamProps> {
  render() {
    const oneTeam = this.props;

    return (
      <div>
        <img src="" alt="" />
        <h2>School: {oneTeam.school}</h2>
        <h3>Mascot: {oneTeam.name}</h3>
        <h3>
          Location: {oneTeam.city} {oneTeam.state}{' '}
        </h3>
      </div>
    );
  }
}

// the return has to retun one item in this case is the dive. so everytihng has to be containd in one html element like a div
function TeamList() {
  return (
    <div>
      {Data.teams.map((oneTeam: TeamProps) => (
        <Team key={oneTeam.tid} {...oneTeam} />
      ))}
    </div>
  );
}

// you can use emmpy tags <> </> to enclose elements in these funciton that render mulitple elements
function App() {
  return (
    <div className="App">
      <>
        <Welcome />
        <TeamList />
      </>
    </div>
  );
}

export default App;
