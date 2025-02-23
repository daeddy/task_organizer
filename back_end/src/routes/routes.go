package routes

import (
	"back_end/src/handlers"

	docs "back_end/tmp/docs"

	"github.com/gin-gonic/gin"
	swaggerfiles "github.com/swaggo/files"
	ginSwagger "github.com/swaggo/gin-swagger"
	"gorm.io/gorm"
)

func SetupRouter(db *gorm.DB) *gin.Engine {
	r := gin.Default()
	taskHandler := &handlers.TaskHandler{DB: db}

	docs.SwaggerInfo.BasePath = "/api/v1"

	v1 := r.Group("/api/v1")
	{
		g := v1.Group("/tasks")
		{
			g.POST("/", taskHandler.CreateTask)
			g.GET("/", taskHandler.GetTasks)
			g.GET("/:id", taskHandler.GetTask)
			g.PUT("/:id", taskHandler.UpdateTask)
			g.DELETE("/:id", taskHandler.DeleteTask)
		}
	}
	r.GET("/swagger/*any", ginSwagger.WrapHandler(swaggerfiles.Handler))

	return r
}
