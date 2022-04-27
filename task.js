const parseCount = string => {
    if(isNaN(Number.parseInt(string))) {
        return new Error('Невалидное значение')
    } else {
        return Number.parseInt(string)
    }
}

const validateCount = string => {
    const result = parseCount(string)
    try {
        return result
    } catch(e) {
        return new Error(e)
    }
}

class Triangle {
    constructor(options) {
        this.a = options.a
        this.b = options.b
        this.c = options.c
    }

    getPerimeter() {
        if(this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.b < this.a) {
            return new Error('Треугольник с такими сторонами не существует')
        }
        return this.a + this.b + this.c
    }

    getArea() {
        if(this.a + this.b < this.c || this.a + this.c < this.b || this.b + this.b < this.a) {
            return new Error('Треугольник с такими сторонами не существует')
        }
        const p = (this.a + this.b + this.c) / 2
        return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
    }
}

const getTriangle = (a, b, c) => {
    const triangle = new Triangle({
        a : a,
        b : b,
        c : c
    })

    const area = triangle.getArea()
    const perimeter = triangle.getPerimeter()

    try {
        return (area, perimeter)
    } catch(e) {
        return new Error('Ошибка! Треугольник не существует')
    }
}