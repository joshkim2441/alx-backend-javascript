/**
 * Retrieves an array of student IDs
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - the list of students
 * @returns an array of IDs from a list of objects
 */

export default function getListStudentIds(students) {
    if (students instanceof Array) {
        return students.map((student) => student.id); /* Return an empty array if
        argument is not an array */
    }
    return []; /* Use map to extract 'id' property from
    each object */
}
