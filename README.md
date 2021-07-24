# M4-D3





Create a component called WarningSign which receives some text as a prop. This text should be presented inside an Alert of type danger.

Create a component called MyBadge which receives a text and a color as props. This component should render a Badge react-bootstrap component with those properties.

Create a SingleBook component as a function. The component receives a book object as a prop, and displays the cover and the title of the book. Use react-bootstrap Cards to display a book (The book object can be read from one of the .json book files we gave you yesterday).

Create a BookList component. This component receives by props a list of books and displays them using the SingleBook component.

Create a FilterBookList feature. By writing into an input field a search query, the BookList should show only the books with the specified string into the title (save the query into the BookList component state and filter the books accordingly).

Convert your SingleBook component to a class, and create its state containing a 'selected' boolean property.

Clicking on a SingleBook should toggle its 'selected' state property. If the 'selected' property is true, the SingleBook should have some styling that reflects that state change, visually.

