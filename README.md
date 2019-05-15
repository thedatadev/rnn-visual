# RNN Visualisation

Visualisation of RNN classification segments in text and classification stability

TODO:
  - 1. Setup (from scratch)
    - redux
    - hmr
    - code organisation
  - 2. Components
    - welcome page
      - instruction
      - model and data selection
    - monitor
      - loading spinner
      - text list
      - text cell
      - oscillatory graph
      - final prediction
  - 3. Model server
    - flask endpoints
      - receive model name
      - receive dataset name
      - server side events
      - file i/o

NOTES:
  - Setup
    - Followed setup from scratch: https://medium.freecodecamp.org/part-1-react-app-from-scratch-using-webpack-4-562b1d231e75
    - Due to changes in babel, must now specify babel version: https://stackoverflow.com/questions/52067944/cannot-find-module-babel-core/52067984
    - Can also add a "--hot" flag to webpack-dev-server for HMR
