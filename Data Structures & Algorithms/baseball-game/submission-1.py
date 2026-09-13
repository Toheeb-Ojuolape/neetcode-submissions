class Solution:
    def calPoints(self, operations: List[str]) -> int:
        result = []

        for val in operations:
            if val == '+':
                numSum = int(result[-1]) + int(result[-2])
                result.append(numSum)
            elif val == 'D':
                result.append(2 * int(result[-1]))
            elif val == 'C':
                result.pop()
            else:
                result.append(int(val))
            
        return sum(result)
        