a = [[1, 2], [3, 4], [], [1], [], [], [9]]


class vector2D:
    def __init__(self, vec):
        self.vec = vec
        self.outer = 0
        self.inner = 0
        self.n = len(vec)

    def next(self):
        while self.outer < self.n and self.inner == len(self.vec[self.outer]):
            self.outer += 1
            self.inner = 0
        res = self.vec[self.outer][self.inner]
        self.inner += 1
        return res

    def hasNext(self):
        while self.outer < self.n and self.inner == len(self.vec[self.outer]):
            self.outer += 1
            self.inner = 0
        return self.outer < self.n


v = vector2D(a)
print(v.next())
print(v.next())
print(v.next())
print(v.hasNext())
print(v.next())
print(v.next())
print(v.hasNext())
print(v.next())
print(v.hasNext())
print(v.hasNext())

