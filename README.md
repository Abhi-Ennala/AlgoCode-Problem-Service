




# How routing works in this project
  - /api/v1/problems/ping
    - because the route starts with /api
      /api         /v1         /problems        /ping
      apiRouter -> v1Router -> problemRouter -> problemController -> service layer

