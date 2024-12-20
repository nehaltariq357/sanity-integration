export const student = {
    name: "student", //schema name
    type: "document", //schema type
    title: "Student Profile", //title / label of schema
    fields: [ // input
        {
            name: "name",
            type: "string",
            title: "Student Name"
        },
        {
            name: "age",
            type: "number",
            title: "Student Age"
        },
        {  // select gender field
            name: "gender",
            type: "string",
            title: "Gender",
            initialValue: "Gender",
            options: {
                list: [
                    {
                        title: "Male",
                        value: "male"
                    },
                    {
                        title: "Female",
                        value: "femal"
                    },

                ],
                layout: "radio"  //default is dropdown , but we are using radio
            }
        },
        { //image field
            name: "image",
            type: "image",
            title: "Student Image",
        },
        {   // add items field
            title: 'Hobby',
            name: 'hobby',
            type: 'array',
            of: [{ type: 'string' }],

        },
        // Presented as a tokenizing tag-field
        { //tags field
            title: 'Tags',
            name: 'tags',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags'
            }
        },
        {// date of birth selection field
            title: 'Date Of Birth',
            name: 'birthday',
            type: 'date'
          },
          { //upload file field
            title: 'Manuscript',
            name: 'manuscript',
            type: 'file',
            fields: [
              {
                name: 'description',
                type: 'string',
                title: 'Description'
              },
              
            ]
          },
          {//  address field
            title: 'Address',
            name: 'address',
            type: 'object',
            fields: [
              {name: 'street', type: 'string', title: 'Street name'},
              {name: 'streetNo', type: 'string', title: 'Street number'},
              {name: 'city', type: 'string', title: 'City'}
            ]
          },
          { // url field
            title: 'Image URL',
            name: 'imageUrl',
            type: 'url'
          },
          { // check box field
            title: 'Category Set',
            name: 'categorySet',
            type: 'array',
            of: [{type: 'string'}],
            options: {
              list: [
                {title: 'Building', value: 'building'},
                {title: 'Master plan', value: 'masterPlan'},
                {title: 'Infrastructure', value: 'infrastructure'},
                {title: 'Private Home', value: 'privateHome'}
              ]
            }
          }

    ]
}