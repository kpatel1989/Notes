Array.prototype.insertUnique = function(object){
    if (this.indexOf(object) == -1){
        this.push(object);
    }
    return this;
}
