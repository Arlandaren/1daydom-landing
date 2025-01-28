from PIL import Image

# Размер изображения
width, height = 1000, 925

# Начальный и конечный цвета градиента (RGB)
start_color = (2, 15, 25)    # Более тёмный оттенок индиго
end_color = (6, 44, 71)      # Цвет #062c47

# Создаём новое изображение
gradient = Image.new('RGB', (width, height))

# Создаём плавный градиент без швов
for y in range(height):
    ratio = y / (height - 1)  # Обеспечивает полное покрытие градиента
    r = int(start_color[0]*(1 - ratio) + end_color[0] *ratio)
    g = int(start_color[1]* (1 - ratio) + end_color[1]*ratio)
    b = int(start_color[2] *(1 - ratio) + end_color[2]* ratio)
    for x in range(width):
        gradient.putpixel((x, y), (r, g, b))

# Сохраняем изображение без сжатия для максимального качества
gradient.save('gradient.png')
