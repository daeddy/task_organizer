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

type Task struct {
	gorm.Model
	Name        string     `json:"name"`
	Description string     `json:"description"`
	DueDate     time.Time  `json:"due_date"`
	Status      TaskStatus `json:"status" gorm:"-"`
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
