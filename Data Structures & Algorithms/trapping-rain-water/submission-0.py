class Solution:
    def trap(self, height: List[int]) -> int:
        # keep track of the max height on the left
        # keep track of the max height on the right
        # pick the minimum of the max left height and max right height
        # calculate the diff between the min(L, R) and i and sum it up to  
        # get the result
        if not height: return 0
        left, right = 0, len(height) - 1
        leftMax, rightMax = height[left], height[right]
        result = 0

        while left < right:
            if leftMax < rightMax:
                left +=1
                leftMax = max(leftMax, height[left])
                result += leftMax - height[left]
            else:
                right -= 1
                rightMax = max(rightMax, height[right])
                result += rightMax - height[right]
        
        return result

        
        