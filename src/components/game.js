import React from 'react';

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';
import {makeGuess, newGame} from '../actions';
import {connect} from 'react-redux';

export function Game(props) {

  return (
    <div>
      <Header
        onRestartGame={() => props.dispatch(newGame())}
      />
      <main role="main">
        <GuessSection
          guessCount={props.guesses.length}
          onMakeGuess={guess => props.dispatch(makeGuess(guess))}
          feedback={props.feedback}
        />
        <StatusSection 
          guesses={props.guesses}
          auralStatus={props.auralStatus}
        />
        <InfoSection />
      </main>
    </div>
  );
}

export const mapStateToProps = state => ({
  guesses: state.guesses,
  feedback: state.feedback,
  auralStatus: state.auralStatus
})

export default connect(mapStateToProps)(Game);



