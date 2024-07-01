/**
 * Retrieves an array of student IDs
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - the list of students
 * @returns an array of IDs from a list of objects
 */

export default function getListStudentIds(arr) {
    if (!Array.isArray(arr)) {
        return []; /* Return an empty array if
        argument is not an array */
    }
    return arr.map(obj => obj.id); /* Use map to extract 'id' property from
    each object */
}
