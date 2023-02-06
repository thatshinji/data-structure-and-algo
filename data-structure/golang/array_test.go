package array_test

import (
	"math/rand"
	"testing"
)

func randomAccess(nums []int) (randomNum int) {
	randomIndex := rand.Intn(len(nums))
	randomNum = nums[randomIndex]
	return randomNum
}

func TestRandomAccess(t *testing.T) {
	arr := []int{1, 2, 3, 4, 5}
	t.Log(randomAccess(arr))
}
