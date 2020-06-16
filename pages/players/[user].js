import firebase from 'firebase/app';
import db from '../../firebaseApp';
import 'firebase/database'

import { useList, useObjectVal } from 'react-firebase-hooks/database';

import Layout from '../../components/MyLayout';

const notes = {
  "ocean": "you control panoramic balance of the main voice track. 0.5 is center. be sure to explore both slow and quick movements.",
  'davina': "echo time (fast clap vs slow clap) : this effect has wacky results. have fun with it. turn it down when you want the sound to be less affected...",
  'stefanie': "echo feedback: how long the echoes ring out for. when this is turned up high, the echoes will ring out for a long time. be sure to explore the range of values",
  'madi': "frequency cutoff of the low-pass filter. when this is turned down, it will sound like the voice is in a tunnel or underwater. explore movement that is both fast and slow. recommend starting at 1.0 (unaffected).",
  'grace': "echo signal style: this control is a bit harder to hear. the slider cycles through different emulations of classic delay effects. if you turn it all the way to the right, the delay will sound like a radio signal",
  'sam': "echo signal saturation: this control is a bit harder to hear. it controls how over-driven the echo signal will be. listen carefully, especially when there are lots of echoes...",
  'maritza': "dry/wet control of reverb effect. 1.0 will be all reverb and will sound like a cavern. Mikhail controls cavern size.",
  'mikhail': "size of the reverb space. think of it like a cave. you are collaborating with maritza on the reverb effect.",
  'ashley': "pitch of the voice-clone track. recommend starting at 0.5 and exploring both slow and fast changes. you will only hear changes if oswaldo has the voiceclone volume up/audible",
  'maya': "your slider controls the shift mode of the voice-clone track. there are three modes: 0: pitch transpose, 0.5: auto-tune, 1.0: robot voice. you will only hear changes if oswaldo has the voice-clone volume up/audible",
  'oswaldo': "volume of the voice-clone track. ashley and maya are controlling settings.",
  'breana': "you control the panning (left/center/right) of the voice-clone track. you will only hear changes if oswaldo has the voice-clone volume up/audible",
  'max': "you control track-level compression. recommend starting at 0.0.",
  'jiahui': "your control is disabled at this point because you were not participating on Friday. Sorry!",
  'maiqi': "you control part of the pitch of the synth drone-- you and crystal are both controlling pitch... if your sliders are close in value, the pitch will be more even-- otherwise there will be rhthmic 'beating' sounds in the synth. you will only hear changes if mckenna has the synth volume up.",
  'crystal': "you control part of the pitch of the synth drone-- you and maiqi are both controlling pitch... if your sliders are close in value, the pitch will be more even-- otherwise there will be rhthmic 'beating' sounds in the synth. you will only hear changes if mckenna has the synth volume up.",
  'michelle': "your control is disabled at this point because I ran out of time to add mapping for you. sorry! hope you are feeling better!",
  'mckenna': "you control the volume of the synth drone. recommend you start at 0.0 and fade it in and out as you wish.",
  'yichen': "your control is disabled at this point. ran out of time to add mapping for you. Sorry!",
  'bristol': "you control over-drive for the whole track. this will make the whole track sound freaky distorted like a rock-n-roll guitar solo. recommend you start at 0.0 and fade this effect in and out as you wish. it will sound cool on maiqi's singing part!"
}

const Controller = props => {
  const [val, loading, error] = useObjectVal(db.ref(props.user));

  const changeFilter = (e)=> {
    db.ref(props.user).set(e.target.value/1000);
  }

  return (!loading && !error &&
  <Layout>
    <div className="slide-container">
      <h2>participant: {props.user} : {val}</h2>

      <input type="range" min="0" max="1000" className="slider" id="myRange"
        value={val*1000}
        onChange={changeFilter} />

    </div>
    <section>
      <p>
        {notes[props.user]}
      </p>
    </section>

    <a href="https://listento.audiomovers.com/sessions/?sess_id=0b0ca3b2d517f163b369cb0df170c50f#5da10000c0d43b52" target="_blank">
      Live Audio Stream
    </a>


  </Layout>
  )
}

Controller.getInitialProps = async function(context) {
  const { user } = context.query;
  return { user };
};

export default Controller
