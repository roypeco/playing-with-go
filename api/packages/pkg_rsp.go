package packages

import (
    "fmt"
    "math/rand"
    "time"
    "strconv"
    "net/http"
    "github.com/labstack/echo/v4"
)

func PlayRsp(c echo.Context) error {
    fmt.Println("playRsp is called")
    var msg string
    r := rand.New(rand.NewSource(time.Now().UnixNano()))
    playerHandS := c.Param("hand")
    playerHandI, _ := strconv.Atoi(playerHandS)
    cpuHand := r.Intn(3) + 1
    fmt.Printf("player hand: %d, cpu hand: %d\n", playerHandI, cpuHand)
    switch (playerHandI - cpuHand + 3) % 3 {
    case 0:
        msg = "draw"
    case 1:
        msg = "player lose"
    default:
        msg = "player win"
    }
    return c.String(http.StatusOK, msg)
}