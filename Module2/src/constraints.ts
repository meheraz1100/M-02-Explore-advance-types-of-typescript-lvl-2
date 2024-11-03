{
  const adCourseToStudent = <T extends {id: number; name: string; email: string}>(student: T) => {
    const course = "Next Level Web Development";
    return {
      ...student,
      course,
    };
  };

  const student3 = adCourseToStudent({id: 43245, name: 'Mr. Z', email: 'z@gmail.com', emni: 'emni'})

  const student1 = adCourseToStudent<{
    id: number;
    name: string;
    email: string;
    devType: string;
}>({
    id: 33524,
    name: "Mr. X",
    email: "x@gmail.com",
    devType: "NLWD",
  });
  const student2 = adCourseToStudent({
    id: 3423,
    name: "Mr. Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });
}
