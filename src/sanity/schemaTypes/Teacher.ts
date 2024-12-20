
export const teacher = {
    name: "teacher", //schema name
    type: "document", //schema type
    title: "Teacher Profile", //title / label of schema
    fields: [ // input
        { //name field
            name: "name",
            type: "string",
            title: "Teacher Name",
            validation: rule => rule.required().error("please write name first"),
        },
        {//age field
            name: "age",
            type: "number",
            title: "Teacher Age",
            hidden: ({ document }:any) => document.name === "hamza", // this is conditional field
            readOnly: ({ document }:any) => document.name === "sarmad" // this is conditional field
        },
        { // subject field, it is reference from subject schema,means in specific field we use use whole schema, by using reference
            name: "subject",
            type: "reference",
            title: "Select subject",
            to: [{ type: "subjects" }],
             hidden: ({ document }:any) => document.age >=20,
        },
        {
            name: "student",
            type: "reference",
            title: "Select student",
            to: [{ type: "student" }]
        },
        { //description field
            name: "description",
            type: "string",
            title: "Description",
            validation: rule => rule.required().min(2).max(10)
        },
    ]
}
