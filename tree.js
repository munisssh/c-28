class Tree {
    constructor(x, y) {
        this.x = x
        this.y = y
        this.width = 450
        this.height = 600
        this.thickness = 10
        this.image = loadImage("tree.png")
        this.bottom = Bodies.rectangle(this.x, this.y, this.width, this.thickness, { isStatic: true })
        this.left = Bodies.rectangle(0, this.y - this.height / 2, this.thickness, this.height, { isStatic: false })
        this.right = Bodies.rectangle(this.x + this.width / 2, this.y - this.height / 2, this.thickness, this.height, { isStatic: false })
        World.add(World,this.bottom)
        World.add(World,this.left)
        World.add(World,this.right)
    }
    display() {
var pos=this.bottom.position
push()
translate(pos.x,pos.y+10)
fill(255)
imageMode(CENTER)
image(this.image,0,-this.height/2,this.width,this.height)
pop()
    }
}