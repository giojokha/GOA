import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

export default function app() {
  const {appId} = useParams()
  const seaHorses = ["seahorse1", "seahorse2", "seahorse3"]
  return  (
    <div>
      App{appId}{seaHorses[appId]}
    </div>
  )
}