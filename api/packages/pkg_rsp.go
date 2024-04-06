package packages

import (
    "fmt"
    "math/rand"
    "time"
    "strconv"
    "net/http"
    "encoding/json"
    "github.com/labstack/echo/v4"
)

type apiResponse struct {
    Message string
}

func PlayRsp(c echo.Context) error {
    fmt.Println("playRsp is called")
    var msg apiResponse
    r := rand.New(rand.NewSource(time.Now().UnixNano()))
    playerHandS := c.Param("hand")
    playerHandI, _ := strconv.Atoi(playerHandS)
    cpuHand := r.Intn(3) + 1
    fmt.Printf("player hand: %d, cpu hand: %d\n", playerHandI, cpuHand)
    switch (playerHandI - cpuHand + 3) % 3 {
    case 0:
        msg.Message = "draw"
    case 1:
        msg.Message = "player lose"
    default:
        msg.Message = "player win"
    }
    msgJson, err := json.Marshal(msg)
	if err != nil {
		fmt.Println(err)
	}
    return c.JSON(http.StatusOK, msgJson)
}
