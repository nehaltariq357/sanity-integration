import { defineField, defineType } from "sanity"
// definetypesand definefield gives auto suggestion,

export const Subject = defineType(
    {
        name: "subjects",
        type: "document",
        title: "Subjects",
        fields: [
            defineField({
                name: "subject",
                type: "string",
                title: "Enter Subject"
            })
        ]
    }
)