package handlers

const (
	DefaultLimit = 10
	DefaultPage  = 1
)

// Based on https://dev.to/rafaelgfirmino/pagination-using-gorm-scopes-3k5f

type Pagination struct {
	Limit      int         `json:"limit,omitempty" form:"limit"`
	Page       int         `json:"page,omitempty" form:"page"`
	TotalRows  int64       `json:"total_rows"`
	TotalPages int         `json:"total_pages"`
	Rows       interface{} `json:"rows"`
}

func (p *Pagination) GetOffset() int {
	return (p.GetPage() - 1) * p.GetLimit()
}

func (p *Pagination) GetLimit() int {
	if p.Limit == 0 {
		p.Limit = DefaultLimit
	}
	return p.Limit
}

func (p *Pagination) GetPage() int {
	if p.Page == 0 {
		p.Page = DefaultPage
	}
	return p.Page
}
