/**
 * MyGraphLeaf class, representing a leaf in the scene graph.
 * @constructor
 **/

function MyGraphLeaf(graph, xmlelem, type)
{
    this.graph = graph;

    this.type = type;

    this.object = null;

    var str = graph.reader.getString(xmlelem, 'args');
    var stringArray = str.split(" ");

    switch(this.type)
    {
        case 'rectangle':
            var x1 = parseFloat(stringArray[0]);
            var y1 = parseFloat(stringArray[1]);
            var x2 = parseFloat(stringArray[2]);
            var y2 = parseFloat(stringArray[3]);
            this.object = new MyRectangle(graph.scene, x1, y1, x2, y2);
            break;
        case 'sphere':
            var radius = parseFloat(stringArray[0]);
            var stacks = parseInt(stringArray[1]);
            var slices = parseInt(stringArray[2]);
            this.object = new MySphere(graph.scene, radius, stacks, slices);
            break;
        case 'cylinder':
            var height = parseFloat(stringArray[0]);
            var base = parseFloat(stringArray[1]);
            var top = parseFloat(stringArray[2]);
            var stacks = parseInt(stringArray[3]);
            var slices = parseInt(stringArray[4]);
            this.object = new MyCylinder(graph.scene, height, base, top, stacks, slices);
            break;
        case 'triangle':
            var x1 = parseFloat(stringArray[0]);
            var y1 = parseFloat(stringArray[1]);
            var z1 = parseFloat(stringArray[2]);
            var x2 = parseFloat(stringArray[3]);
            var y2 = parseFloat(stringArray[4]);
            var z2 = parseFloat(stringArray[5]);
            var x3 = parseFloat(stringArray[6]);
            var y3 = parseFloat(stringArray[7]);
            var z3 = parseFloat(stringArray[8]);
            this.object = new MyTriangle(graph.scene, x1, y1, z1, x2, y2, z2, x3, y3, z3);
        default:
            break;
    }
}

