import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

export default function app() {
  const {appId} = useParams()
  const georgianFilms = ["shuaqalaqi", "ChemiColisDaqalebi", "Qerchi"]
  return  (
    <div>
      App{appId}{seaHorses[appId]}
    </div>
  )
}