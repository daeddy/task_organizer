package handlers

import (
	"net/http"

	"back_end/src/models"

	"github.com/gin-gonic/gin"
	"gorm.io/gorm"
)

type TaskHandler struct {
	DB *gorm.DB
} // @name TaskHandler

type TaskPagination struct {
	Pagination
	Rows []models.Task `json:"rows"`
} // @name TaskPagination

// @Summary Create a new task
// @Description Create a new task
// @Tags tasks
// @Accept json
// @Produce json
// @Param task body models.Task true "Task"
// @Success 201 {object} models.Task
// @Failure 400 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /tasks [post]
func (h *TaskHandler) CreateTask(c *gin.Context) {
	var task models.Task
	if err := c.ShouldBindJSON(&task); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := h.DB.Create(&task).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusCreated, task)
}

// @Summary Get a list of tasks
// @Description Get a list of tasks with pagination
// @Tags tasks
// @Accept json
// @Produce json
// @Param page query int false "Page number"
// @Param pageSize query int false "Page size"
// @Success 200 {object} TaskPagination
// @Failure 400 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /tasks [get]
func (h *TaskHandler) GetTasks(c *gin.Context) {
	var pagination TaskPagination
	if err := c.ShouldBindQuery(&pagination); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	var tasks []models.Task
	offset := pagination.GetOffset()
	limit := pagination.GetLimit()

	if err := h.DB.Offset(offset).Limit(limit).Find(&tasks).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}

	// Calculate total rows and pages
	var totalRows int64
	h.DB.Model(&models.Task{}).Count(&totalRows)
	totalPages := int((totalRows + int64(limit) - 1) / int64(limit))

	pagination.TotalRows = totalRows
	pagination.TotalPages = totalPages
	pagination.Rows = tasks

	c.JSON(http.StatusOK, pagination)
}

// @Summary Get a task by ID
// @Description Get a task by ID
// @Tags tasks
// @Accept json
// @Produce json
// @Param id path int true "Task ID"
// @Success 200 {object} models.Task
// @Failure 404 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /tasks/{id} [get]
func (h *TaskHandler) GetTask(c *gin.Context) {
	var task models.Task
	id := c.Param("id")
	if err := h.DB.First(&task, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Task not found"})
		return
	}
	c.JSON(http.StatusOK, task)
}

// @Summary Update a task
// @Description Update a task by ID
// @Tags tasks
// @Accept json
// @Produce json
// @Param id path int true "Task ID"
// @Param task body models.Task true "Task"
// @Success 200 {object} models.Task
// @Failure 400 {object} gin.H
// @Failure 404 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /tasks/{id} [put]
func (h *TaskHandler) UpdateTask(c *gin.Context) {
	var task models.Task
	id := c.Param("id")
	if err := h.DB.First(&task, id).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Task not found"})
		return
	}
	if err := c.ShouldBindJSON(&task); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}
	if err := h.DB.Save(&task).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, task)
}

// @Summary Delete a task
// @Description Delete a task by ID
// @Tags tasks
// @Accept json
// @Produce json
// @Param id path int true "Task ID"
// @Success 200 {object} gin.H
// @Failure 404 {object} gin.H
// @Failure 500 {object} gin.H
// @Router /tasks/{id} [delete]
func (h *TaskHandler) DeleteTask(c *gin.Context) {
	var task models.Task
	id := c.Param("id")
	if err := h.DB.Delete(&task, id).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		return
	}
	c.JSON(http.StatusOK, gin.H{"message": "Task deleted"})
}
