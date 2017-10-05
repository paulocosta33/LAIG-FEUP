function MySphere(scene, radius, stacks, slices)
{
    CGFobject.call(this,scene);

    this.radius = radius;
    this.slices = slices;
    this.stacks = stacks;

    this.initBuffers();
};

MySphere.prototype = Object.create(CGFobject.prototype);
MySphere.prototype.constructor=MySphere;

MySphere.prototype.initBuffers = function ()
{
    this.vertices = [];
    this.normals = [];
    this.indices = [];

    for(var i = 0; i <= this.stacks; i++)
    {
        var verticalAngle = Math.PI/this.stacks * i;
        var cosvertical = Math.cos(verticalAngle);
        var sinvertical = Math.sin(verticalAngle);

        for(var j = 0; j <= this.slices; j++)
        {
            var horizontalAngle = Math.PI * 2/this.slices * j;
            var cosH = Math.cos(horizontalAngle);
            var sinH = Math.sin(horizontalAngle);

            this.vertices.push(this.radius * sinvertical * cosH, this.radius * sinvertical * sinH, this.radius*cosvertical);
            this.normals.push(sinvertical * cosH, sinvertical * sinH, cosvertical);
        }
    }

    for (var i = 0; i < this.stacks; i++)
    {
        for (var j = 0; j < this.slices; j++)
        {
            this.indices.push((i * (this.slices + 1)) + j, (i * (this.slices + 1)) + j + this.slices + 1, (i * (this.slices + 1)) + j + 1);
            this.indices.push((i * (this.slices + 1)) + j + this.slices + 1, (i * (this.slices + 1)) + j + this.slices + 2, (i * (this.slices + 1)) + j + 1);
        }
    }


    this.primitiveType=this.scene.gl.TRIANGLES;
    this.initGLBuffers();
}