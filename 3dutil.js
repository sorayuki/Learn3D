//class for present and compute about vectors
function Vector(x, y, z)
{
    var r = { x:x, y:y, z:z };
    
    r.neg = function()
    {
        return Vector(-this.x, -this.y, -this.z);
    };
    
    r.add = function(rhs)
    {
        return Vector(this.x + rhs.x, this.y + rhs.y, this.z + rhs.z);
    };
    
    r.sub = function(rhs)
    {
        return this.add(rhs.neg());
    };
    
    r.dot = function(rhs)
    {
        return this.x * rhs.x + this.y * rhs.y + this.z * rhs.z;
    };
    
    r.mul = function(rhs)
    {
        return Vector(this.x * rhs, this.y * rhs, this.z * rhs);
    };
    
    r.cross = function(rhs)
    {
        var x = this.y * rhs.z - this.z * rhs.y;
        var y = this.z * rhs.x - this.x * rhs.z;
        var z = this.x * rhs.y - this.y * rhs.x;
        return Vector(x, y, z);
    };
    
    r.norm = function()
    {
        var sqrlen = this.x * this.x + this.y * this.y + this.z * this.z;
        var len = Math.sqrt(sqrlen);
        return Vector(this.x / len, this.y / len, this.z / len);
    };

    r.toString = function()
    {
        return new String("(" + this.x + ", " + this.y + ", " + this.z + ")");
    }
    
    return r;
}
