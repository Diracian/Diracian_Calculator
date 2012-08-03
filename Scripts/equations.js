function One1() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	if(a==""){
		a = parseInt(b) + c*d;
		document.getElementById('a').value = a;
	}
	if(b==""){
		b = a - c*d;
		document.getElementById('b').value = b;
	}
	if(c==""){
		c = (a-b)/d;
		document.getElementById('c').value = c;
	}
	if(d==""){
		d = (a-b)/c;
		document.getElementById('d').value = d;
	}				
}
function One2() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	e = document.getElementById('e').value;
	if(a==""){
		a = parseInt(b) + parseInt(c*d) + parseInt(.5*e*d*d)
		document.getElementById('a').value = a;
	}
	if(b==""){
		b = parseInt(a) - parseInt(c*d) - parseInt(.5*e*d*d)
		document.getElementById('b').value = b;
	}
	if(c==""){
		c = (parseInt(a) - parseInt(b) - parseInt(.5*e*d*d))/d
		document.getElementById('c').value = c;
	}
	if(d==""){
		d = "";
		document.getElementById('d').value = d;
	}
	if(e==""){
		e = Math.round((2*(parseInt(a) - parseInt(b) - parseInt(c*d))/parseInt(d*d))*10)/10
		document.getElementById('e').value = e;
	}				
}
function One3() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	e = document.getElementById('e').value;
	if(a==""){
		a = Math.sqrt(b*b + 2*c*(d - e))
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = Math.sqrt(a*a - 2*c*(d - e))
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = (a*a - b*b)/(2*(d - e))
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = parseInt(e) + parseInt((a*a - b*b)/(2*c))
		document.getElementById('d').value = d;
	}				
	if(e==""){
		e = parseInt(d) - parseInt((a*a - b*b)/(2*c))
		document.getElementById('e').value = e;
	}				
}
function One4() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b*c
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/c
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/b
		document.getElementById('c').value = c;
	}						
}
function One5() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b*c
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/c
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/b
		document.getElementById('c').value = c;
	}						
}
function One6() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b*b/c
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = Math.sqrt(a*c)
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = b*b/a
		document.getElementById('c').value = c;
	}				
}
function One7() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	if(a==""){
		a = b*c*Math.sin(d*Math.PI/180)
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/(c*Math.sin(d*Math.PI/180))
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/(b*Math.sin(d*Math.PI/180))
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = (Math.asin(a/(b*c)))*180/Math.PI
		document.getElementById('d').value = d;
	}				
}
function One8() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b*c
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/c
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/b
		document.getElementById('c').value = c;
	}				
}
function One9() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b*c
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/c
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/b
		document.getElementById('c').value = c;
	}					
}
function One10() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = .5*b*c*c
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = 2*a/(c*c)
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = Math.sqrt(2*a/b)
		document.getElementById('c').value = c;
	}				
}
function One11() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	if(a==""){
		a = b*c*d;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/(c*d);
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/(b*d);
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = a/(b*c)
		document.getElementById('d').value = d;
	}				
}
function One12() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	if(a==""){
		a = b*c*Math.round(Math.cos(d*Math.PI/180)*1000000)/1000000
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/(c*Math.round(Math.cos(d*Math.PI/180)*1000000)/1000000)
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/(b*Math.round(Math.cos(d*Math.PI/180)*1000000)/1000000)
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = (Math.round(Math.acos(a/(b*c))*10000*180/Math.PI))/10000
		document.getElementById('d').value = d;
	}				
}
function One13() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b/c
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a*c
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = b/a
		document.getElementById('c').value = c;
	}				
}
function One14() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	if(a==""){
		a = b*c*Math.round(Math.cos(d*Math.PI/180)*1000000)/1000000
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/(c*Math.round(Math.cos(d*Math.PI/180)*1000000)/1000000)
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/(b*Math.round(Math.cos(d*Math.PI/180)*1000000)/1000000)
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = (Math.round(Math.acos(a/(b*c))*10000*180/Math.PI))/10000
		document.getElementById('d').value = d;
	}				
}
function One15() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = -b*c;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = -a/c;
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = -a/b;
		document.getElementById('c').value = c;
	}				
}
function One16() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = .5*b*c*c
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = 2*a/(c*c)
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = Math.sqrt(2*a/b)
		document.getElementById('c').value = c;
	}				
}
function One17() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = Math.round(100000*2*Math.PI*Math.sqrt(b/c))/100000
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = Math.round(100000*(a*a*c)/(4*Math.PI*Math.PI))/100000
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = Math.round(100000*(b*4*Math.PI*Math.PI)/(a*a))/100000
		document.getElementById('c').value = c;
	}				
}
function One18() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = Math.round(100000*2*Math.PI*Math.sqrt(b/c))/100000
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = Math.round(100000*(a*a*c)/(4*Math.PI*Math.PI))/100000
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = Math.round(100000*(b*4*Math.PI*Math.PI)/(a*a))/100000
		document.getElementById('c').value = c;
	}				
}
function One19() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	if(a==""){
		a = 1/b
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = 1/a
		document.getElementById('b').value = b;
	}				
}
function One20() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	e = .00000000006671;
	if(a==""){
		a = e*b*c/parseInt(d*d)
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a*parseInt(d*d)/(e*c)
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a*parseInt(d*d)/(e*b)
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = (e*b*c/a)^(.5)
		document.getElementById('d').value = d;
	}					
}
function One21() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	e = .00000000006671;
	if(a==""){
		a = e*parseInt(b)*parseInt(c)/parseInt(d);
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = parseInt(a)*parseInt(d)/(parseInt(c)*e);
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = parseInt(a)*parseInt(d)/(parseInt(b)*e);
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = e*parseInt(b)*parseInt(c)/parseInt(a);
		document.getElementById('d').value = d;
	}					
}
function Two1() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	e = 8987551787;
	if(a==""){
		a = e*b*c/parseInt(d*d);
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a*parseInt(d*d)/(e*c);
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a*parseInt(d*d)/(e*b);
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = Math.sqrt(e*b*c/a);
		document.getElementById('d').value = d;
	}	
}
function Two2() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b/c;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a*c;
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = b/a;
		document.getElementById('c').value = c;
	}					
}
function Two3() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	e = 8987551787;
	if(a==""){
		a = e*b*c/d;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a*d/(c*e);
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a*d/(b*e);
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = e*b*c/a;
		document.getElementById('d').value = d;
	}
}
function Two4() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = -b/c;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = -a*c;
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = -b/a;
		document.getElementById('c').value = c;
	}						
}
function Two5() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b/c;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a*c;
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = b/a;
		document.getElementById('c').value = c;
	}						
}
function Two6() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = 8987551787;
	if(a==""){
		a = b*d/c;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a*c/d;
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = b*d/a;
		document.getElementById('c').value = c;
	}						
}
function Two7() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = .5*b*c
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = 2*a/c
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = 2*a/b
		document.getElementById('c').value = c;
	}				
}
function Two8() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b*c*c/2
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = 2*a/(c*c)
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = Math.sqrt(2*a/b)
		document.getElementById('c').value = c;
	}					
}
function Two9() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b/c;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a*c;
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = b/a;
		document.getElementById('c').value = c;
	}						
}
function Two10() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	if(a==""){
		a = b*c/d
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a*d/c
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a*d/b
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = b*c/a
		document.getElementById('d').value = d;
	}	
}
function Two11() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b*c
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/c
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/b
		document.getElementById('c').value = c;
	}				
}
function Two12() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b*c
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/c
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/b
		document.getElementById('c').value = c;
	}					
}
function Two13() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	e = document.getElementById('e').value;
	if(a==""){
		a = b*c*d*Math.sin(e*Math.PI/180)
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/(c*d*Math.sin(e*Math.PI/180))
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/(b*d*Math.sin(e*Math.PI/180))
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = a/(b*c*Math.sin(e*Math.PI/180))
		document.getElementById('d').value = d;
	}
	if(e==""){
		e = Math.asin(a/(b*c*d))*(180/Math.PI)
		document.getElementById('e').value = e;
	}
}
function Two14() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	e = document.getElementById('e').value;
	if(a==""){
		a = b*c*d*Math.sin(e*Math.PI/180)
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/(c*d*Math.sin(e*Math.PI/180))
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/(b*d*Math.sin(e*Math.PI/180))
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = a/(b*c*Math.sin(e*Math.PI/180))
		document.getElementById('d').value = d;
	}
	if(e==""){
		e = Math.asin(a/(b*c*d))*(180/Math.PI)
		document.getElementById('e').value = e;
	}
}
function Two15() {
	a = document.getElementById('a').value;
	b = 4*Math.PI*.0000001
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	if(a==""){
		a = b*c/(2*Math.PI*d)
		document.getElementById('a').value = a;
	}								
	if(c==""){
		c = Math.round(1000000*a*2*Math.PI*d/b)/1000000
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = Math.round(1000000*b*c/(a*2*Math.PI))/1000000
		document.getElementById('d').value = d;
	}	
}
function Two16() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	if(a==""){
		a = b*c*Math.round(Math.cos(d*Math.PI/180)*1000000)/1000000
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/(c*Math.round(Math.cos(d*Math.PI/180)*1000000)/1000000)
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/(b*Math.round(Math.cos(d*Math.PI/180)*1000000)/1000000)
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = (Math.round(Math.acos(a/(b*c))*100*180/Math.PI))/100
		document.getElementById('d').value = d;
	}
}
function Two17() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = -b/c;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = -a*c;
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = -b/a;
		document.getElementById('c').value = c;
	}							
}
function Two18() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	if(a==""){
		a = b*c*d;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/(c*d);
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/(b*d);
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = a/(b*c);
		document.getElementById('d').value = d;
	}
}
function Three1() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	e = document.getElementById('e').value;
	if(a==""){
		a = parseInt(b) + parseInt(c*d*e)
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = parseInt(a) - parseInt(c*d*e)
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = (parseInt(a)-parseInt(b))/(d*e)
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = (parseInt(a)-parseInt(b))/(c*e)
		document.getElementById('d').value = d;
	}
	if(e==""){
		e = (parseInt(a)-parseInt(b))/(c*d)
		document.getElementById('e').value = e;
	}				
}
function Three2() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	if(a==""){
		a = b*c*d;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/(c*d);
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/(b*d);
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = a/(b*c);
		document.getElementById('d').value = d;
	}			
}
function Three3() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	if(a==""){
		a = c*d/b
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = c*d/a
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a*b/d
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = a*b/c
		document.getElementById('d').value = d;
	}			
}
function Three4() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	e = document.getElementById('e').value;
	f = document.getElementById('f').value;
	if(a==""){
		a = parseInt(b) + parseInt(c*d*e) + parseInt(c*f*f/2)
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a - c*d*e - .5*c*f*f
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = (a - b)/(d*e + .5*f*f)
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = (a - b - .5*c*f*f)/(c*e)
		document.getElementById('d').value = d;
	}
	if(e==""){
		e = (a - b - .5*c*f*f)/(c*d)
		document.getElementById('e').value = e;
	}
	if(f==""){
		f = Math.sqrt(2*(a - b - c*d*e)/c)
		document.getElementById('f').value = f;
	}			
}
function Three5() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	if(a==""){
		a = b*c*d;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/(c*d);
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/(b*d);
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = a/(b*c);
		document.getElementById('d').value = d;
	}			
}
function Three6() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	e = document.getElementById('e').value;
	if(a==""){
		a = b*c*d/e
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a*e/(c*d)
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a*e/(b*d)
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = a*e/(b*c)
		document.getElementById('d').value = d;
	}
	if(e==""){
		e = b*c*d/a
		document.getElementById('e').value = e;
	}			
}
function Three7() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b/c
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a*c
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = b/a
		document.getElementById('c').value = c;
	}							
}
function Three8() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	e = .000000000000000000000013806488;
	if(a==""){
		a = e*c*d/b;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = e*c*d/a;
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a*b/(e*d);
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = a*b/(e*c)
		document.getElementById('d').value = d;
	}
}
function Three9() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	e = document.getElementById('e').value;
	if(a==""){
		a = e*c*d/b;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = e*c*d/a;
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a*b/(e*d);
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = a*b/(e*c)
		document.getElementById('d').value = d;
	}
	if(e==""){
		e = a*b/(c*d)
		document.getElementById('e').value = e;
	}				
}			
function Three10() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = 3*b*c/2
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = 2*a/(3*c)
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = 2*a/(3*b)
		document.getElementById('c').value = c;
	}							
}
function Three11() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = 8.3144621;
	if(a==""){
		a = Math.round(Math.sqrt(3*d*b/c)*1000000)/1000000
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = Math.round(a*a*c/(3*d)*1000000)/1000000
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = Math.round(3*b*d/(a*a)*1000000)/1000000
		document.getElementById('c').value = c;
	}							
}
function Three12() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = .000000000000000000000013806488;
	if(a==""){
		a = Math.sqrt(3*d*b/c)
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = Math.round(a*a*c/(3*d)*1000000000)/1000000000
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = Math.round(3*b*d/(a*a)*1000000000)/1000000000
		document.getElementById('c').value = c;
	}			
}
function Three13() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = -b*c
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = -a/c
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = -a/b
		document.getElementById('c').value = c;
	}							
}
function Three14() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = parseInt(b) + parseInt(c)
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = parseInt(a) - parseInt(c)
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = parseInt(a) - parseInt(b)
		document.getElementById('c').value = c;
	}							
}
function Three15() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b/c
		if(a<0){
			a = -a;
			document.getElementById('a').value = a;
		}
		else{
			document.getElementById('a').value = a;
		}
	}				
	if(b==""){
		b = a*c
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = b/a
		document.getElementById('c').value = c;
	}							
}
function Four1() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b*c
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/c
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a/b
		document.getElementById('c').value = c;
	}							
}
function Four2() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	if(a==""){
		a = 299792458/b
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = 299792458/a
		document.getElementById('b').value = b;
	}							
}
function Four3() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	if(a==""){
		a = Math.round(1000000000*c*Math.sin(d/57.295800000006835)/Math.sin(b/57.295800000006835))/1000000000
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b =  Math.round(1000000000*57.295800000006835*Math.asin(c*Math.sin(d/57.295800000006835)/a))/1000000000
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c =  Math.round(1000000000*a/(Math.sin(d/57.295800000006835)/Math.sin(b/57.295800000006835)))/1000000000
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d =  Math.round(1000000000*57.295800000006835*Math.asin(a*Math.sin(b/57.295800000006835)/c))/1000000000
		document.getElementById('d').value = d;
	}			
}
function Four4() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = 57.295800000006835*Math.asin(b/c)
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = Math.sin(a/57.295800000006835)*c
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = b/Math.sin(a/57.295800000006835)
		document.getElementById('c').value = c;
	}							
}
function Four5() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = 1/(1/c - 1/b)
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = 1/(1/c - 1/a)
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = 1/(1/a + 1/b)
		document.getElementById('c').value = c;
	}							
}
function Four6() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = b/c
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a*c
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = b/a
		document.getElementById('c').value = c;
	}			
}
function Four7() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	if(a==""){
		a = -b/c;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = -a*c;
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = -b/a;
		document.getElementById('c').value = c;
	}				
}
function Four8() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	if(a==""){
		a = b/2
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = 2*a
		document.getElementById('b').value = b;
	}							
}
function Four9() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	if(a==""){
		a = c*d/Math.sin(b/57.295800000006835)
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = Math.asin(c*d/a)*57.295800000006835
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a*Math.sin(b/57.295800000006835)/d
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = a*Math.sin(b/57.295800000006835)/c
		document.getElementById('d').value = d;
	}			
}
function Four10() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = document.getElementById('c').value;
	d = document.getElementById('d').value;
	e = document.getElementById('e').value;
	if(a==""){
		a = b*c*d/e;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a*e/(c*d);
		document.getElementById('b').value = b;
	}				
	if(c==""){
		c = a*e/(b*d);
		document.getElementById('c').value = c;
	}				
	if(d==""){
		d = a*e/(b*c);
		document.getElementById('d').value = d;
	}
	if(e==""){
		e = b*c*d/a;
		document.getElementById('e').value = e;
	}			
}
function Five1() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = .0000000000000000000000000000000006626068;	
	if(a==""){
		a = b*c;
		document.getElementById('a').value = a;
	}				
	if(b=="") {
		b = a/c;
		document.getElementById('b').value = b;
	}				
}
function Five2() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = 299792458;
	if(a==""){
		a = b*c;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/c;
		document.getElementById('b').value = b;
	}							
}
function Five3() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	d = .0000000000000000000000000000000006626068;
	if(a==""){
		a = d/b;
		document.getElementById('a').value = a;
	}								
	if(b==""){
		b = d/a;
		document.getElementById('b').value = b;
	}							
}
function Five4() {
	a = document.getElementById('a').value;
	b = document.getElementById('b').value;
	c = 299792458;
	if(a==""){
		a = b*c*c;
		document.getElementById('a').value = a;
	}				
	if(b==""){
		b = a/(c*c);
		document.getElementById('b').value = b;
	}										
}