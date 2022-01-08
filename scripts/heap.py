class maxheap:
    def __init__(self):
        self.heap = []
        self.size = 0

    def insert(self, val):
        self.heap.append(val)
        self.size += 1

        if self.size > 1:
            curr = self.size - 1
            while curr > 0 and self.heap[curr] > self.heap[(curr-1)//2]:
                self.swap(curr, (curr-1)//2)
                curr = (curr-1)//2

    def extract_min(self):
        if self.heap == 0:
            return
        root = self.heap[0]
        # replace the root with the last element
        self.heap[0] = self.heap[self.size-1]
        # remove the last element
        self.heap.pop()
        # Decrease the size of the heap
        self.size -= 1

        curr = 0
        while (2*curr+1) <= self.size - 1:
            max_child_idx = self.get_max_child(curr)

            if self.heap[max_child_idx] > self.heap[curr]:
                self.swap(max_child_idx, curr)
            curr = max_child_idx

        return root

    def get_max_child(self,idx):
        if (2*idx+2) > self.size - 1:
            return 2*idx + 1
        else:
            return 2*idx + 1 if self.heap[2*idx + 1] > self.heap[2*idx + 2] else 2*idx + 2

    def swap(self, idx1, idx2):
        self.heap[idx1], self.heap[idx2] = self.heap[idx2], self.heap[idx1]

    def print(self):
        print(self.heap)



