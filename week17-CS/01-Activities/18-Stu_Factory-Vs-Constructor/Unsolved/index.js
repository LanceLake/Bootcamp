// TODO: Refactor the class to a factory function.
class Lesson {
  constructor() {
    this.title = 'Module 17 - Computer Science';
    this.description = 'CS for JS';
  }
  information() {
    console.log(this.title, this.description);
  }
}

// Answer
function LessonFactory() {
    const title = 'Module 17 - Computer Science';
    const description = 'CS for JS';

	return {
	information(){
		console.log(`${state.title} is the title and the description is ${state.description}`)
		},
	};
}

const lesson1 = new Lesson();
const lesson2 = LessonFactory();

lesson1.information();
lesson1.title;
lesson1.description;

lesson2.information();