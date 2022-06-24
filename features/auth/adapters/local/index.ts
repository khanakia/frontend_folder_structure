export const MenuItems = [
  {
    "name": "Home",
    "href": "/"
  },

  {
    "name": "About",
    "href": "/about"
  }
]


// Sometimes data needs some function to populat the values
export const MenuItemsAsFunc = ({getRoute}) => {
  [
    {
      "name": "Home",
      "href": getRoute("/")
    },
  
    {
      "name": "About",
      "href": getRoute("/about")
    }
  ]
}