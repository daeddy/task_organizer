package models

import (
	"time"

	"gorm.io/gorm"
)

type TaskStatus string // @name TaskStatus

const (
	StatusNotUrgent TaskStatus = "Not urgent"
	StatusDueSoon   TaskStatus = "Due soon"
	StatusOverdue   TaskStatus = "Overdue"
)

type BaseTask struct {
	Name        string    `json:"name"`
	Description string    `json:"description"`
	DueDate     time.Time `json:"due_date"`
} // @name BaseTask

type Task struct {
	BaseTask
	ID        uint       `json:"id" gorm:"primaryKey"` // Add JSON tag for ID
	CreatedAt time.Time  `json:"created_at"`
	UpdatedAt time.Time  `json:"updated_at"`
	Status    TaskStatus `json:"status" gorm:"-"`
} // @name Task

func (t *Task) CalculateStatus() {
	now := time.Now()
	if t.DueDate.Before(now) {
		t.Status = StatusOverdue
	} else if t.DueDate.Before(now.Add(7 * 24 * time.Hour)) {
		t.Status = StatusDueSoon
	} else {
		t.Status = StatusNotUrgent
	}
}

func (t *Task) AfterFind(tx *gorm.DB) (err error) {
	t.CalculateStatus()
	return
}

func (t *Task) AfterCreate(tx *gorm.DB) (err error) {
	t.CalculateStatus()
	return
}

func (t *Task) AfterSave(tx *gorm.DB) (err error) {
	t.CalculateStatus()
	return
}
