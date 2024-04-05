// main.go

package main

import (
    "net/http"
    "github.com/labstack/echo/v4"
    "github.com/labstack/echo/v4/middleware"
    "gosample/packages" // main.goと同じディレクトリにrspパッケージがある場合
)

func main() {
    e := echo.New()
    e.Use(middleware.Logger())
    e.GET("/", func(c echo.Context) error {
        return c.String(http.StatusOK, "Hello, World!")
    })

    e.GET("/rsp/:hand", packages.PlayRsp)

    e.Logger.Fatal(e.Start(":3000"))
}
