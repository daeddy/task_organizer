FROM golang:1.24-alpine

WORKDIR /app

RUN apk update && apk add --no-cache curl
RUN go install github.com/air-verse/air@latest
RUN go install github.com/swaggo/swag/cmd/swag@latest

COPY go.mod go.sum ./
RUN go mod download

COPY . .

CMD ["air", "-c", ".air.toml"]