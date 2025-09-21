FROM golang:1.25.1-alpine

WORKDIR /app

RUN apk update && apk add --no-cache curl git
RUN go install github.com/air-verse/air@v1.63.0
RUN go install github.com/swaggo/swag/cmd/swag@latest

COPY go.mod go.sum ./
RUN go mod download

COPY . .

CMD ["air", "-c", ".air.toml"]