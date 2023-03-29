import {
  ADD_STUDENT,
  REMOVE_STUDENT,
  UPDATE_STUDENT,
  ADD_MAJOR,
  REMOVE_MAJOR,
} from './actions';
import createId from './createId';

// TODO: Add a comment explaining what a reducer is
// Answer: A reducer is a function that takes the current state and an action as arguments, and returns a new state result. It is used to update the state of a component.

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_STUDENT: {
      const newStudentId = createId(state.students);

      const newStudent = { ...action.payload, id: newStudentId };

      return {
        ...state,
        students: [...state.students, newStudent],
      };
    }
    case REMOVE_STUDENT: {
      return {
        ...state,
        students: [...state.students].filter(
          (student) => student.id !== action.payload
        ),
      };
    }
    case UPDATE_STUDENT: {
      // TODO: Add a comment describing how we get the student index
	  // Answer: We use the findIndex() method to find the index of the student in the students array that matches the id of the student that was passed in the action payload.
      const studentIndex = state.students.findIndex(
        (student) => student.id === action.payload.id
      );

      // TODO: Add a comment describing what the spread operator is doing
	  // Answer: The spread operator is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return a new object.
      const updatedStudent = {
        ...state.students[studentIndex],
        ...action.payload,
      };

      const newStudentsList = [...state.students];

      newStudentsList[studentIndex] = updatedStudent;

      return {
        ...state,
        students: newStudentsList,
      };
    }
    case ADD_MAJOR: {
      // TODO: Add a comment explaining what this case is returning
	  // Answer: This case is returning a new state object with the new major added to the majors array.
      return {
        ...state,
        majors: [...state.majors, action.payload],
      };
    }
    case REMOVE_MAJOR: {
      // TODO: Add a comment explaining what this case is returning
	  // Answer: This case is returning a new state object with the major removed from the majors array.
      return {
        ...state,
        majors: [...state.majors].filter((major) => major !== action.payload),
      };
    }
    default:
      return state;
  }
}
