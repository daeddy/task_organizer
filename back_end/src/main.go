package main

import (
	"back_end/src/models"
	"back_end/src/routes"
)

func main() {
	database := models.ConnectDatabase()

	r := routes.SetupRouter(database)
	r.Run(":8080")
}
