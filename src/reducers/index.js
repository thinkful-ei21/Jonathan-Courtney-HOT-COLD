import {MAKE_GUESS, NEW_GAME} from '../actions';

const initialState = {
    guesses: [],
    correctAnswer: Math.round(Math.random() * 100) + 1,
    feedback: 'Make your guess'
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
		return {
			...state,
			guesses: [...state.guesses, action.guess],
			feedback
		}
	}

	if(action.type === NEW_GAME) {
		return {
			initialState
		}
	}
	return state;
}

