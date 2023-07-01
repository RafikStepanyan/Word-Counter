import { useReducer, useState } from 'react';
import './index.scss';
import { reducer, initialState, colors } from './reducer';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { colorType } from './type';

function App(): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState('');
  //test
  return (
    <div className="app" style={{ background: state.color }}>
      <div className='control'>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" value={text} onChange={(e) => {
          setText(e.currentTarget.value);
        }} />
        <Button variant='contained' color='primary' onClick={() => {
          dispatch({ type: 'count', payload: text });
          setText('');
        }}>Count</Button>
        <Button variant='contained' color='error' onClick={() => {
          dispatch({ type: 'reset' });
        }}>Reset</Button>
        <select onChange={(e) => {
          console.log(e.currentTarget.value);
          dispatch({ type: 'color', payload: e.currentTarget.value });
        }}>
          {
            colors?.map((e: colorType, i: number) => {
              return <option key={i} value={e.code}>{e.name}</option>;
            })
          }
        </select>
      </div>
      <div className='result'>
        <h1>Result</h1>
        <h2>text: {state.text}</h2>
        <h2>letters: {state.letters}</h2>
        <h2>words: {state.words}</h2>
        <h2>sentences: {state.sentences}</h2>
      </div>
    </div>
  );
}

export default App;
