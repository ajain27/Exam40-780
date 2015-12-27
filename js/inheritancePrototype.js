	function userObject (){
		this.fname = "Ankit Jain";
		this.country  = "India";
		this.age  = 29;
	}

	var myobj = new userObject();
	// console.log(myobj.fname);
	// console.log(myobj.country);
	// console.log(myobj.age);


	function computeArea() {
		var area = this.radius * this.radius * 3.14;
		return area;
	}

	function computeDiameter() {
		var diameter = this.radius*2
		return diameter;
	}

	function Circle(r){
		this.radius = r;
		this.area = computeArea;
		this.dia = computeDiameter;
	}

	var mycircle = new Circle(20);
	// console.log(mycircle.area());
	// console.log(mycircle.dia());

	
	function doSomething() {
		// alert("Do something");
	}

	var doSomethingElse = function() {
		// alert("Do something else");
	}
	doSomethingElse();

// Practicing the prototype / inheritance / object oriented JS
	function Player (argument){
		this.fname;
		this.lname;
		this.age = 29;

		this.completeName = function completeName (fname, lname){
			return "Name: " + fname + " " + lname;
		}
	}

	n1 = new Player;
	n2 = new Player;

	// alert(n1.completeName("Ankit", "Jain"));

	Player.prototype.qualification = function(arg1){
		return "Qualification: " + arg1 ;		
	};

	// alert(n1.qualification("Masters"));


	// Inheritance 
	function ParentClass (argument){
		this.parentPropery1 = "Hola";
		this.parentMethod1 = function parentmethod (argument){
			return "Parent Method Return Data ...";			
		}
	}	
	function ChildClass (){
		this.childPropery1 = "Adios";
		this.childMethod1 = function childmethod (argument){
			return "Child Method Return Data ...";			
		}
	}
	// Make the child class inherit all the parent class properties and methods. 
	ChildClass.prototype = new ParentClass();
	var child = new ChildClass();
	//alert( child instanceof ChildClass );
	//alert( child instanceof ParentClass );
	// alert(child.parentMethod1("Result: "))

	// Now lets override method in parentclass and child class 
	ChildClass.prototype.parentMethod1 = function parentMethod1(arg1){
		return "This is the overridden stuff";
	};

	// alert(child.parentMethod1("Result: "));