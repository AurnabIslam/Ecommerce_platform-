/******* GLOABL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

const settings = {
  notifySeatsRemaining: 5,
  coursesPerPage: 3,
  imagePath: 'img/'
}

const shoppingCart = [
  {courseid: 101, qty: 1}
];

const allCourses = [
  { // 0
    id: 101, 
    name: `Tools and Workflow`,
    code: `WDDM-115`,
    instructor: `Kadeem Best`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160,
    category: null,
    available: 6,
    image: 'whatever.jpg'
  },{  // 1
    id: 102, 
    name: `Applied Web Development`,
    code: `WDDM-113`,
    instructor: `Rocco Panacci`,
    start: { term: `Winter`, year: 2020 },
    weeks: 12,
    breaks: true,
    duration: 160,
    category: `development`,
    available: 2
  },{ // 2
    id: 103, 
    name: `Applied Web Design`,
    code: `WDDM-114`,
    instructor: `Rocco Panacci`,
    start: { term: `Fall`, year: 2019 },
    weeks: 8,
    breaks: false,
    duration: 160,
    category: `design`,
    available: 12
  },{ // 3
    id: 104, 
    name: `Design Technique`,
    code: `WDDM-116`,
    instructor: `Milorad Eftoski`,
    start: { term: `Fall`, year: 2019 },
    weeks: 15,
    breaks: true,
    duration: 160,
    category: `design`,
    available: 0
  },{ // 4
    id: 105, 
    name: `Prototyping`,
    code: `WDDM-117`,
    instructor: `Cory Coletta`,
    start: { term: `Fall`, year: 2019 },
    weeks: 3,
    breaks: true,
    duration: 160,
    category: `development`,
    available: 10
  }
];


/************* FUNCTIONS *************/
// Now store all the functions that will manipulate the data


// UTILITY FUNCTIONS **************
const getDurationFromMinutes = minutes => {
  
  const hrs = Math.floor(minutes / 60);
  const mins = minutes % 60;
  // const mins = minutes - hrs * 60; // Could also use this

  return `${hrs} hr, ${mins} min`;
}

const addItemToCart = courseid => {
  // [ {courseid: 101, qty: 1} ]

  const cartItem = shoppingCart.find(item => item.courseid == courseid);

  if (cartItem) {  // if a cartItem was found
    cartItem.qty++;
  } else {
    shoppingCart.push({courseid: courseid, qty: 1});
  }
  
  // if (this id already exist in the Array) {
  //   Update the quantity of the item
  // } else if (it does not exist) {
  //   Add a new item to the shoppingCart
  // }

  // Is it important to return a value here? 
  //    Why would we? Why not?
  // What else might we need/want this function to do? 
  //    If anything, weigh the pros/cons of doing it here vs elsewhere
}

// Sorting order function
const loadCoursesByOrder = (arrToSort, criteria) => {

  const sortedCourses = arrToSort.slice(); // clone the array

  if (criteria == 'weeksAsc') {
    // Smallest to largest
    sortedCourses.sort((a, b) => a.weeks - b.weeks);
  } else if (criteria == 'weeksDesc') {
    // Largest to smallest
    sortedCourses.sort((a, b) => b.weeks - a.weeks);
  } else if (criteria == 'nameAsc') {
    // Largest to smallest
    sortedCourses.sort((a, b) => a.name.localeCompare(b.name));
  } else if (criteria == 'nameDesc') {
    // Largest to smallest
    sortedCourses.sort((a, b) => b.name.localeCompare(a.name));
  }

  return sortedCourses; // new array
}

// Filter
const runTheFilter = theForm => {

  const categoryToSearch = theForm.elements.categoryName.value;
  const nameToSearch = theForm.elements.courseName.value;
  const semesterToSearch = theForm.elements.semester.value;

  console.log(theForm.elements)

  // Filter all courses in multiple
  const filteredCourses = allCourses
    .filter(c => c.name.toLowerCase().includes( nameToSearch.trim().toLowerCase() ))  // filter by name
    .filter(c => c.category == categoryToSearch || categoryToSearch == "all")         // filter by category
    .filter(c => `${c.start.term } ${c.start.year}` == semesterToSearch || semesterToSearch == "all");        // filter by semester

  renderCoursesFromArray(filteredCourses);
}



// EVENT HANDLER FUNCTIONS **************

// Change the course layout from grid to rows 
const toggleCourseView = event => {
  document.getElementById('courses').classList.toggle('grid-view');
}

// If a course button was pressed
const loadCoursesFromTerm = event => {
  const justFall2019 = allCourses.filter(c => c.start.term == `Winter` && c.start.year == 2020);
  renderCoursesFromArray(justFall2019);
}

// If a "register" button is clicked
const handleClickOfCourses = event => {
  if (!event.target.matches('button.course-register')) {
    return;
  }
  const courseid = parseInt(event.target.dataset.courseid);
  addItemToCart(courseid);
}

// When the filter form itself is submit...
const filterTheCourses = event => {
  event.preventDefault(); // Prevent the submit form refreshing
  runTheFilter(event.target);
}

// When a filter form component is submit...
const submitTheFilterForm = event => {
  //document.getElementById('filtersForm').submit();
  runTheFilter(event.target.form);
}

// When sorting, ensure the filters run first (which leads to a render)
const sortTheCourses = event => {
  runTheFilter(document.getElementById('filtersForm'));
}


// NOTE, COULD ALSO RUN THE FILTER FROM THE RENDER IF THE RENDER KNOWS WHICH FORM IT SHOULD CHECK FIRST
// OR, COULD HAVE THE FORM SUBMIT AUTOMATICALLY WITH A SORT, WHICH IS POSSIBLY CLEANER



// FUNCTIONS THAT BUILD OUR VIEW **************

/*  Function: getCourseAsHtmlString
    Parameters: course:Object
    Return: String of HTML (<article>)
    Description: Allows our courses to be built using a template (for map())  */
const getCourseAsHtmlString = course => {

  let callout = ``;
  let soldout = ``;
  let register = `<button type="button" class="course-register" data-courseid="${course.id}">Register</button>`;
  if (course.available <= 0) {
    callout = `<small class="callout">Sold out</small>`;
    soldout = `soldout`;
    register = ``;
  } else if (course.available < settings.notifySeatsRemaining) {
    callout = `<small class="callout urgent">Limited seats remaining</small>`;
  }

  return `
    <article class="course ${(course.category) ? `cat-${course.category}` : ''} ${soldout}">
      <h3 id="name">${course.name} ${callout}</h3>
      <img src="${settings.imagePath + course.image}" alt="${course.name}">
      <ul class="course-info">
        <li>Course Code: <strong>${course.code}</strong></li>
        <li>Instructor: <strong>${course.instructor}</strong></li>
        <li>Start: <strong>${course.start.term} ${course.start.year}</strong></li>
        <li>
          Weeks: <strong>${course.weeks}</strong>
          <ul>
            <li>Includes Break: <strong>${(course.breaks) ? 'Yes' : 'No'}</strong></li>
          </ul>
        </li>
        <li>Duration: <strong>${getDurationFromMinutes(course.duration)}</strong></li>
      </ul>
      ${register}
    </article>`;
}

const renderCoursesFromArray = arr => {

  // 1. SORT!!!
  const sortBy = document.getElementById('sortOrder').value;    // dropdown value
  arr = loadCoursesByOrder(arr, sortBy);  // sort the courses, reassign the new Array

  // 2. PAGINATE
    // How many pages do we need? 
    //  totalNumCourses / coursesPerPage
    //    Round this^ up to the next integer
    
    // TEST EXAMPLE:  10 courses / 3 coursesPerPage = 4 pages required
    //    Page 1:   0, 1, 2
    //    Page 2:   3, 4, 5
    //    Page 3:   6, 7, 8
    //    Page 4:   9

    // Therefor...
    // Index of the first course on each page: 
    //    firstIndexOnThisPage = (pageNum - 1) * coursesPerPage
    // Index of the last course on each page:
    //    lastIndexOnThisPage = firstIndexOnThisPage + coursesPerPage
    //      (Remember that slice() excludes the last index.)


  // 3. BUILD OUTPUT
  if (arr.length > 0) {
    document.getElementById('courses').innerHTML = arr.map(getCourseAsHtmlString).join('\n'); // Print courses  
  } else {
    document.getElementById('courses').innerHTML = 'Sorry, no matching results.' // Woops!
  }

  document.getElementById('numResults').innerHTML = `(${arr.length} ${(arr.length == 1) ? 'result' : 'results'})`; // Display number of total results
  
}


/************* EXECUTABLE *************/

window.addEventListener('load', () => {

  // The course elements
  renderCoursesFromArray(allCourses);

  // UI elements
  document.getElementById('courseView').addEventListener('click', toggleCourseView);
  document.getElementById('fallCourses').addEventListener('click', loadCoursesFromTerm);
  document.getElementById('courses').addEventListener('click', handleClickOfCourses);
  document.getElementById('sortOrder').addEventListener('change', sortTheCourses);

  // The filter form
  document.getElementById('filtersForm').addEventListener('submit', filterTheCourses);

  // The filter form components
  document.getElementById('courseName').addEventListener('input', submitTheFilterForm);
  document.getElementById('categoryName').addEventListener('change', submitTheFilterForm);
  document.querySelectorAll('[name="semester"]').forEach(radbtn => radbtn.addEventListener('change', submitTheFilterForm));

});


// Still to discuss: Arrays within our courses