import {MAKE_GUESS, NEW_GAME} from '../actions';

const initialState = {
    guesses: [],
    correctAnswer: Math.round(Math.random() * 100) + 1,
		feedback: 'Make your guess',
		auralStatus: ''
}


export const makeGuessReducer = (state=initialState, action) => {
	if(action.type === MAKE_GUESS) {
		action.guess = parseInt(action.guess, 10);
	    if (isNaN(action.guess)) {
	      return { 
	      	...state,
	      	feedback: 'Please enter a valid number' 
	      };
			}

	    const difference = Math.abs(action.guess - state.correctAnswer);

	    let feedback;
	    if (difference >= 50) {
	      feedback = 'You\'re Ice Cold...';
	    } else if (difference >= 30) {
	      feedback = 'You\'re Cold...';
	    } else if (difference >= 10) {
	      feedback = 'You\'re Warm.';
	    } else if (difference >= 3) {
	      feedback = 'You\'re Hot!';
	    } else {
	      feedback = 'You got it!';
			}
			
			const guesses = [...state.guesses, action.guess]
			const pluralize = guesses.length !== 1;
			let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
			const revGuess = [...guesses];
			auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${revGuess.reverse().join(', ')}`;
			
		return {
			...state,
			guesses,
			feedback,
			auralStatus
		}
	}

	if(action.type === NEW_GAME) {
		return initialState
	}
	return state;
}

