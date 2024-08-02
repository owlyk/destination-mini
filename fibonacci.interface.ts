package main

type UserInput interface {
    GetInput() int
}

type FibonacciNumbers interface {
    GetNumbers() []int
}

type Message interface {
    GetMessage() string
}