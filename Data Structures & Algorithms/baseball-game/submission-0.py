class Solution:
    def calPoints(self, operations: List[str]) -> int:
        result = []

        for val in operations:
            if val == '+':
                n = len(result)
                numSum = int(result[n-1]) + int(result[n-2])
                result.append(numSum)
            elif val == 'D':
                n = len(result)
                result.append(2 * int(result[n-1]))
            elif val == 'C':
                result.pop()
            else:
                result.append(int(val))
            
        return sum(result)
        