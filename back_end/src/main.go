package main

import (
	"back_end/src/handlers"
	"back_end/src/models"
	"back_end/src/routes"
	_ "back_end/tmp/docs" // This is required to import generated docs
)

// @title Task Organizer API
// @version 1.0
// @description This is a sample server for a task organizer.
// @termsOfService http://swagger.io/terms/

// @contact.name API Support
// @contact.url http://www.swagger.io/support
// @contact.email support@swagger.io

// @license.name Apache 2.0
// @license.url http://www.apache.org/licenses/LICENSE-2.0.html

// @host localhost:8080
// @BasePath /api/v1

//go:generate swag init --parseDependency --parseInternal --output ../tmp/docs
func main() {
	database := models.ConnectDatabase()

	// Seed initial data
	handlers.SeedData(database)

	r := routes.SetupRouter(database)
	r.Run(":8080")
}
