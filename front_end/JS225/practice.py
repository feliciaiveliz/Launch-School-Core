def calculate_byte(filesize):
  block_size = 4096
  # block = filesize // block_size
  partial_block_remainder = filesize % block_size
  if filesize <= block_size:
    return block_size
  return block_size * 2

print(calculate_byte(1))    # 4096
print(calculate_byte(4096)) # 4096
print(calculate_byte(4097)) # 8192
print(calculate_byte(6000)) # 8192  # without block remainder



def calculate_byte(filesize):
  block_size = 4096
  # block = filesize // block_size
  partial_block_remainder = filesize % block_size
  if partial_block_remainder > 0:
    return block_size * 2
  return block_size 

print(calculate_byte(1))    # 4096
print(calculate_byte(4096)) # 4096
print(calculate_byte(4097)) # 8192
print(calculate_byte(6000)) # 8192  # without block remainder