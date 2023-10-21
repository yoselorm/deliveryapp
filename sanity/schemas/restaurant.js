export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: "name",
      type: "string",
      title: "Restaurant name",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      type: "string",
      title: "Short description",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "image",
      type: "image",
      title: "Image of restaurant",
    },
    {
      name: "lat",
      type: "number",
      title: "latitude of the restaurant",
    },
    {
      name: "long",
      type: "number",
      title: "longitude of the restaurant",
    },
    {
      name: "address",
      type: "string",
      title: "restaurant address",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      type: "number",
      title: "Enter a rating from 1 to 5",
      validation: (Rule) => Rule.required().min(1).max(5).error("please enter a value between 1 and 5"),
    },
    {
      name: "type",
      type: "reference",
      title: "Category",
      validation: (Rule) => Rule.required(),
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      validation: (Rule) => Rule.required(),
      of: [{ type: "reference", to: [{ type: "dish" }] }]
    },






  ],


}
