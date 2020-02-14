import { Server } from "miragejs";

//DEFINE MIRAGE SERVER
new Server({
  timing: 1000,
  seeds(server) {
    server.db.loadData({
      users: [
        {
          id: 0,
          firsname: "ahmed",
          lastname: "shawareb",
          email: "ahmed456@gmail.com",
          password: "555555"
        },
        {
          id: 2,
          firsname: "khaled",
          lastname: "shawareb",
          email: "khaled667@gmail.com",
          password: "777777"
        }
      ]
    });
  },
  routes() {
    this.get("/api/users", schema => {
      return schema.db.users;
    });
    this.post("/api/users", (schema, request) => {
      let newUser = JSON.parse(request.requestBody).data;
      return schema.db.users.insert(newUser);
    });
  }
});
