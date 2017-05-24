# Battleship

A TDD multiplayer Battleship game IN PROGRESS. Building to get to grips with a MERN stack and web sockets. Developed in sprints: currently there is a functioning game with players fleets and boards showing on separate screens, with a simple player toggle button to switch between the two.
The next step is to implement web sockets so that players can battle each other online.  

# Built with

  - React
  - Node JS
  - MongoDB
  - Express
  - React-Router

# Testing

  - Enzyme
  - Chai
  - Sinon

# To Do

  - Web socket implementation
  - Styling
  - Endgame method
  - Turn method for determining who goes next

# Done

- Added App, Board, Cell, Fleet, Game, ownBoard and Switch classes.
- Minor Styling
- A player can select ships from their fleet and place them on their own board
- A player can toggle the orientation of a chosen ship before placing it
- A player cannot place a ship within one cell of another ship
- A player has a limited fleet size and cannot place more than the standard seven ships
- A player can see all the cells in their own board
- A player can see only fog for their enemies board
- A player can click on their enemies board to reveal a hit or miss

# Authors

Jack Henderson, Stefan Liute, Varvarra Shinkarenko
