import * as actions from '../actions';

const initialState = {
    guesses: [],
    correctAnswer: Math.round(Math.random() * 100) + 1,
    feedback: ''
}
