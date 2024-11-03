import React from 'react';
import Adminindex from './components/adminindex';
import Blankpage from './components/blankpage';
import Charts from './components/charts';
import Icons from './components/icons';
import Maps from './components/maps';
import Profilepage from './components/profilepage';
import Signinpage from './components/signinpage';
import Signuppage from './components/signuppage';
import Uibuttons from './components/uibuttons';
import Uicards from './components/uicards';
import Uiforms from './components/uiforms';
import Uitypography from './components/uitypography';
import Upgradetopro from './components/upgradetopro';

function App() {
  return (
    <div className="App">
      <Adminindex />
      <Blankpage />
      <Charts />
      <Icons/>
      <Maps/>
      <Profilepage/>
      <Signinpage/>
      <Signuppage/>
      <Uibuttons/>
      <Uicards/>
      <Uiforms/>
      <Uitypography/>
      <Upgradetopro/>
    </div>
  );
}

export default App;
