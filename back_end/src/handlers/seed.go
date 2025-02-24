package handlers

import (
	"log"
	"math/rand"
	"strconv"
	"time"

	"back_end/src/models"

	"gorm.io/gorm"
)

func SeedData(db *gorm.DB) {
	var count int64
	db.Model(&models.Task{}).Count(&count)

	// Make seeding idempotent, its just make sure
	// there's enough data to demo pagination
	if count > 0 {
		log.Println("Database already seeded")
		return
	}

	dueDates := []time.Time{
		time.Now().AddDate(0, 0, -1), // Yesterday
		time.Now().AddDate(0, 0, 2),  // 2 days from now
		time.Now().AddDate(0, 0, 10), // 10 days from now
	}

	for i := 1; i <= 15; i++ {
		task := models.Task{
			BaseTask: models.BaseTask{
				Name:        "Name #" + strconv.Itoa(i),
				Description: "Description #" + strconv.Itoa(i),
				DueDate:     dueDates[rand.Intn(len(dueDates))],
			},
		}

		if err := db.Create(&task).Error; err != nil {
			log.Printf("Could not seed task: %v", err)
		}
	}
}
