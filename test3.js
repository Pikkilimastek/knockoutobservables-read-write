var ViewModelPerson=function(){
    var self=this;

    self.firstname=ko.observable("Narendra")
    self.lastname=ko.observable("Kumar")
    self.fullname=ko.computed({
        read: function(){
            return self.firstname()+" "+self.lastname()
        },
        write: function(val){
            var arrName=val.split(" ")
            self.firstname(arrName[0])
            self.lastname(arrName[1])
        }
    })
}
ko.applyBindings(ViewModelPerson)